const FILTER = 'FILTER'
const KEY_SORT = 'KEY_SORT'

let initialState = {
    card: [
        { name: '01.01', price: 400, yield: 2400, spread: 2400 },
        { name: '02.01', price: 200, yield: 1400, spread: 1300 },
        { name: '03.01', price: 400, yield: 2400, spread: 2400 },
        { name: '04.01', price: 200, yield: 1400, spread: 1300 },
        { name: '05.01', price: 400, yield: 2400, spread: 2400 },
        { name: '06.01', price: 200, yield: 1400, spread: 1300 },
        { name: '07.01', price: 400, yield: 2400, spread: 2400 },
        { name: '08.01', price: 200, yield: 1400, spread: 1300 },
        { name: '09.01', price: 400, yield: 2400, spread: 2400 },
        { name: '10.01', price: 200, yield: 1400, spread: 1300 },
    ],
    keyValue: 'price'
}

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER:
            return{
                ...state,
                card: [...action.data]
            }
        case KEY_SORT:
            return{
                ...state,
                keyValue: action.keyValue
            }
        default: return state;
    }
}

export const filterData = (data) => {
    return {
        type: FILTER,
        data: data
    }
}

export const filterKey = (keyValue) => {
    return {
        type: KEY_SORT,
        keyValue: keyValue
    }
}

export const filterWeek = (val) => {
    let data = initialState.card.slice(-val)
    return (dispatch) => {
        dispatch(filterData(data))
    }
}



export default cardReducer