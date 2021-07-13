import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../../routes/PrivateRoute'
import RestrictedRoute from '../../routes/RestrictedRoute'

const AppRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, k) => {
        if (route.routes) {
          return (
            <Route
              key={`${route.path.join()},${k}`}
              path={route.path}
              exact={route.exact}
            >
              <route.component>
                <AppRoutes routes={route.routes} />
              </route.component>
            </Route>
          )
        }

        if (route.requiredAuth) {
          return <PrivateRoute key={route.path} path={route.path} exact={route.exact} component={route.component} />
        }

        if (route.restricted) {
          return <RestrictedRoute key={route.path} path={route.path} exact={route.exact} component={route.component} />
        }

        return <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
      })}
    </Switch>
  )
}

export default AppRoutes
