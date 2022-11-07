import { useEffect, useState } from 'react'
import { fetchProducts } from '../../services/products'
import { ProductI } from '../../types/products'

function Home() {
    const [products, setProducts] = useState<Array<ProductI>>([])

    useEffect(() => {
        const getProducts = async () => {
            const products = await fetchProducts()

            setProducts(products)
        }

        getProducts()
    }, [])

    return (
        <div>
            hello
            {products.map(p => (
                <div>{p.name}</div>
            ))}
        </div>
    )
}

export default Home
