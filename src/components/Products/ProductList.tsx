import { Card } from "./Card"
import './ProductList.css'
import { useEffect, useState } from "react"
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export type Product = {
    brand: string
    description: string;
    id: number
    name: string
    photo: string
    price: number
}

export const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[] | null>(null)
    function getAllProducts() {
        const url = 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC'
        try {
            axios.get(url).then((response) => {
                setProducts(response.data.products)
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