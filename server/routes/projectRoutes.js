import express from 'express';
import { Project } from '../models/Project.js';
import { defaultProjects } from '../data/defaultProjects.js';
import { getDbStatus } from '../config/db.js';

const router = express.Router();

// GET all projects
router.get('/', async (req, res) => {
  try {
    const dbStatus = getDbStatus();
    if (dbStatus.connected) {
      const dbProjects = await Project.find().sort({ order: 1 });
      if (dbProjects && dbProjects.length > 0) {
        return res.json({
          source: 'mongodb',
          count: dbProjects.length,
          data: dbProjects,
        });
      }
    }
    // Fallback to rich default data
    res.json({
      source: 'local-store',
      count: defaultProjects.length,
      data: defaultProjects,
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.json({
      source: 'local-store-fallback',
      count: defaultProjects.length,
      data: defaultProjects,
    });
  }
});

// GET single project by slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const dbStatus = getDbStatus();
    if (dbStatus.connected) {
      const project = await Project.findOne({ slug });
      if (project) {
        return res.json({ source: 'mongodb', data: project });
      }
    }
    const localProject = defaultProjects.find((p) => p.slug === slug);
    if (!localProject) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json({ source: 'local-store', data: localProject });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
