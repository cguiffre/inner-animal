import { defineRailway, project, service } from "railway/iac";
// This repository manages only its own resources in the environment. Other
// repositories export their own partial name.
// See https://docs.railway.com/infrastructure-as-code#multi-repo-projects
export const partial = "inner-animal";
export default defineRailway(() => {
  const innerAnimal = service("inner-animal", {
    build: { buildEnvironment: "V3", builder: "NIXPACKS" },
    start: "npm start",
    healthcheck: "/healthz",
    healthcheckTimeout: 100,
    replicas: { "us-west2": 1 },
    domains: ["www.inneranimalquiz.com"],
  });

  return project("inner-animal", {
    variables: { managed: false },
    resources: [innerAnimal],
  });
});
