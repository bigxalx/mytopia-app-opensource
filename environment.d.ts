declare namespace NodeJS {
  export interface ProcessEnv {
    CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN?: string;
    CONTENTFUL_SPACE_ID?: string;
    CONTENTFUL_ENVIRONMENT?: string;
    CONTENTFUL_API_KEY?: string;
    NODE_ENV: "development" | "production";
    PORT?: string;
    PWD: string;
  }
}