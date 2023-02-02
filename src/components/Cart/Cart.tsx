
import './Cart.css'
import { CartItem } from './CartItem'
import { useContext } from 'react'
import { userContext } from '../../contexts/userContext'
import { useState, useEffect } from 'react'
import { Product, ProductList } from '../Products/ProductList'

export const Cart = () => {
    const { shopList, totalPrice } = useContext(userContext)
    const { isOpenCart, setIsOpenCart } = useContext(userContext)
    const item = shopList[0]
    function getAllLocalStorage() {
        // const storageList = JSON.parse(JSON.stringify(localStorage))
        // const keys = Object.keys(localStorage)
        // const teste = JSON.parse(localStorage.getItem('1') || "")
        // console.log(teste)
        // console.log(JSON.parse(localStorage.getItem('1') || ""))
        //  setProducts(storageList)
        // console.log(shopList[0].id)


    }

    useEffect(() => {
        getAllLocalStorage()

    }, [shopList])
    return (
        <div className={isOpenCart ? 'cart' : 'cartNone'} >
            <div className='title'>
                <h2>Carrinho de Compras</h2>
                <button onClick={() => setIsOpenCart(false)}>X</button>
            </div>
            <div className='shopList'>
                {shopList[0]
                    ? shopList.map((product) => {
                        return <CartItem {...product} />
                    })
                    : null}
            </div>
            <div className='listTotal'>
                <h3>Total:</h3>
            </div>
            <div className='listCost'>
                <h3>R${totalPrice}</h3>
            </div>
            <button className='checkout'><p>Finalizar Compra</p></button>
        </div>
    )

}
