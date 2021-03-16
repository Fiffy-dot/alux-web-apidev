import Borrows from "../models/borrows.model.js";

// borrow a book
export async function borrowBook(req, res){
    try {
        let book_borrow = await Borrows.create(req.body);
        if (book_borrow) {
            res.status(200).json({
                success: true,
                message: 'book borrowed successfully',
                data: book_borrow
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'book could not be created at this time'
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

//return a book
export async function returnBook(req, res) {
    try{
        let book = await Borrows.findAll({where: {id: req.params.id}});
        if (book) {
            await Borrows.destroy({where : {id: req.params.id}})
            .then(res_flag => {
                if (res_flag == 1){
                    res.json({
                        success: true, 
                        message: `Book returned successfully`
                    })
                } else {
                    res.json({
                        success: false, 
                        message: `Book was not returned successfully`
                    })
                }
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
        let allmembers = await Borrows.findAll({where: {id: req.params.id}});
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
        let allmembers = await Borrows.findAll({where: {member_name: req.params.member_name}});
        console.log("view =====> ", req.params.member_name);
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
