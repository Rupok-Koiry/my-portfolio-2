import { Schema, model } from 'mongoose';

const projectSchema = new Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  mainTech: {
    type: String,
    required: true,
  },
  techStack: {
    type: [String],
    required: true,
  },
  liveLink: {
    type: String,
    required: true,
  },
  highlights: {
    type: [String],
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
});

const Project = model('Project', projectSchema);
export default Project;
