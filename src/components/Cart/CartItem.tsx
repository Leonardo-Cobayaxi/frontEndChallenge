import './CartItem.css'
import { Product } from '../Products/ProductList'
import { useContext, useEffect } from 'react';
import { userContext } from '../../contexts/userContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store'
import { decrement, increment, reset } from '../../Store/Stock.store';
export const CartItem = (Product: Product) => {
    const { isOpenCartItem, setIsOpenCartItem, setShopList, setTotalPrice } = useContext(userContext)
    const dispatch = useDispatch()
    const stock = useSelector((state: RootState) => state.stock)
    function handleShopListCancel() {
        setIsOpenCartItem(false)
        setShopList([])
        setTotalPrice(0)
        dispatch(reset())
    }

    useEffect(() => {
        setTotalPrice(stock.counter * Product.price)
    },)

    return (
        <div className={isOpenCartItem ? 'cartItem' : 'cartItemNone'}>
            <img src={Product.photo} alt="Product"></img>
            <div className='cartItemName'>
                <p>{Product.brand + ' ' + Product.name}</p>
            </div>
            <div className='itemCount'>
                <span>Qtd</span>
                <div className='counter'>
                    <button onClick={() => dispatch(decrement())}>-</button>
                    <p className='counterBar'>|</p>
                    <p>{stock.counter}</p>
                    <p className='counterBar'>|</p>
                    <button
                        onClick={() => dispatch(increment())}>+</button>
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
