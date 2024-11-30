import { Request, Response } from "express";
import { BookService } from "../services/BookService";

export class BookController {
    static async create(req: Request, res: Response) {
        try {
            const book = await BookService.createBook(req.body);
            res.status(201).json(book);
        } catch (error) {
            res.status(500).json({ message: "Erro ao criar livro", error });
        }
    }

    static async list(req: Request, res: Response) {
        try {
            const books = await BookService.listBooks();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ message: "Erro ao listar livros", error });
        }
    }

    static async get(req: Request, res: Response) {
        try {
            const book = await BookService.getBookById(Number(req.params.id));
            if (!book) return res.status(404).json({ message: "Livro não encontrado" });
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar livro", error });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const book = await BookService.updateBook(Number(req.params.id), req.body);
            if (!book) return res.status(404).json({ message: "Livro não encontrado" });
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({ message: "Erro ao atualizar livro", error });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const success = await BookService.deleteBook(Number(req.params.id));
            if (!success) return res.status(404).json({ message: "Livro não encontrado" });
            res.status(200).json({ message: "Livro deletado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: "Erro ao deletar livro", error });
        }
    }
}
