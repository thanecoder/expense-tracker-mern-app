import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial State
const initialState = {
    currency: "₹",
    transactions: [],
    error: null,
    loading: true
};

// Create Context 
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions

    async function getTransactions() {
        try {
            const res = await axios.get(`/api/transactions/`);
            console.log(res);
            dispatch({
                type: "GET",
                payload: res.data.data
            })
        }
        catch (error) {
            dispatch({
                type: "ERROR",
                payload: error.response.data
            })
            console.log(error);
        }

    }

    async function deleteTransaction(id) {
        try {
            const res = await axios.delete(`/api/transactions/${id}`);
            dispatch({
                type: 'DELETE',
                payload: id
            })
        }
        catch (error) {
            dispatch({
                type: "ERROR",
                payload: error.response.data
            })
            console.log(error);
        }

    }

    async function addTransaction(newTxn) {
        const config = {
            'Content-Type': 'application/json'
        }
        try {
            const res = await axios.post(`/api/transactions/`, newTxn, config);

            dispatch({
                type: 'ADD',
                payload: res.data.data
            })
        }
        catch (error) {
            dispatch({
                type: "ERROR",
                payload: error.response.data
            })
            console.log(error);
        }
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            currency: state.currency,
            error: state.error,
            loading: state.loading,
            deleteTransaction,
            addTransaction,
            getTransactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}