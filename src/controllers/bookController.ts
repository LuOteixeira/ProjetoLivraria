import { Request, Response } from 'express';
import { BookRepository } from '../repositories/bookRepository';

const bookRepository = new BookRepository();

export const getAllBooks = async (req: Request, res: Response) => {
  const { page = 1, limit = 10, author, minPrice, maxPrice } = req.query;

  const offset = (Number(page) - 1) * Number(limit);

  try {
    const books = await bookRepository.getFilteredBooks(
      offset,
      Number(limit),
      author as string | undefined,
      Number(minPrice) || undefined,
      Number(maxPrice) || undefined
    );
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
