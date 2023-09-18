import './CartItem.css'
import { Product } from '../Products/ProductList'
import { useContext, useState } from 'react';
import { userContext } from '../../contexts/userContext';

export const CartItem = (Product: Product) => {
    const { isOpenCartItem, setTotalPrice, shopList, totalPrice } = useContext(userContext)

    const [counter, setCounter] = useState(1)
    function handleShopListCancel() {
        setTotalPrice(totalPrice - (counter * Number(Product.price)))
        shopList.splice(shopList.findIndex(f => f.id === Product.id), 1)
    }
    const increase = () => {
        setCounter(counter + 1);
        setTotalPrice(totalPrice + Number(Product.price))
    };

    const decrease = () => {
        if (counter > 1) {
            setCounter(counter - 1);
            setTotalPrice(totalPrice - Number(Product.price))
        } else return
    };


    return (
        <div className={isOpenCartItem ? 'cartItem' : 'cartItemNone'}>
            <img src={Product.image} alt="Product"></img>
            <div className='cartItemName'>
                <p>{Product.title}</p>
            </div>
            <div className='itemCount'>
                <span>Qtd</span>
                <div className='counter'>
                    <button onClick={() => decrease()}>-</button>
                    <p>{counter}</p>
                    <button onClick={() => increase()}>+</button>
                </div>
            </div>
            <p className='cartItemPrice'>R${Product.price}</p>
            <button
                onClick={() => handleShopListCancel()}
                className='closeCartItem'
            >X</button>
        </div >
    )
}
