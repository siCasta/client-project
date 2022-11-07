import { ReactNode } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface ProtectedRouteComponent {
    children?: ReactNode
    isAllowed: boolean
    redirectTo?: string
}

function ProtectedRoute({
    children,
    isAllowed,
    redirectTo = '/'
}: ProtectedRouteComponent) {
    if (!isAllowed) return <Navigate to={redirectTo} />

    return children ?? <Outlet />
}
export default ProtectedRoute
