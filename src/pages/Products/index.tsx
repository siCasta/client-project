import { useParams } from 'react-router-dom'

function Products() {
    const { pid } = useParams()

    return <div>Products</div>
}
export default Products
