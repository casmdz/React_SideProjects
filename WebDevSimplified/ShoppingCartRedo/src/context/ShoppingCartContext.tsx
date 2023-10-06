//export custom hook 

import { createContext, useContext, ReactNode, useState } from 'react';

type ShoppingCartProviderProps = {
    children: ReactNode 
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id:number) => number //return the number of the item
    increaseCartQuantity: (id:number) => void 
    decreaseCartQuantity: (id:number) => void
    removeFromCart: (id:number) => void
}

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    //place to store cart information
    //custom hook for local state storage 
    const [ cartItems, setCartItems ] = useState<CartItem[]>([])

    function getItemQuantity(id:number) {
        // console.log('getting item quant func', id) // this prints every time something on page happens lol
        return cartItems.find(item => item.id === id)?.quantity || 0
    }


    function increaseCartQuantity(id:number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null ) {
                console.log('if we dont have this item stored anywhere... add it for the first time')
                return [...currItems, { id, quantity: 1  }]
            } else {
                return currItems.map(item => {
                    if (item.id === id){
                        console.log('adding item')
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id:number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1 ) {
                console.log('returning a list of items but the ID chosen will be removed', id)
                return currItems.filter(item => item.id !== id )
            } else {
                return currItems.map(item => {
                    if (item.id === id){
                        console.log('decreasing item')
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        console.log('remove from cart func hit', id)
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }




    return (
    <ShoppingCartContext.Provider 
    value={{ 
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity, 
        removeFromCart 
    }}
    >
        {children}
    </ShoppingCartContext.Provider>
    )
}