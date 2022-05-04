import { GET_ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS } from "../actions/constants";

const initialState ={
    products:[],
    loading: true,
    error: {}
}

export const allProductsReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_ALL_PRODUCTS_REQUEST:
            return{
                loading: true
            }
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                loading:false,
                products: action.payload
            }
        case GET_ALL_PRODUCTS_FAIL:
            return {
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}