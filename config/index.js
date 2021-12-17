const dev = process.env.NODE_ENV !== "production";

export const server = dev ? process.env.LOCAL_URL : process.env.PROD_URL;
