import mongoose from 'mongoose';

const coffeeNoteSchema = new mongoose.Schema(
  {
    senderName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 60,
      default: 'Coffee Friend',
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxLength: 300,
    },
    originRoast: {
      type: String,
      enum: ['Yirgacheffe', 'Sidama', 'Harrar', 'Guji', 'Limu', 'Classic Buna'],
      default: 'Classic Buna',
    },
    cupsBrewed: {
      type: Number,
      default: 1,
      min: 1,
      max: 10,
    },
  },
  {
    timestamps: true,
  }
);

export const CoffeeNote = mongoose.model('CoffeeNote', coffeeNoteSchema);
