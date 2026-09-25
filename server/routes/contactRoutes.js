import express from 'express';
import { Contact } from '../models/Contact.js';
import { getDbStatus } from '../config/db.js';

const router = express.Router();

// In-memory fallback storage
const memoryContacts = [
  {
    _id: 'sample-1',
    name: 'Addis Tech Community',
    email: 'community@addistech.et',
    subject: 'Hackathon Mentorship & Showcase',
    message: 'Loved your Queueless project concept! We would love to have you present at our next student developer meet.',
    coffeeRoast: 'Yirgacheffe (Floral & Bright)',
    status: 'read',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

// POST /api/contact - Submit new contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message, coffeeRoast } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and message.',
      });
    }

    const dbStatus = getDbStatus();
    let savedContact;

    if (dbStatus.connected) {
      savedContact = await Contact.create({
        name,
        email,
        subject: subject || 'Portfolio Inquiry / Collaboration',
        message,
        coffeeRoast: coffeeRoast || 'Yirgacheffe (Floral & Bright)',
      });
    } else {
      savedContact = {
        _id: 'mem_' + Date.now(),
        name,
        email,
        subject: subject || 'Portfolio Inquiry / Collaboration',
        message,
        coffeeRoast: coffeeRoast || 'Yirgacheffe (Floral & Bright)',
        status: 'unread',
        createdAt: new Date().toISOString(),
      };
      memoryContacts.unshift(savedContact);
    }

    res.status(201).json({
      success: true,
      message: 'Message received! Thank you for reaching out to Ruth.',
      persistedTo: dbStatus.connected ? 'MongoDB' : 'Memory Store (Add MONGODB_URI to server/.env to persist permanently)',
      data: savedContact,
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error while sending message',
    });
  }
});

// GET /api/contact - List received messages
router.get('/', async (req, res) => {
  try {
    const dbStatus = getDbStatus();
    if (dbStatus.connected) {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      return res.json({
        success: true,
        source: 'MongoDB',
        count: contacts.length,
        data: contacts,
      });
    }

    res.json({
      success: true,
      source: 'Memory Store',
      count: memoryContacts.length,
      data: memoryContacts,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
