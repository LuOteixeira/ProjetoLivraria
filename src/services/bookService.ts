import { BookRepository } from "../repositories/BookRepository";
import { Book } from "../models/Book";

export class BookService {
    static async createBook(data: Partial<Book>): Promise<Book> {
        const book = BookRepository.create(data);
        return await BookRepository.save(book);
    }

    static async listBooks(): Promise<Book[]> {
        return await BookRepository.find();
    }

    static async getBookById(id: number): Promise<Book | null> {
        return await BookRepository.findOneBy({ id });
    }

    static async updateBook(id: number, data: Partial<Book>): Promise<Book | null> {
        const book = await BookRepository.findOneBy({ id });
        if (!book) return null;

        Object.assign(book, data);
        return await BookRepository.save(book);
    }

    static async deleteBook(id: number): Promise<boolean> {
        const result = await BookRepository.delete(id);
        return result.affected !== 0;
    }
}
