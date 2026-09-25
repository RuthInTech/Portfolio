import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
      maxLength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
        'Please provide a valid email address',
      ],
    },
    subject: {
      type: String,
      trim: true,
      default: 'Portfolio Inquiry / Collaboration',
      maxLength: [150, 'Subject cannot exceed 150 characters'],
    },
    message: {
      type: String,
      required: [true, 'Please enter your message'],
      trim: true,
      maxLength: [2000, 'Message cannot exceed 2000 characters'],
    },
    coffeeRoast: {
      type: String,
      enum: ['Yirgacheffe (Floral & Bright)', 'Sidama (Berry & Citrus)', 'Harrar (Rich & Fruity)', 'Jimma (Deep & Bold)', 'Standard Latte'],
      default: 'Yirgacheffe (Floral & Bright)',
    },
    status: {
      type: String,
      enum: ['unread', 'read', 'replied'],
      default: 'unread',
    },
  },
  {
    timestamps: true,
  }
);

export const Contact = mongoose.model('Contact', contactSchema);
