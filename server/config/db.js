import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri || uri.trim() === '' || uri.includes('<username>')) {
    console.log('\n☕ [MongoDB Status]: No valid MONGODB_URI found in environment.');
    console.log('👉 Note: Operating with graceful fallback store. The app will work seamlessly!');
    console.log('👉 To connect your live database, add your MongoDB URI to server/.env:\n   MONGODB_URI=your_connection_string\n');
    isConnected = false;
    return false;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log(`\n☕ [MongoDB Status]: Connected successfully to: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`\n⚠️ [MongoDB Warning]: Connection attempt failed (${error.message}).`);
    console.log('👉 Falling back to safe in-memory store so the portfolio and contact form stay 100% functional.\n');
    isConnected = false;
    return false;
  }
};

export const getDbStatus = () => ({
  connected: isConnected && mongoose.connection.readyState === 1,
  readyState: mongoose.connection.readyState,
  host: isConnected ? mongoose.connection.host : null,
});
