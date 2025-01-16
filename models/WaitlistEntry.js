import mongoose from 'mongoose';

const waitlistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  location: {
    continent: String,
    country: String,
    region: String,
    city: String,
    latitude: Number,
    longitude: Number
  },
  ipAddress: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.WaitlistEntry || mongoose.model('WaitlistEntry', waitlistSchema);
