import mongoose from 'mongoose';

const TrackSchema = new mongoose.Schema({
  name: String,
  album: String
});

const Track = mongoose.model('Track', TrackSchema);

export default {Track};
