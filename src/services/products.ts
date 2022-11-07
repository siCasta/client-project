import { ProductsResponseI } from '../types/products'
import axios from './axiosInstance'

export const fetchProducts = async () => {
    const { data } = await axios.get<ProductsResponseI>('/products')

    return data.data
}
