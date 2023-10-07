import { useState, useEffect } from 'react'
// we gett the value from local storage
// or get the inital value we pass


            // whatever Type it is, this initial value is either going to be that type, or a function that return that type
export function useLocalStorage<T>(key: string, initialValue: T | (() => T) ) {
    const [ value, setValue ] = useState<T>(() => { 
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === 'function') {
            return (initialValue as () => T)()
        }  else {
            return initialValue
        }
    })

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    // the values  cartItems, setCartItems 
    //  have array of values and set state, so we need to tell them what elements in our array we are returning 
    return [value, setValue] as [typeof value, typeof setValue]
}
