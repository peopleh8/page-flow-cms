import type { FC } from 'react'
import { Navigate, Outlet } from 'react-router'
import type { RouteProps } from '../types/commont.types'

const PublicRoute: FC<RouteProps> = ({ isAuth }) => {
  return !isAuth ? <Outlet /> : <Navigate to='/' />
}

export default PublicRoute
