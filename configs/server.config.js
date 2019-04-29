module.exports = {
  mongoURI: process.env.MONGO_URL || 'mongodb://@localhost:27017/Tima',
  secretOfKey: process.env.SECRETKEY || 'HelloVietnam',

  // Cloudinary congfig
  CLODINARY_CONFIG: {
    cloud_name: process.env.CLOUD_NAME || 'dz1gprgpn',
    api_key: process.env.CLOUD_KEY || '313913152513258',
    api_secret: process.env.CLOUD_SECRET || 'fzaUZrYXpNk_WEj1Rk48iaY7hI0'
  }
};
