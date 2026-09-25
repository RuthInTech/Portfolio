import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      enum: ['Featured', 'Internship', 'Hackathon', 'Mobile', 'Lab Experiment'],
      default: 'Featured',
    },
    description: {
      type: String,
      required: true,
    },
    fullDescription: {
      type: String,
    },
    keyFeatures: [{
      type: String,
    }],
    technologies: [{
      type: String,
    }],
    githubUrl: {
      type: String,
    },
    liveUrl: {
      type: String,
    },
    figmaUrl: {
      type: String,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
    thumbnail: {
      type: String,
    },
    highlights: [{
      type: String,
    }],
  },
  {
    timestamps: true,
  }
);

export const Project = mongoose.model('Project', projectSchema);
