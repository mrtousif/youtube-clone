const env = {
    NODE_ENV: process.env.NODE_ENV || "development",
    isProduction: process.env.NODE_ENV === "production",
    isDev: process.env.NODE_ENV === "development",
};

export default env;
