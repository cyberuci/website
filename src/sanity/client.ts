import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET,
  apiVersion: "2023-01-27",
  token: import.meta.env.SANITY_TOKEN,
  useCdn: false,
});

export { client };
