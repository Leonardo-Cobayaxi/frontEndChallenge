import './Cart.css'
import { CartItem } from './CartItem'
import { useContext } from 'react'
import { userContext } from '../../contexts/userContext'
import { useEffect } from 'react'

export const Cart: React.FC = () => {
    const { shopList, totalPrice } = useContext(userContext)
    const { isOpenCart, setIsOpenCart } = useContext(userContext)

    useEffect(() => {
    }, [shopList, totalPrice])

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
                <h3>R${totalPrice.toFixed(2)}</h3>
            </div>
            <button className='checkout'><p>Finalizar Compra</p></button>

        </div>
    )

}
