import Borrows from "../models/borrows.model.js";
import Books from "../models/books.model.js";


// borrow a book
export async function borrowBook(req, res) {
    try {
        let allbooks = await Books.findAll({where: {book_id: req.params.id}});
        if (allbooks) {
            await Borrows.create(req.body)
            res.json({
                success: true,
                message: 'Book borrowed successfully',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'No such book was found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// return a book
export async function returnBook(req, res) {
    try {
        let allbooks = await Borrows.findAll({where: {members_id: req.params.id}});
        if (allbooks) {
            res.json({
                success: true,
                message: 'Book returned successfully',
                data: allmembers
            })
        } else {
            res.json({
                success: true,
                message: 'No Member details found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}
// view all borrowed books
export async function viewAllBorrowed(req, res) {
    try {
        let allbooks = await Borrows.findAll();
        if (allbooks) {
            res.json({
                success: true,
                message: 'These are all the rented books',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'No book records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}
// view a particular borrowing
export async function viewOneBorrowed(req, res) {
    try {
        let allmembers = await Borrows.findAll({where: {member_id: req.params.id}});
        if (allmembers) {
            res.json({
                success: true,
                message: 'Book records retrieved successfully',
                data: allmembers
            })
        } else {
            res.json({
                success: true,
                message: 'No Member records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// view all borrowings of a particular member
export async function viewMemberBorrowed(req, res) {
    try {
        let allmembers = await Borrows.findAll({where: {member_id: req.params.id}});
        if (allmembers) {
            res.json({
                success: true,
                message: 'Member records retrieved successfully',
                data: allmembers
            })
        } else {
            res.json({
                success: true,
                message: 'No Member records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}