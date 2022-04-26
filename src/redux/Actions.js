import axios from 'axios'
import {
    ADD_DATA,
    ASC_SORT,
    DESC_SORT,
    SEARCH_DATA,
    LIKE,
    DISLIKE,
    ADD_TO_CART,
    ORDER_BOOK
} from './ActionTypes.js'

export const addData = (payload) => ({
    type: ADD_DATA,
    payload
})

export const addBookData = () => (dispatch) => {
    axios.get("https://bookstroe-backend-server.herokuapp.com/books")
    .then((res) => {
        dispatch(addData(res.data))
    })
    .catch(err => {
        console.log(err)
    })
}

export const ascSort = () => ({
    type: ASC_SORT,
})

export const descSort = () => ({
    type: DESC_SORT,
})

export const searchData = (payload) => ({
    type: SEARCH_DATA,
    payload,
})

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload,
})