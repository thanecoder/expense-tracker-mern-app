const AppReducer = (state, { type, payload }) => {
  switch (type) {

    case 'GET':
      return {
        ...state,
        loading: false,
        transactions: payload
      }

    case 'ADD':
      return {
        ...state,
        transactions: [...state.transactions, payload]
      }

    case 'DELETE':
      return {
        ...state,
        transactions: state.transactions.filter((txn) => txn._id !== payload)
      }

    case 'ERROR':
      return {
        ...state,
        error:payload
      }

    default:
      return state
  }
}

export default AppReducer;