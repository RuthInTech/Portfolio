import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB, getDbStatus } from './config/db.js';
import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import coffeeRoutes from './routes/coffeeRoutes.js';

// Load environment variables from .env
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Database connection initialization
connectDB();

// API Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/coffee-notes', coffeeRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  const dbStatus = getDbStatus();
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Ruth Portfolio API (MERN)',
    database: {
      status: dbStatus.connected ? 'connected' : 'disconnected (in-memory fallback active)',
      host: dbStatus.host,
      message: dbStatus.connected
        ? 'MongoDB is actively connected!'
        : 'Set MONGODB_URI in server/.env to enable live persistence.',
    },
    version: '1.0.0',
  });
});

// Serve frontend in production if built
const clientDistPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  const indexPath = path.join(clientDistPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head><title>Ruth's Portfolio API</title></head>
        <body style="font-family:sans-serif;padding:40px;background:#FAF6F0;color:#2E1E14;text-align:center;">
          <h1>☕ Ruth's Portfolio Backend API</h1>
          <p>The Express API is running on port ${PORT}.</p>
          <p>For local development with Vite HMR, start the client with <code>npm run client</code> (running on port 3000).</p>
          <p><a href="/api/health" style="color:#C88346;">Check /api/health</a> | <a href="/api/projects" style="color:#C88346;">View /api/projects</a></p>
        </body>
        </html>
      `);
    }
  });
});

app.listen(PORT, () => {
  console.log(`\n=================================================`);
  console.log(`☕ Ruth's Portfolio Server running on port ${PORT}`);
  console.log(`🌐 API Health Check: http://localhost:${PORT}/api/health`);
  console.log(`🚀 Ready for client requests on http://localhost:3000`);
  console.log(`=================================================\n`);
});
