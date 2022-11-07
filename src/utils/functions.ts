import { PermissionT, UserI } from '../types/session'

export const $ = <T extends Element>(query: string) =>
    document.querySelector<T>(query)

export const authorize = (user: UserI | null, permission: PermissionT) => {
    return !!user && user.permissions.includes(permission)
}
