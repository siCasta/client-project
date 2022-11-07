export interface ProductI {
    _id: string
    name: string
    price: number
    thumbnail: string
    code: string
    stock: number
}

export interface ProductsResponseI {
    message: string
    data: Array<ProductI>
    status: number
}
