import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('HELLO');
});

if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log(`mongodb connected`);
      routes(app);
      const PORT = process.env.PORT || 5000;
      app.listen(PORT, () => {
        console.log(`running on ${PORT}`);
      });
    })
    .catch((e) => {
      console.log(e);
    });
} else {
  throw new Error('MONGO_URI not found');
}
