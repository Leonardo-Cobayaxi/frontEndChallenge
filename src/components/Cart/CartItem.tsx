import './CartItem.css'
import { Product } from '../Products/ProductList'
import { useContext, useEffect, useState } from 'react';
import { userContext } from '../../contexts/userContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store'
import { decrement, increment, reset } from '../../Store/Stock.store';
export const CartItem = (Product: Product) => {
    const { isOpenCartItem, setIsOpenCartItem, setShopList, setTotalPrice, shopList, totalPrice } = useContext(userContext)
    const dispatch = useDispatch()
    const stock = useSelector((state: RootState) => state.stock)
    const [counter, setCounter] = useState(1)
    function handleShopListCancel() {
        // setIsOpenCartItem(false)
        // setShopList([])
        setTotalPrice(totalPrice - (counter * Number(Product.price)))
        dispatch(reset())
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
    // useEffect(() => {

    //     setTotalPrice(totalPrice)
    // }, [counter])

    return (
        <div className={isOpenCartItem ? 'cartItem' : 'cartItemNone'}>
            <img src={Product.photo} alt="Product"></img>
            <div className='cartItemName'>
                <p>{Product.brand + ' ' + Product.name}</p>
            </div>
            <div className='itemCount'>
                <span>Qtd</span>
                <div className='counter'>
                    <button onClick={() => decrease()}>-</button>
                    <p className='counterBar'>|</p>
                    <p>{counter}</p>
                    <p className='counterBar'>|</p>
                    <button
                        onClick={() => increase()}>+</button>
                </div>
            </div>
            <p className='cartItemPrice'>{Product.price}</p>
            <button
                onClick={() => handleShopListCancel()}
                className='closeCartItem'
            >X</button>
        </div >
    )
}
