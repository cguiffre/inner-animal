/* =========================================================================
   quiz_logic.js — shared quiz vocabulary + scoring engine.

   Dual module: works as a classic browser <script> (declares globals that
   later inline scripts can use) AND as a Node CommonJS module (module.exports)
   so the logic can be unit-tested without a browser.

   Nothing here touches the DOM. computeShortlist resolves the animal roster
   from window.ANIMALS (browser) or globalThis.ANIMALS (Node/tests).
   ========================================================================= */

/* ---------- Realm derivation ---------- */
function getRealm(a){
  if(a && a.realm) return a.realm;
  const loc = (a && a.facets && a.facets.locomotion) ? a.facets.locomotion : [];
  const has = (k)=>Array.isArray(loc)&&loc.includes(k);
  if(has('flyer')||has('glider')) return 'air';
  if(has('swimmer')||has('diver')) return 'water';
  return 'land';
}

/* ---------- Triads (Stage A & B) + Lane-specific B ---------- */
const TRIADS = [
  {"id":"A1_weekend_plan","stage":"A","prompt":"It’s Saturday afternoon. What sounds best?","options":[
    {"label":"Tidepools & shoreline wandering","facet_boosts":{"biome":["coastal","reef"],"locomotion":["swimmer","diver"]},"trait_boosts":{"temperament":["curious"]}},
    {"label":"Treehouse & canopy walk","facet_boosts":{"biome":["forest"],"locomotion":["climber","glider"]},"trait_boosts":{"signature":["stealth"],"temperament":["calm"]}},
    {"label":"Open trail & wide views","facet_boosts":{"biome":["grassland/savanna","alpine/tundra"],"locomotion":["runner"]},"trait_boosts":{"temperament":["bold"], "signature":["vision"]}}
  ]},
  {"id":"A2_vacation_style","stage":"A","prompt":"Pick a vacation vibe:","options":[
    {"label":"Island snorkeling","facet_boosts":{"biome":["reef","coastal"],"locomotion":["swimmer","diver"]},"trait_boosts":{"signature":["patience"]}},
    {"label":"Cabin in the woods","facet_boosts":{"biome":["forest"],"diel":["diurnal"]},"trait_boosts":{"work_style":["planner"],"temperament":["calm"]}},
    {"label":"City rooftop breezes","facet_boosts":{"biome":["urban"],"locomotion":["glider","flyer"]},"trait_boosts":{"problem_approach":["observer"],"signature":["precision"]}}
  ]},
  {"id":"A3_social_battery","stage":"A","prompt":"At a big gathering you usually…","options":[
    {"label":"Find a quiet corner to recharge","facet_boosts":{"sociality":["solitary"]},"trait_boosts":{"social_style":["soloist"],"signature":["stealth"]}},
    {"label":"Stick with a tight crew","facet_boosts":{"sociality":["small_group"]},"trait_boosts":{"social_style":["collaborator"],"work_style":["tinkerer"]}},
    {"label":"Work the room","facet_boosts":{"sociality":["large_group"]},"trait_boosts":{"social_style":["coordinator"],"temperament":["bold"], "signature":["chatter"]}}
  ]},
  {"id":"A4_time_energy","stage":"A","prompt":"Your daily energy peaks around…","options":[
    {"label":"Sunrise","facet_boosts":{"diel":["diurnal"]},"trait_boosts":{"work_style":["early-riser"],"signature":["punctuality"]}},
    {"label":"Golden hour (dawn/dusk)","facet_boosts":{"diel":["crepuscular"]},"trait_boosts":{"problem_approach":["observer"],"temperament":["calm"]}},
    {"label":"Late night","facet_boosts":{"diel":["nocturnal"]},"trait_boosts":{"problem_approach":["improviser"],"temperament":["bold"]}}
  ]},
  {"id":"A5_height_water","stage":"A","prompt":"Comfort check:","options":[
    {"label":"I love heights & wind","facet_boosts":{"locomotion":["glider","flyer"]},"trait_boosts":{"work_style":["strategist"]}},
    {"label":"Give me water all day","facet_boosts":{"locomotion":["swimmer","diver"]},"trait_boosts":{"temperament":["playful"]}},
    {"label":"Feet on the ground, please","facet_boosts":{"locomotion":["runner","climber","jumper"]},"trait_boosts":{"work_style":["pathfinder"]}}
  ]},
  {"id":"A6_food_mode","stage":"A","prompt":"At a buffet, your strategy is…","options":[
    {"label":"Graze steadily","facet_boosts":{"diet":["herbivore"]},"trait_boosts":{"work_style":["endurance"],"problem_approach":["planner"]}},
    {"label":"Beeline to favorites","facet_boosts":{"diet":["carnivore"]},"trait_boosts":{"signature":["stealth"],"problem_approach":["observer"]}},
    {"label":"Sample a bit of everything","facet_boosts":{"diet":["omnivore"]},"trait_boosts":{"work_style":["opportunist"],"problem_approach":["improviser"]}}
  ]},
  {"id":"A7_climate","stage":"A","prompt":"You feel most alive in…","options":[
    {"label":"Crisp, snowy air","facet_boosts":{"biome":["alpine/tundra","arctic"]},"trait_boosts":{"signature":["resilience"],"temperament":["stoic"]}},
    {"label":"Temperate seasons","facet_boosts":{"biome":["forest","grassland/savanna"]},"trait_boosts":{"temperament":["adaptable"],"signature":["patience"]}},
    {"label":"Humid tropics","facet_boosts":{"biome":["coastal","wetland"]},"trait_boosts":{"temperament":["playful"],"signature":["creativity"]}}
  ]},
  {"id":"A8_workspace","stage":"A","prompt":"Your ideal workspace looks like…","options":[
    {"label":"Tidy bench, labeled bins","trait_boosts":{"signature":["precision"],"work_style":["perfectionist"]}},
    {"label":"Parts everywhere, mid‑build","trait_boosts":{"work_style":["tinkerer"],"problem_approach":["experimenter"]}},
    {"label":"Laptop, roaming between spots","trait_boosts":{"work_style":["pathfinder","opportunist"],"temperament":["adaptable"]}}
  ]},

  {"id":"B1_party_move","stage":"B","prompt":"At a party, what’s your move?","options":[
    {"label":"Balcony observer","trait_boosts":{"problem_approach":["observer"],"signature":["stealth"]}},
    {"label":"Hop between small groups","trait_boosts":{"work_style":["pathfinder"],"temperament":["curious"], "signature":["chatter"]}},
    {"label":"Hold court with a story","trait_boosts":{"temperament":["bold"],"social_style":["coordinator"], "signature":["presence"]}}
  ]},
  {"id":"B2_team_role","stage":"B","prompt":"On a team, you’re most often…","options":[
    {"label":"The strategist/organizer","trait_boosts":{"work_style":["strategist"],"problem_approach":["planner"]}},
    {"label":"The builder/maker","trait_boosts":{"work_style":["tinkerer","builder"],"signature":["precision"]}},
    {"label":"The scout/opportunity finder","trait_boosts":{"work_style":["pathfinder","opportunist"],"temperament":["adaptable"]}}
  ]},
  {"id":"B3_travel_style","stage":"B","prompt":"Travel preference:","options":[
    {"label":"Itinerary & reservations","trait_boosts":{"work_style":["planner"],"signature":["punctuality"]}},
    {"label":"Anchor plan + side quests","trait_boosts":{"temperament":["adaptable"],"problem_approach":["observer"]}},
    {"label":"Wander & improvise","trait_boosts":{"problem_approach":["improviser"],"signature":["agility"]}}
  ]},
  {"id":"B4_stress","stage":"B","prompt":"Under stress you tend to…","options":[
    {"label":"Slow down & breathe","trait_boosts":{"temperament":["calm"],"signature":["patience"]}},
    {"label":"Power through","trait_boosts":{"signature":["strength","grit"]}},
    {"label":"Pivot quickly","trait_boosts":{"signature":["agility","speed"]}}
  ]},
  {"id":"B5_games","stage":"B","prompt":"Game night pick:","options":[
    {"label":"Puzzles & mechanics","trait_boosts":{"signature":["precision"],"work_style":["tinkerer"]}},
    {"label":"Strategy world‑building","trait_boosts":{"work_style":["strategist"],"problem_approach":["observer"]}},
    {"label":"Fast action/arcade","trait_boosts":{"problem_approach":["improviser"],"signature":["speed"]}}
  ]},
  {"id":"B6_learn_tool","stage":"B","prompt":"New tool at work. You…","options":[
    {"label":"Read/watch then execute","trait_boosts":{"work_style":["planner"],"signature":["memory"]}},
    {"label":"Push buttons until it clicks","trait_boosts":{"problem_approach":["experimenter"],"work_style":["tinkerer"]}},
    {"label":"Copy example then remix","trait_boosts":{"problem_approach":["observer"],"signature":["creativity"]}}
  ]},
  {"id":"B7_nature_day","stage":"B","prompt":"Outdoors day:","options":[
    {"label":"Climb boulders & trees","facet_boosts":{"locomotion":["climber","jumper"]},"trait_boosts":{"work_style":["tinkerer"]}},
    {"label":"Swim/float/snorkel","facet_boosts":{"locomotion":["swimmer","diver"]},"trait_boosts":{"temperament":["playful"]}},
    {"label":"Ridge hike & fly drone","facet_boosts":{"locomotion":["glider","flyer"]},"trait_boosts":{"problem_approach":["observer"]}}
  ]},
  {"id":"B8_snack_style","stage":"B","prompt":"Snack strategy:","options":[
    {"label":"Graze","facet_boosts":{"diet":["herbivore"]},"trait_boosts":{"work_style":["endurance"]}},
    {"label":"Hunt the main dish","facet_boosts":{"diet":["carnivore"]},"trait_boosts":{"signature":["stealth"]}},
    {"label":"Sample widely","facet_boosts":{"diet":["omnivore"]},"trait_boosts":{"work_style":["opportunist"]}}
  ]},
  {"id":"B9_neighborhood","stage":"B","prompt":"Where do you feel most at home?","options":[
    {"label":"Urban edges","facet_boosts":{"biome":["urban"]},"trait_boosts":{"temperament":["adaptable"]}},
    {"label":"Small town/fields","facet_boosts":{"biome":["forest","grassland/savanna"]},"trait_boosts":{"temperament":["cautious"]}},
    {"label":"Remote & wild","facet_boosts":{"biome":["alpine/tundra","open_ocean","deep_sea"]},"trait_boosts":{"work_style":["endurance"]}}
  ]},
  {"id":"B10_bonding","stage":"B","prompt":"Preferred bonding:","options":[
    {"label":"Tight pair","facet_boosts":{"sociality":["pair_bond"]},"trait_boosts":{"social_style":["pair-bonder"]}},
    {"label":"Small crew","facet_boosts":{"sociality":["small_group"]},"trait_boosts":{"social_style":["collaborator"]}},
    {"label":"Large crowd","facet_boosts":{"sociality":["large_group"]},"trait_boosts":{"social_style":["coordinator"]}}
  ]},
  {"id":"B11_attention","stage":"B","prompt":"Your attention pattern is…","options":[
    {"label":"Broad explorer","trait_boosts":{"temperament":["adaptable"],"signature":["creativity"]}},
    {"label":"Deep specialist","trait_boosts":{"work_style":["perfectionist"],"signature":["precision"]}},
    {"label":"Scout & sample","trait_boosts":{"work_style":["pathfinder"],"temperament":["curious"]}}
  ]},
  {"id":"B12_risk","stage":"B","prompt":"Risk appetite:","options":[
    {"label":"Test small, scale later","trait_boosts":{"temperament":["cautious"],"work_style":["planner"]}},
    {"label":"Bet when odds favor","trait_boosts":{"temperament":["vigilant"],"work_style":["strategist"]}},
    {"label":"Jump in & learn fast","trait_boosts":{"temperament":["bold"],"problem_approach":["experimenter"]}}
  ]},
  {"id":"B13_persistence","stage":"B","prompt":"Sticking with hard things:","options":[
    {"label":"Relentless grinder","trait_boosts":{"signature":["persistence","grit"]}},
    {"label":"Iterate & refine","trait_boosts":{"work_style":["perfectionist"],"signature":["patience"]}},
    {"label":"Switch when it’s smart","trait_boosts":{"work_style":["opportunist"],"signature":["agility"]}}
  ]},
  {"id":"B14_home_base","stage":"B","prompt":"Home-base pattern:","options":[
    {"label":"Hold a territory","trait_boosts":{"signature":["persistence"],"work_style":["defender"]}},
    {"label":"Seasonal routes","trait_boosts":{"work_style":["endurance"],"signature":["patience"]}},
    {"label":"Nomadic roaming","trait_boosts":{"work_style":["opportunist"],"temperament":["adaptable"]}}
  ]},
  {"id":"B15_senses","stage":"B","prompt":"Your sensory edge:","options":[
    {"label":"Listen & feel","trait_boosts":{"signature":["patience","stealth"]}},
    {"label":"Scan & watch","trait_boosts":{"problem_approach":["observer"],"signature":["vision"]}},
    {"label":"Sniff & track","trait_boosts":{"signature":["precision"],"work_style":["sniffer"]}}
  ]},
  {"id":"B16_diy","stage":"B","prompt":"DIY or delegate?","options":[
    {"label":"Build it myself","trait_boosts":{"work_style":["builder","tinkerer"],"signature":["precision"]}},
    {"label":"Design & coordinate","trait_boosts":{"work_style":["strategist"],"social_style":["coordinator"]}},
    {"label":"Hack a quick fix","trait_boosts":{"problem_approach":["improviser"],"work_style":["opportunist"]}}
  ]},
  {"id":"B17_commute","stage":"B","prompt":"Commute mood:","options":[
    {"label":"Long route + podcasts","trait_boosts":{"work_style":["endurance"],"signature":["patience"]}},
    {"label":"Fastest route","trait_boosts":{"signature":["speed"],"work_style":["planner"]}},
    {"label":"Scenic detour","trait_boosts":{"work_style":["pathfinder"],"signature":["creativity"]}}
  ]},
  {"id":"B18_conflict","stage":"B","prompt":"In conflict, first move is…","options":[
    {"label":"Bridge & mediate","trait_boosts":{"social_style":["mediator"],"problem_approach":["diplomat"]}},
    {"label":"Shield & protect","trait_boosts":{"social_style":["protector"],"signature":["defense"]}},
    {"label":"Challenge & push","trait_boosts":{"social_style":["challenger"],"signature":["strength"]}}
  ]},

  /* --- NEW BEEFED UP QUESTIONS --- */

  {"id":"B19_memory","stage":"B","prompt":"Relationship with the past:","options":[
    {"label":"Forget & move on","trait_boosts":{"temperament":["adaptable"],"signature":["agility"]}},
    {"label":"Remember everything","trait_boosts":{"signature":["memory"],"work_style":["planner"]}},
    {"label":"Learn & teach","trait_boosts":{"social_style":["mentor"],"signature":["wisdom"]}}
  ]},
  {"id":"B20_communication","stage":"B","prompt":"Communication style:","options":[
    {"label":"Loud & broadcast","trait_boosts":{"social_style":["challenger"],"signature":["presence"]}},
    {"label":"Subtle signals","trait_boosts":{"temperament":["vigilant"],"signature":["stealth"]}},
    {"label":"Constant chatter","trait_boosts":{"social_style":["collaborator"],"signature":["chatter"]}}
  ]},
  {"id":"B21_authority","stage":"B","prompt":"View on authority:","options":[
    {"label":"Respect hierarchy","trait_boosts":{"social_style":["coordinator"],"signature":["loyalty"]}},
    {"label":"Live & let live","trait_boosts":{"temperament":["stoic"],"social_style":["soloist"]}},
    {"label":"Test the fence","trait_boosts":{"temperament":["curious"],"signature":["independence"]}}
  ]},
  {"id":"B22_patience","stage":"B","prompt":"Waiting in line:","options":[
    {"label":"Zen mode","trait_boosts":{"temperament":["calm"],"signature":["patience"]}},
    {"label":"Fidget & pace","trait_boosts":{"signature":["speed"],"temperament":["intense"]}},
    {"label":"Calculate shortcuts","trait_boosts":{"work_style":["opportunist"],"signature":["efficiency"]}}
  ]}
];

const LANE_TRIADS = {
  "air":[
    {"id":"B_AIR1_flight","stage":"B","prompt":"Your flight archetype:","options":[
      {"label":"Soar on thermals","facet_boosts":{"locomotion":["glider"]},"trait_boosts":{"work_style":["strategist"],"signature":["efficiency"]}},
      {"label":"Flap & dart","facet_boosts":{"locomotion":["flyer"]},"trait_boosts":{"signature":["agility","speed"]}},
      {"label":"Silent ambush","facet_boosts":{"diel":["nocturnal"]},"trait_boosts":{"signature":["stealth","silence"]}}
    ]},
    {"id":"B_AIR2_nesting","stage":"B","prompt":"Nest preference:","options":[
      {"label":"Cliff ledges","facet_boosts":{"biome":["alpine/tundra","coastal"]},"trait_boosts":{"signature":["resilience","grit"]}},
      {"label":"Tree canopy","facet_boosts":{"biome":["forest"]},"trait_boosts":{"work_style":["builder"],"signature":["engineering"]}},
      {"label":"Urban nooks","facet_boosts":{"biome":["urban"]},"trait_boosts":{"temperament":["adaptable"],"signature":["street-smart"]}}
    ]},
    {"id":"B_AIR3_hunting","stage":"B","prompt":"Foraging vibe:","options":[
      {"label":"Pursuit chase","trait_boosts":{"signature":["speed","velocity"]}},
      {"label":"Perch & scan","trait_boosts":{"problem_approach":["observer"],"signature":["vision"]}},
      {"label":"Scavenge & solve","trait_boosts":{"work_style":["opportunist"],"signature":["resourcefulness"]}}
    ]},
    {"id":"B_AIR4_wind","stage":"B","prompt":"Handling heavy wind:","options":[
      {"label":"Fight through it","trait_boosts":{"signature":["strength","persistence"]}},
      {"label":"Ride it out","trait_boosts":{"temperament":["adaptable"],"signature":["flow"]}},
      {"label":"Hide until it passes","trait_boosts":{"temperament":["cautious"],"signature":["security"]}}
    ]}
  ],
  "land":[
    {"id":"B_LAND1_terrain","stage":"B","prompt":"Terrain comfort:","options":[
      {"label":"Dense forest","facet_boosts":{"biome":["forest"]},"trait_boosts":{"signature":["stealth","camouflage"]}},
      {"label":"Open plains","facet_boosts":{"biome":["grassland/savanna"]},"trait_boosts":{"signature":["stamina","speed"]}},
      {"label":"Rock & cliff","facet_boosts":{"biome":["alpine/tundra","desert"]},"trait_boosts":{"signature":["balance","sure-footed"]}}
    ]},
    {"id":"B_LAND2_movement","stage":"B","prompt":"Ground movement:","options":[
      {"label":"Endurance trek","trait_boosts":{"work_style":["endurance"],"signature":["persistence"]}},
      {"label":"Burst sprint","trait_boosts":{"work_style":["sprinter"],"signature":["acceleration"]}},
      {"label":"Climb & spring","facet_boosts":{"locomotion":["climber","jumper"]},"trait_boosts":{"signature":["dexterity","agility"]}}
    ]},
    {"id":"B_LAND3_social","stage":"B","prompt":"Land social style:","options":[
      {"label":"Solo range","facet_boosts":{"sociality":["solitary"]},"trait_boosts":{"social_style":["soloist"],"signature":["independence"]}},
      {"label":"Small band","facet_boosts":{"sociality":["small_group"]},"trait_boosts":{"social_style":["collaborator"],"signature":["loyalty"]}},
      {"label":"Large herd","facet_boosts":{"sociality":["large_group"]},"trait_boosts":{"social_style":["coordinator"],"signature":["community"]}}
    ]},
    {"id":"B_LAND4_defense","stage":"B","prompt":"Defense mechanism:","options":[
      {"label":"Thick skin/armor","trait_boosts":{"signature":["defense","resilience"]}},
      {"label":"Blend in/hide","trait_boosts":{"signature":["camouflage"],"temperament":["cautious"]}},
      {"label":"Show teeth/bluff","trait_boosts":{"temperament":["bold"],"signature":["intimidation"]}}
    ]}
  ],
  "water":[
    {"id":"B_WATER1_zone","stage":"B","prompt":"Water zone:","options":[
      {"label":"Coastal kelp","facet_boosts":{"biome":["coastal","reef"]},"trait_boosts":{"temperament":["curious"],"signature":["creativity"]}},
      {"label":"Open ocean","facet_boosts":{"biome":["open_ocean"]},"trait_boosts":{"work_style":["endurance"],"signature":["range"]}},
      {"label":"Rivers & lakes","facet_boosts":{"biome":["river_lake","wetland"]},"trait_boosts":{"signature":["focus","flow"]}}
    ]},
    {"id":"B_WATER2_move","stage":"B","prompt":"Aquatic movement:","options":[
      {"label":"Dive & hold","facet_boosts":{"locomotion":["diver"]},"trait_boosts":{"signature":["patience","depth"]}},
      {"label":"Surf & play","facet_boosts":{"locomotion":["swimmer"]},"trait_boosts":{"temperament":["playful"],"signature":["acrobatics"]}},
      {"label":"Ambush from cover","trait_boosts":{"signature":["stealth","lure"]}}
    ]},
    {"id":"B_WATER3_group","stage":"B","prompt":"School/pod style:","options":[
      {"label":"Solo hunter","facet_boosts":{"sociality":["solitary"]},"trait_boosts":{"social_style":["soloist"],"signature":["autonomy"]}},
      {"label":"Tight pod","facet_boosts":{"sociality":["small_group"]},"trait_boosts":{"social_style":["collaborator"],"signature":["communication"]}},
      {"label":"Large school","facet_boosts":{"sociality":["large_group"]},"trait_boosts":{"social_style":["coordinator"],"signature":["synchrony"]}}
    ]},
    {"id":"B_WATER4_depth","stage":"B","prompt":"Pressure preference:","options":[
      {"label":"Sunlit shallows","trait_boosts":{"temperament":["playful"],"signature":["vision"]}},
      {"label":"Deep & dark","trait_boosts":{"temperament":["stoic"],"signature":["mystery"]}},
      {"label":"Turbulent waves","trait_boosts":{"temperament":["bold"],"signature":["agility"]}}
    ]}
  ]
};

/* ---------- REACHABLE_TOKENS: every trait token a quiz option can emit ----------
   Used by the scorer so that trait tokens an animal carries but no answer can
   ever produce (flavor signatures like "jaw", "lure") do NOT inflate the
   magnitude denominator and unfairly shrink the animal's similarity. */
const REACHABLE_TOKENS = (function(){
  const s = new Set();
  const scan = (list)=> (list||[]).forEach(q=>(q.options||[]).forEach(o=>{
    const tb = o.trait_boosts||{};
    for(const k in tb) (tb[k]||[]).forEach(t=>s.add(t));
  }));
  scan(TRIADS);
  Object.keys(LANE_TRIADS).forEach(k=>scan(LANE_TRIADS[k]));
  return s;
})();

/* ---------- Scoring helpers ---------- */
const ANTONYM={calm:"intense",bold:"cautious",playful:"stoic",curious:"vigilant",adaptable:"perfectionist",strategist:"improviser",sprinter:"endurance",opportunist:"planner",soloist:"collaborator",protector:"challenger",mediator:"challenger",mentor:"challenger",experimenter:"observer",precision:"creativity",stealth:"bold",speed:"patience",strength:"agility",persistence:"opportunist"};

function normalize(vec){let sum=0;for(const k in vec) sum+=vec[k]*vec[k];const n=Math.sqrt(sum)||1;const out={};for(const k in vec) out[k]=vec[k]/n;return out;}

function facetOverlapRatio(userF,animal){const dims=["diel","sociality","locomotion","biome","diet"];let matches=0,total=0;for(const d of dims){const w=(d==="diel"||d==="sociality")?1.2:1.0;total+=w;const aVals=new Set((animal.facets&&animal.facets[d])||[]);const uVals=userF[d]||new Set();let ov=0; for(const v of uVals) if(aVals.has(v)){ov=1;break;} matches+=w*ov;} return matches/total;}

// Pick the ranked animal whose traits most oppose the top match, skipping the
// near matches (IA-R2: the same animal showed as near match AND opposite).
function shadowCandidate(scored, excludeIds){
  if(!Array.isArray(scored) || scored.length<2) return null;
  const top = scored[0].animal;
  const skip = new Set(excludeIds||[]); skip.add(top.id);
  const flatTop = Array.isArray(top.traits) ? top.traits : Object.values(top.traits||{}).flat();
  const opposites = new Set();
  flatTop.forEach(t=>{ if(ANTONYM[t]) opposites.add(ANTONYM[t]); });
  let best = null, bestScore = -1;
  for(let i=1;i<scored.length;i++){
    const a = scored[i].animal; if(!a || skip.has(a.id)) continue;
    const tr = Array.isArray(a.traits) ? a.traits : Object.values(a.traits||{}).flat();
    let hit = 0;
    for(const t of tr){ if(opposites.has(t)) hit++; }
    if(hit>bestScore){ best = a; bestScore = hit; }
    if(bestScore>=3) break;
  }
  return best;
}

/* ---------- Zoo/flatten helpers ---------- */
function flattenTraits(an){
  if(!an || !an.traits) return [];
  if(Array.isArray(an.traits)) return an.traits;
  return Object.values(an.traits).flat();
}
function flattenFacets(an){
  if(!an || !an.facets) return [];
  if(Array.isArray(an.facets)) return an.facets;
  return Object.values(an.facets).flat();
}

/* ---------- Rarity bias ----------
   The Familiar<->Surprising slider spans FOUR rarity tiers, so each tier gets
   its own stretch of the slider: dragging right sweeps common -> less_common ->
   unusual -> bizarre. Each lane's multiplier peaks (2.5x) at its home position
   and falls off smoothly, so every tier can actually win somewhere on the slider.
   (The previous two-anchor curve only ever let `common` or `bizarre` dominate,
   which made the two middle tiers mathematically unreachable.) */
const RARITY_PEAK = { common: 0, less_common: 100/3, unusual: 200/3, bizarre: 100 };
function rarityBias(lane, slider) {
  const peak = RARITY_PEAK[lane] != null ? RARITY_PEAK[lane] : 50;
  const d = (slider - peak) / 24; // sigma ~24 slider units
  return 0.35 + 2.15 * Math.exp(-d * d);
}

/* ---------- Roster resolution (browser window vs Node globalThis) ---------- */
function _getRoster(){
  if (typeof window !== 'undefined' && window.ANIMALS) return window.ANIMALS;
  if (typeof globalThis !== 'undefined' && globalThis.ANIMALS) return globalThis.ANIMALS;
  return [];
}

/* ---------- Core matcher ---------- */
function computeShortlist(userTraitsCounts,userFacetsSets,slider,lanePick){
  const allAnimals = _getRoster();

  function scoreSet(pool){
    const userVec=normalize(userTraitsCounts||{});
    const scored=(pool||[]).map(a=>{
      const generalTraits = [...(a.traits.temperament||[]), ...(a.traits.work_style||[])];
      const sigTraits = [...(a.traits.signature||[])];
      const aVecRaw = {};
      generalTraits.forEach(t => aVecRaw[t] = 1);
      sigTraits.forEach(t => aVecRaw[t] = 2);

      // Magnitude over REACHABLE tokens only: flavor tokens no answer can ever
      // produce must not inflate the denominator and penalise distinctive animals.
      let magnitude = 0;
      for (let k in aVecRaw){ if(!REACHABLE_TOKENS.has(k)) continue; magnitude += aVecRaw[k] * aVecRaw[k]; }
      magnitude = Math.sqrt(magnitude) || 1;

      let dot = 0;
      for (let k in aVecRaw) {
        const userVal = userVec[k] || 0;
        dot += (aVecRaw[k] * userVal);
      }
      const sim = dot / magnitude;
      const facet=facetOverlapRatio(userFacetsSets||{},a)||0;
      let score=0.6*sim+0.4*facet;
      score*=rarityBias((a&&a.rarity_lane)||'common',slider);

      return {animal:a,rawSim:sim,rawFacet:facet,score:isFinite(score)?score:0};
    }).filter(x=>x && x.animal);

    scored.sort((x,y)=>y.score-x.score);
    return scored;
  }

  let pool = allAnimals;
  if(lanePick){
    const gated = allAnimals.filter(a=>getRealm(a)===lanePick);
    if(gated.length>0) pool = gated;
  }

  let scored=scoreSet(pool);
  if(scored.length===0){ scored=scoreSet(allAnimals); }

  if(scored.length===0){
      const fallbackPool = (allAnimals||[]).slice(0,3);
      const norm=a=>({id:(a&&a.id)||'none',name:(a&&(a.display_name||a.name))||'Unknown',lane:(a&&a.rarity_lane)||'common',traits:Array.from(new Set(flattenTraits(a))).slice(0,5)});
      return {top:norm(fallbackPool[0]||{}),alternates:[fallbackPool[1],fallbackPool[2]].filter(Boolean).map(norm),shadow:null,margin:0,top_score:0,second_score:0};
  }

  const topRec=scored[0], secondRec=scored[1]||{score:0};
  const top = topRec.animal;
  const s0=topRec.score||0, s1=secondRec.score||0;
  const conf = Math.max(0, Math.min(1, s0));

  const normList = (arr)=>Array.from(new Set(arr||[])).slice(0,5);

  const packageAnimal = (rec) => {
    const a = rec.animal;
    const c = Math.max(0, Math.min(1, rec.score));
    return {
      id:a.id,
      name:a.display_name||a.name||'Unknown',
      lane:a.rarity_lane||'common',
      traits:normList(flattenTraits(a)),
      confidence: c
    };
  };

  const realmTop = getRealm(top);
  const laneTop = top.rarity_lane||'common';
  const seen = new Set([top.id]);
  const alts=[];

  for(const s of scored.slice(1)){
    const a=s.animal; if(!a||seen.has(a.id)) continue;
    const diverse = ((a.rarity_lane||'common')!==laneTop)||(getRealm(a)!==realmTop);
    if(!diverse) continue;
    seen.add(a.id);
    alts.push(packageAnimal(s));
    if(alts.length===2) break;
  }
  for(const s of scored.slice(1)){
    if(alts.length>=2) break;
    if(!seen.has(s.animal.id)){
      seen.add(s.animal.id);
      alts.push(packageAnimal(s));
    }
  }

  const shadowCand = shadowCandidate(scored, alts.map(a=>a.id));
  // The shadow's % is its own match score, not a fixed share of the top's.
  const shadow = shadowCand ? packageAnimal(scored.find(s=>s.animal.id===shadowCand.id)) : null;

  return {
    top: packageAnimal(topRec),
    alternates:alts,
    shadow:shadow,
    margin:(s0-s1), top_score:s0, second_score:s1, confidence:conf
  };
}

/* ---------- Display helpers ---------- */
// One tier ladder everywhere: result, Pack and Zoo (IA-C1).
function rarityBucket(lane){
  const map = {common:'Common', less_common:'Uncommon', unusual:'Unique', bizarre:'Bizarre'};
  return map[lane] || 'Common';
}
// Total questions a quiz-taker answers: Stage A + base Stage B + the lane's
// questions. Counted up front so the total never jumps after the lane pick (IA-V2).
function questionTotal(){
  const laneMax = Math.max(0, ...Object.values(LANE_TRIADS).map(l=>l.length));
  return TRIADS.length + laneMax;
}

/* ---------- Test/simulation helpers ---------- */
// Mirror of QuizRunner.addOptionBoost: merge a list of chosen options into a
// flat token->count trait map + category->Set facet map.
function accumulateAnswers(optionList){
  const userTraits={};
  const userFacets={biome:new Set(),locomotion:new Set(),diel:new Set(),sociality:new Set(),diet:new Set()};
  (optionList||[]).forEach(opt=>{
    const tb=(opt&&opt.trait_boosts)||{};
    for(const k in tb) (tb[k]||[]).forEach(tr=>userTraits[tr]=(userTraits[tr]||0)+1);
    const fb=(opt&&opt.facet_boosts)||{};
    for(const k in fb) (fb[k]||[]).forEach(f=>{ if(userFacets[k]) userFacets[k].add(f); });
  });
  return {userTraits, userFacets};
}

// Run a full playthrough: choiceIndexByQuestionId maps a question id to the
// chosen option index. Stage A (all) + base Stage B (all) + the lane's Stage B.
function simulate(choiceIndexByQuestionId, slider, lanePick){
  const stageA = TRIADS.filter(t=>t.stage==='A');
  const baseB  = TRIADS.filter(t=>t.stage==='B');
  const laneB  = (LANE_TRIADS[lanePick]||[]);
  const questions = [...stageA, ...baseB, ...laneB];
  const chosen=[];
  questions.forEach(q=>{
    const idx = choiceIndexByQuestionId[q.id];
    if(idx==null) return;
    const opt = (q.options||[])[idx];
    if(opt) chosen.push(opt);
  });
  const {userTraits,userFacets}=accumulateAnswers(chosen);
  return computeShortlist(userTraits,userFacets,slider,lanePick);
}

/* ---------- Compare-by-link (IA-M1) ---------- */
// The link carries only an animal id and a whole-number match %, nothing typed by a person.
function compareLink(id, confidence){
  const pct=Math.max(0,Math.min(100,Math.round((confidence||0)*100)));
  return `?vs=${encodeURIComponent(id)}&m=${pct}`;
}
// Strict decode: 'none' (no vs param), 'bad' (anything off), or 'ok' with the catalog's own animal.
function readCompareLink(search, animals){
  const p=new URLSearchParams(search||'');
  if(!p.has('vs')) return {status:'none'};
  const ids=p.getAll('vs'), ms=p.getAll('m');
  if(ids.length!==1 || ms.length!==1) return {status:'bad'};
  if(!/^[a-z_]{1,40}$/.test(ids[0]) || !/^\d{1,3}$/.test(ms[0])) return {status:'bad'};
  const pct=Number(ms[0]);
  const animal=(animals||[]).find(a=>a.id===ids[0]);
  if(!animal || pct>100) return {status:'bad'};
  return {status:'ok', animal, pct};
}

/* ---------- Dual export ---------- */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TRIADS, LANE_TRIADS, ANTONYM, REACHABLE_TOKENS,
    getRealm, rarityBias, normalize, facetOverlapRatio, shadowCandidate,
    computeShortlist, flattenTraits, flattenFacets, rarityBucket, questionTotal,
    accumulateAnswers, simulate, compareLink, readCompareLink
  };
}
