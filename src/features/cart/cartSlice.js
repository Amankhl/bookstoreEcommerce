import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if(existingItem){ //if item is already in the cart, then add the quantity
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.quantity * existingItem.price;
            }
            else{  // if item is not in the cart, then add it
                // state.items.push({ ...newItem, quantity: 1, totalPrice: newItem.price });   // option 1
                state.items.push({ 
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    image: newItem.image,
                    description: newItem.description,
                    category: newItem.category,
                    quantity: 1,
                });
            }
            state.totalQuantity++;
            state.totalAmount += newItem.price;
        },
        removeFromCart: (state, action) => {
            const id = action.payload
            state.items = state.items.filter(item => item.id !== id)
            state.totalQuantity--;
            state.totalAmount -= state.items.find(item => item.id === id)?.price;

        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },
        decrementQuantity: (state, action) => {
            const id = action.payload; // we are goint to give only id
            const item = state.items.find(item => item.id === id)
            if(item.quantity > 1){
                item.quantity--
                item.totalPrice = item.quantity * item.price
            }
        }
    },
})

export const { addToCart, removeFromCart, clearCart, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer