const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: [true, 'Token is required to be added to the blacklist'],
  },
}, {
  timestamps: true
});

const tokenBlacklistModel = mongoose.model('BlacklistTokens', blacklistTokenSchema);

// const BlacklistToken = mongoose.model('BlacklistToken', blacklistTokenSchema);

module.exports = tokenBlacklistModel;
