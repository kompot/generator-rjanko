import mongoose from 'mongoose';

const TrackSchema = new mongoose.Schema({
  name: String,
  album: String
});

const TrackModel = mongoose.model('Track', TrackSchema);

export const Track = {Track: TrackModel, TrackSchema};
