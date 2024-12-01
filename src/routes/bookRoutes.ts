import express from 'express';
import { getAllBooks, addBook } from '../controllers/bookController';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/', getAllBooks); 
router.post('/', authenticate, addBook); 
export default router;
