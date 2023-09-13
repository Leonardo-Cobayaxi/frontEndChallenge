import Bag from '../../assets/bag.svg'
import './Card.css'
import { useContext } from 'react';
import { Product } from './ProductList'
import { userContext } from '../../contexts/userContext';
import Rating from '@mui/material/Rating';

export const Card = (Product: Product) => {
    const { setShopList, setIsOpenCartItem, shopList, setTotalPrice, totalPrice } = useContext(userContext)

    function handleShopListClick() {
        setIsOpenCartItem(true)
        const idCheck = shopList.find(f => f.id === Product.id)
        if (idCheck === undefined) {
            setShopList([...shopList, Product])
            setTotalPrice(Number(totalPrice) + Number(Product.price))
        } else
            return
    }

    return (
        <div className='card' key={Product.id}>
            <img className='productImg' src={Product.image} alt="Product" />
            <p className='productName'>{Product.title} </p>
            <div className='description'>
                <p>{Product.category}</p>
                <Rating name="read-only" value={Product.rating.rate} readOnly />
            </div>
            <p className='price'>R${Product.price}</p>
            <button onClick={() => handleShopListClick()}>
                <img src={Bag} alt="Bag icon" />
                <p>Comprar</p>
            </button>
        </div>

    )
}
