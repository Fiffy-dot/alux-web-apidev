import express from "express";
import { createBook,viewBook,viewAllBooks,editBook,deleteBook } from '../controllers/booksController'
import { authenticate } from '../middlewares/auth.js';

const membersRouter = express.Router();

//Add a Book
booksRouter.post("/", authenticate, createBook);

//View a book
booksRouter.get("/:id", authenticate, viewBook);

//View all books
booksRouter.get("/", authenticate, viewAllBooks);

//Update / edit book 
booksRouter.put("/", authenticate, editBook);

//Delete a book
booksRouter.delete("/:id", authenticate, deleteBook);

export default booksRouter;