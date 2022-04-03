const Transactions = require('../models/Transactions');

const getTransactions = async (req, res, next)=>{
    try{
        const txns = await Transactions.find();
        res.status(200).json({
            status:'success',
            count:txns.length,
            data:txns
        });
    }
    catch(error){
        res.status(500).json({
            status:'failed',
            error:error
        });
    }
} 

const addTransaction = async (req, res, next)=>{
    // res.send("ADD POST TRANSACTIONS");
    const { text, amount } = req.body;
    try{
        const txn = await Transactions.create(req.body);
        res.status(201).json({
            status:'success',
            data:txn
        })
    }
    catch(error){
        res.status(500).json({
            status:'failed',
            error:error
        });
    }
} 

const deleteTransaction = async (req, res, next)=>{
    const txnId = req.params.id;
    try{
        const txn = await Transactions.findById(txnId);
        if(!txn){
            res.status(404).json({
                status:'Not Found',
                message:"Transaction Not Found"
            })
        }
        else{
            await txn.remove();
            res.status(200).json({
                status:'success',
            })
        }
    }
    catch(error){
        res.status(500).json({
            status:'failed',
            error:error
        });
    }
}

module.exports = {
    getTransactions,
    addTransaction,
    deleteTransaction
}