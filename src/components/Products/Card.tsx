import Bag from '../../assets/bag.svg'
import './Card.css'
import { useContext } from 'react';
import { Product } from './ProductList'
import { userContext } from '../../contexts/userContext';

export const Card = (Product: Product) => {
    const { setShopList, setIsOpenCartItem, shopList, setTotalPrice, totalPrice } = useContext(userContext)



    function handleShopListClick() {
        setIsOpenCartItem(true)
        const idCheck = shopList.find(f => f.id === Product.id)
        if (idCheck === undefined && shopList.length < 4) {
            setShopList([...shopList, Product])
            setTotalPrice(Number(totalPrice) + Number(Product.price))
            console.log(totalPrice)

        } else

            return
    }
    return (

        <div className='card' key={Product.id}>
            <img className='productImg' src={Product.photo} alt="Product" />
            <div className='priceTag'>
                <p className='productName'>{Product.brand} {Product.name}</p>
                <p className='price'>R${Product.price}</p>
            </div>
            <p className='description'>{Product.description}</p>
            <button onClick={() => handleShopListClick()}>
                <img src={Bag} alt="Bag icon" />
                <p>Comprar</p>
            </button>
        </div>

    )
}
