type PermissionT = 'admin' | 'user'

export interface UserI {
    _id: string
    name: string
    surname: string
    age: number
    address: string
    phonePrefix: number
    phone: number
    avatar: string
    permissions: Array<PermissionT>
    cart: string
}

export interface SessionResponseI {
    message: string
    data: UserI
    status: number
}
