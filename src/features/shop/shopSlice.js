import { createSlice } from '@reduxjs/toolkit'
import dataCategories from '../../data/dataCategories'
import dataProducts from '../../data/products'

const initialState = {
    categories: dataCategories,
    products: dataProducts,
    productsFilteredByCategory: [],
    categorySelected: null,
    productIdSelected: null,
    ordenes: [],
    messagesGpt: [{ role: 'system', content: 'Eres un asistente, que se limita a nutricion, salud y alimentacion. Si te preguntan de otro tema responde que no podes brindar esa respuesta' }]
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
        setMessages: (state, action) => {
            return {
                ...state,
                messagesGpt: action.payload,
            };
        },
    },
})


export const { setCategorySelected, setProductIdSelected, setOrders, setMessages } = shopSlice.actions

export default shopSlice.reducer