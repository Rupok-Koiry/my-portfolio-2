import { Schema, model } from 'mongoose';

const skillSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});
const Skill = model('Skill', skillSchema);
export default Skill;
