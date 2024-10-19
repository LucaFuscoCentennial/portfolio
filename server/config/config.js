const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.port || 4000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI || 
    "mongodb+srv://luca:Test12345@skeleton.lsuhq.mongodb.net/Skeleton" ||
    // "mongodb+srv://luca:Test12345@cluster0.e1ta6.mongodb.net/" ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_POST ||'27017') + 
    '/Skeleton'
};
module.exports = config;

// export default config