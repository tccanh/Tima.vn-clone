module.exports = {
  mongoURI: process.env.MONGO_URL || 'mongodb://@localhost:27017/Tima',
  secretOfKey: 'HelloVietnam' || process.env.SECRETKEY
};
