import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
const app = express();
const port = 5000;
mongoose.connect('mongodb://127.0.0.1:27017/crud')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
  const userSchema = new mongoose.Schema({
    
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    skills: [String],
    createdAt: { type: Date, default: Date.now }
  });
  const usermodel = mongoose.model('indian', userSchema);
 app.get('/users', async (req, res) => {
  res.json(await usermodel.find())
 })

app.use(cors());
app.use(express.json());

console.log(port);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});