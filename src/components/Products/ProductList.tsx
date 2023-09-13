import { Card } from "./Card"
import './ProductList.css'
import { useEffect, useState } from "react"
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export type Product = {
    id: number
    title: string
    description: string;
    image: string
    price: number
    category: string
    rating: any
}

export const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[] | null>(null)
    function getAllProducts() {
        const url = 'https://fakestoreapi.com/products'
        try {
            axios.get(url).then((response) => {
                setProducts(response.data)
                console.log(response.data)
            })
        } catch (error) {
            return
        }
    }



    useEffect(() => {
        getAllProducts()

    }, [])

    return (
        <div className="list">
            {!products
                ? <Box sx={{ display: 'flex', height: "100vh", width: "100vw", justifyContent: "center", alignItems: "center" }}>
                    <CircularProgress />
                </Box>
                : null}
            {products
                ? products.map((product) => {
                    return <Card {...product} />
                })
                : null}
        </div>
    )
}