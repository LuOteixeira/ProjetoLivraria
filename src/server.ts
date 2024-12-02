import express from 'express';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import bookRoutes from './routes/bookRoutes';

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.json());

app.use(userRoutes, authRoutes, bookRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});