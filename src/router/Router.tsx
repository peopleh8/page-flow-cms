import type { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from '../layouts/Root/Root.layout'
import AuthLayout from '../layouts/Auth/Auth.layout'
import MainLayout from '../layouts/Main/Main.layout'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import Home from '../screens/Home/Home'
import { useTypedSelector } from '../hooks/use-typed-selector'

const Router: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.user)

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route element={<PublicRoute isAuth={isAuth} />}>
          <Route element={<AuthLayout />}>
            <Route
              path='/sign-in'
              element={<>Sign In</>}
            />
            <Route
              path='/sign-up'
              element={<>Sign Up</>}
            />
          </Route>
        </Route>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route element={<MainLayout />}>
            <Route
              path='/'
              element={<Home />}
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default Router
