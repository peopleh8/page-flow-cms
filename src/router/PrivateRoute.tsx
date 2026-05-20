import type { FC } from 'react'
import { Navigate, Outlet } from 'react-router'
import type { RouteProps } from '../types/commont.types'

const PrivateRoute: FC<RouteProps> = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute
