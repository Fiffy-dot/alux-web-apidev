import express from "express";
import { borrowBook,returnBook,viewAllBorrowed,viewOneBorrowed,viewMemberBorrowed } from '../controllers/borrowingController'

const membersRouter = express.Router();

//Borrow a book
borrowRouter.post("/",  borrowBook);

//Return a book
borrowRouter.get("/:id",  returnBook);

//View all borrowed books
borrowRouter.get("/",  viewAllBorrowed);

//View a particular book
borrowRouter.put("/",  viewOneBorrowed);

//View all borrowings of a particular member
borrowRouter.delete("/:id",  viewMemberBorrowed);

export default borrowRouter;
