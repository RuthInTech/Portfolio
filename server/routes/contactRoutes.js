import express from 'express';
import { Contact } from '../models/Contact.js';
import { getDbStatus } from '../config/db.js';

const router = express.Router();

// In-memory fallback storage in case database is temporarily offline
const memoryContacts = [];

/**
 * ☕ MERN CONTACT ROUTES
 * Contact form messages are stored in MongoDB Atlas.
 */

// POST /api/contact - Submit new contact message to MongoDB
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

    console.log(`\n======================================================`);
    console.log(`📥 [NEW CONTACT MESSAGE STORED IN ${dbStatus.connected ? 'MONGODB' : 'IN-MEMORY'}]`);
    console.log(`From:    ${name} <${email}>`);
    console.log(`Subject: ${subject || 'General Inquiry'}`);
    console.log(`Coffee:  ${coffeeRoast || 'Yirgacheffe'}`);
    console.log(`Message: ${message}`);
    console.log(`======================================================\n`);

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been saved successfully.',
      persistedTo: dbStatus.connected ? 'MongoDB' : 'In-Memory Store',
      data: savedContact,
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error while saving contact message.',
    });
  }
});

// GET /api/contact - View all received contact messages (Newest first)
router.get('/', async (req, res) => {
  try {
    const dbStatus = getDbStatus();
    if (dbStatus.connected) {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      return res.json({
        success: true,
        source: 'MongoDB',
        count: contacts.length,
        contacts,
      });
    }

    res.json({
      success: true,
      source: 'Memory Store',
      count: memoryContacts.length,
      contacts: memoryContacts,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE /api/contact/:id - Delete a contact message
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const dbStatus = getDbStatus();

    if (dbStatus.connected) {
      await Contact.findByIdAndDelete(id);
      return res.json({ success: true, message: 'Message deleted from MongoDB.' });
    }

    const index = memoryContacts.findIndex((c) => c._id === id);
    if (index !== -1) {
      memoryContacts.splice(index, 1);
    }
    res.json({ success: true, message: 'Message deleted from memory store.' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
