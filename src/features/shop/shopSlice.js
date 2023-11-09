import { createSlice } from '@reduxjs/toolkit'
import dataCategories from '../../data/dataCategories'
import dataProducts from '../../data/products'

const initialState = {
    categories: dataCategories,
    products: dataProducts,
    productsFilteredByCategory: [],
    categorySelected: null,
    productIdSelected: null,
    ordenes: []
}

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload
        },
        setProductIdSelected: (state, action) => {
            state.productIdSelected = action.payload
        },
        setOrders: (state, action) => {
            return {
                ...state,
                ordenes: action.payload,
            };
        },
    },
})


export const { setCategorySelected, setProductIdSelected, setOrders } = shopSlice.actions

export default shopSlice.reducer