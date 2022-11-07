import create from 'zustand'
import { UserI } from '../types/session'

interface UserStoreI {
    user: UserI | Record<string, undefined>
    fetchUser: () => void
}

export const userStore = create<UserStoreI>((set, get) => ({
    user: {},
    fetchUser() {}
}))
