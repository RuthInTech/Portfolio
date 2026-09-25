import express from 'express';
import { CoffeeNote } from '../models/CoffeeNote.js';
import { getDbStatus } from '../config/db.js';

const router = express.Router();

let memoryCoffeeNotes = [
  {
    _id: 'buna-1',
    senderName: 'Yared M.',
    message: 'Loved the Crust & Crumbs bakery prototype! The frontend and cart implementation was so smooth.',
    originRoast: 'Yirgacheffe',
    cupsBrewed: 2,
    createdAt: new Date(Date.now() - 3600000 * 20).toISOString(),
  },
  {
    _id: 'buna-2',
    senderName: 'Bethlehem (Fellow Dev)',
    message: 'Fellow AAU engineer here! Rooting for your design-led frontend career. Keep building!',
    originRoast: 'Sidama',
    cupsBrewed: 1,
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
  },
  {
    _id: 'buna-3',
    senderName: 'Design Sprint Team',
    message: 'The Figma wireframe to production flow on Queueless was impressive during the hackathon.',
    originRoast: 'Harrar',
    cupsBrewed: 3,
    createdAt: new Date(Date.now() - 3600000 * 72).toISOString(),
  },
];

let totalBrewedCups = 42;

// GET /api/coffee-notes
router.get('/', async (req, res) => {
  try {
    const dbStatus = getDbStatus();
    if (dbStatus.connected) {
      const notes = await CoffeeNote.find().sort({ createdAt: -1 }).limit(20);
      const total = await CoffeeNote.aggregate([
        { $group: { _id: null, totalCups: { $sum: '$cupsBrewed' } } },
      ]);
      const cups = (total[0]?.totalCups || 0) + totalBrewedCups;
      return res.json({
        success: true,
        source: 'MongoDB',
        totalBrewed: cups,
        notes: notes.length > 0 ? notes : memoryCoffeeNotes,
      });
    }

    res.json({
      success: true,
      source: 'Memory Store',
      totalBrewed: totalBrewedCups,
      notes: memoryCoffeeNotes,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/coffee-notes
router.post('/', async (req, res) => {
  try {
    const { senderName, message, originRoast, cupsBrewed } = req.body;

    if (!message || message.trim() === '') {
      return res.status(400).json({ success: false, error: 'Please include a warm note or greeting!' });
    }

    const cups = parseInt(cupsBrewed, 10) || 1;
    totalBrewedCups += cups;

    const dbStatus = getDbStatus();
    let savedNote;

    if (dbStatus.connected) {
      savedNote = await CoffeeNote.create({
        senderName: senderName?.trim() || 'A Kind Visitor',
        message: message.trim(),
        originRoast: originRoast || 'Classic Buna',
        cupsBrewed: cups,
      });
    } else {
      savedNote = {
        _id: 'note_' + Date.now(),
        senderName: senderName?.trim() || 'A Kind Visitor',
        message: message.trim(),
        originRoast: originRoast || 'Classic Buna',
        cupsBrewed: cups,
        createdAt: new Date().toISOString(),
      };
      memoryCoffeeNotes.unshift(savedNote);
    }

    res.status(201).json({
      success: true,
      message: '☕ Coffee brewed and note added to the board!',
      note: savedNote,
      totalBrewed: totalBrewedCups,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
