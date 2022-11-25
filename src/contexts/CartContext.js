import React, { useState, createContext } from "react";

export const CartContext = createContext({});

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addItemCart(newItem){
        const indexItem = cart.findIndex( item => item.id === newItem.id);

        if(indexItem !== -1){
            //Se entrou aqui quer dizer que temos que adicionar +1 quantidade por que ele já esta na sua lista

            let cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount +1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price

            setCart(cartList)
            return;
        }

        let data = {
            ...newItem,
            amount : 1,
            total: newItem.price
        }

        setCart(products => [...products, data])

    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemCart
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;