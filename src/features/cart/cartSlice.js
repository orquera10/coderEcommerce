import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: 'userLogged',
    updatedAt: Date.now().toLocaleString(),
    total: 0,
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const productRepeated = state.items.find(
                item => item.id === action.payload.id
            )
            if (productRepeated) {
                const itemsUpdated = state.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return item
                })
                const newtotal = itemsUpdated.reduce(
                    (acc, current) => (acc += current.calorias * current.quantity),
                    0
                )
                console.log('este es el tota', newtotal)
                state.items = itemsUpdated;
                state.total = newtotal;
                state.updatedAt = new Date().toLocaleString();
            } else {
                state.items.push(action.payload)
                const new2total = state.items.reduce(
                    (acc, current) => (acc += current.calorias * current.quantity),
                    0
                )

                console.log('este es el total 2', new2total)
                state.total = new2total;
                state.updatedAt = new Date().toLocaleString();
            }
        },
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload; // Supongo que action.payload es el ID del elemento a eliminar
        
            // Filtramos los elementos para mantener solo aquellos cuyo ID no coincide con el ID a eliminar
            const updatedItems = state.items.filter(item => item.id !== itemIdToRemove);
        
            // Calculamos el nuevo total
            const newTotal = updatedItems.reduce(
                (acc, current) => acc + current.calorias * current.quantity,
                0
            );
        
            return {
                ...state,
                items: updatedItems,
                total: newTotal,
                updatedAt: new Date().toLocaleString(),
            };
        },
        clearCart: (state, action) => {
            return {
                ...state,
                items: [],
                total: 0,
                updatedAt: new Date().toLocaleString(),
            };
        },
    },
})

export const { addItem, removeItem , clearCart} = cartSlice.actions

export default cartSlice.reducer