import "./Header.css"
import { useContext } from 'react';
import Cart from '../../assets/cart.svg'
import { userContext } from '../../contexts/userContext';
export const Header: React.FC = () => {
    const { setIsOpenCart, shopList } = useContext(userContext)
    return (
        <header>
            <div>
                <h1>MKS</h1>
                <h4>Sistemas</h4>
            </div>
            <button onClick={() => setIsOpenCart(true)}>
                <img src={Cart} alt="Shopping cart icon" />
                <p>{shopList.length}</p>
            </button>
        </header>
    )
}
