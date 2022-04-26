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
} from './ActionTypes.js';

const init = {
    books: [],
    filteredData: [],
    liked: [],
    filteredLike: [],
    cart: [],
    filteredCart: [],
    ordered: [],
}
export const Reducer = (store = init, action) => {
    switch(action.type){
        case ADD_DATA:
            return {
                ...store,
                books: [...action.payload],
                filteredData: [...action.payload]
            }
        case ASC_SORT:
            return {
                ...store,
                filteredData: [...ascendingSort(store.books)]
            }
        case DESC_SORT:
            return {
                ...store,
                filteredData: [...descendingSort(store.books)]
            }
        case SEARCH_DATA:
            let currData;
            if (action.payload.type == 'books'){
                currData = store.books;
                // console.log(2)
                return {
                    ...store,
                    filteredData: [...searchedData(action.payload.input,currData)]
                }
            } else if(action.payload.type == 'likes'){
                currData = store.liked;
                return {
                    ...store,
                    liked: [...searchedData(action.payload.input,currData)]
                }
            } else if (action.payload.type == 'cart'){
                currData = store.cart;
                return {
                    ...store,
                    cart: [...searchedData(action.payload.input,currData)]
                }
            } else {
                currData = store.ordered;
                return {
                    ...store,
                    ordered: [...searchedData(action.payload.input,currData)]
                }
            }
        case ADD_TO_CART:
            return {
                ...store,
                cart: [...store.cart, action.payload],
                filteredCart: [...store.cart, action.payload]
            }
        default:
            return store
    }
}

const ascendingSort = (arr) => {
    var sortedArr = arr.sort((x,y) => {
        return y.price - x.price
    })
    return sortedArr
}

const descendingSort = (arr) => {
    var sortedArr = arr.sort((x,y) => {
        return x.price - y.price
    })
    return sortedArr
 }

const searchedData = (str,data) => {
    if(str.length === 0){
        return data;
    }
    let capitalizedInput = str.charAt(0).toUpperCase() + str.slice(1);
    let newArr = []
    data.map((item) => {
        if(checkData(capitalizedInput,item.title) || 
                    checkData(capitalizedInput,item.price) ||
                          checkData(capitalizedInput,item.author)){
            newArr.push(item)
        }
    })
    return newArr;
}

const checkData = (input,data) => {
    let count = 0;
    for (let i = 0; i < input.length; i++){
        for (let j = 0; j < data.length; j++){
            if (data[j] == input[i]){
                count++;
            }
        }
    }
    if (count > input.length*(3/5)){
        return true
    }
    return false;
}
