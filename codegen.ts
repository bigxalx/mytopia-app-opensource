import type { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`]:
        {
          headers: {
            Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
          },
        },
    },
  ],
  documents: "constants/Queries.ts",
  generates: {
    "@types/graphql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
