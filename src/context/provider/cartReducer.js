const removeProduct = (state, payload) => {
    let totalPrice = state.total -payload.offPrice;
    const updatedCart = [...state.cart]
    const index = updatedCart.findIndex((item) => item.id ===payload.id);
    const updatedItem = { ...updatedCart[index] };
    if (updatedItem.quantity === 1) {
        const filteredCart = updatedCart.filter(item => item.id !==payload.id);
        return { ...state, cart: filteredCart, total: totalPrice };

    } else {
        updatedItem.quantity--;
        updatedCart[index] = updatedItem;
        return { ...state, cart: updatedCart, total: totalPrice };
    }
}

const addProduct = (state, payload) => {
    let totalPrice = state.total + payload.offPrice;

    const updatedCart = [...state.cart];
    const index = updatedCart.findIndex((item) => item.id === payload.id);
    const updatedItem = { ...updatedCart[index] };

    if (index < 0) {
        updatedCart.push({ ...payload, quantity: 1 });

    } else {
        updatedItem.quantity++;
        updatedCart[index] = updatedItem

    }
    return { ...state, cart: updatedCart, total: totalPrice };
}


const cartReducer = (state,action) => {
    switch (action.type) {
        case 'ADD_TO_CART': return addProduct(state,action.payload)
        case 'REMOVE_PRODUCT': return removeProduct(state,action.payload)
        default:return state ;
   }
}
 
export default cartReducer;