import mongoose from 'mongoose';

const uri = 'mongodb://127.0.0.1:27017/feasto';

console.log('Connecting to MongoDB...');

mongoose.connect(uri).then(() => {
  console.log('Connected!');
  mongoose.connection.close();
}).catch(err => {
  console.log('Failed:', err.message);
});