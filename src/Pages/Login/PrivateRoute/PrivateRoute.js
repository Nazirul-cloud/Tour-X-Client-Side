import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest}) => {
    let {users, isLoading } = useAuth();
    if(isLoading){
      return <Spinner animation="grow" variant="success" />

    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          users.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;