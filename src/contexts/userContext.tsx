import { createContext, ReactNode, useState } from "react";
import { Product } from "../components/Products/ProductList";

type userContextType = {
    isOpenCart: boolean;
    setIsOpenCart: (newState: boolean) => void;
    isOpenCartItem: boolean;
    setIsOpenCartItem: (newState: boolean) => void;
    shopList: Product[];
    setShopList: (newState: Product[]) => void;
    totalPrice: number;
    setTotalPrice: (newState: number) => void;
}
type userContextProps = {
    children: ReactNode;
}
const initialValue = {
    isOpenCart: false,
    setIsOpenCart: () => { },
    isOpenCartItem: false,
    setIsOpenCartItem: () => { },
    shopList: [],
    setShopList: () => { },
    totalPrice: 0,
    setTotalPrice: () => { }
}
export const userContext = createContext<userContextType>(initialValue);

export const UserContextProvider = ({ children }: userContextProps) => {
    const [isOpenCart, setIsOpenCart] = useState(initialValue.isOpenCart)
    const [isOpenCartItem, setIsOpenCartItem] = useState(initialValue.isOpenCartItem)
    const [shopList, setShopList] = useState<Product[]>([])
    const [totalPrice, setTotalPrice] = useState(initialValue.totalPrice)
    return (
        <userContext.Provider value={{ isOpenCart, setIsOpenCart, isOpenCartItem, setIsOpenCartItem, shopList, setShopList, totalPrice, setTotalPrice }}>
            {children}
        </userContext.Provider>
    )
}