import express from 'express';
import cors from 'cors';
import resourcesRouter from './routes/resourcesRoutes';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api', resourcesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
