import React, { useContext, useReducer, createContext, useState } from 'react'

const initState = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : []
const CartStateContext = createContext()
const CartDispatchContext = createContext()
const reducer = (state, action) => {
      switch (action.type) {
            case "ADD":
                  const index = state.findIndex(item => item.id == action.item.id)
                  if (index == -1) {
                        return [...state, action.item];
                  } else {
                        const newArr = state.map(item => {
                              if (item.id === action.item.id) {
                                    item.CartQuantity + 1
                              }
                              return item
                        })
                        console.log(newArr);
                        return [...newArr]
                  }
            case "REMOVE":
                  const newArr = [...state]
                  newArr.splice(action.index, 1)
                  return newArr

            case 'CHANGE_QUANTITY':
                  return [...action.payload]
            default:
                  throw new Error(`unknown action ${action.type}`)
      }
}
export const CartProvider = ({ children }) => {

      const [state, dispatch] = useReducer(reducer, initState)
      return (
            <CartDispatchContext.Provider value={dispatch}>
                  <CartStateContext.Provider value={state}>
                        {children}
                  </CartStateContext.Provider>
            </CartDispatchContext.Provider>
      )
}
export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)
