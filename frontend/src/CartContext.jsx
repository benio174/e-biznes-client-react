import React, { createContext, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const contextValue = useMemo(() => ({
        cartItems,
        addToCart,
        clearCart
    }), [cartItems]);

    return (
        <CartContext.Provider value={{ contextValue }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useCart = () => useContext(CartContext);