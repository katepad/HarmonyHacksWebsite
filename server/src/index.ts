import express from 'express';
import cors from 'cors';
import resourcesRouter from './routes/resourcesRoutes';
import boardRouter from './routes/boardRoutes';
import testimonialRouter from './routes/testimonialsRoutes';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api', resourcesRouter);
app.use('/api', boardRouter);
app.use('/api', testimonialRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
