import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RequireAuth({ children }) {
    let location = useLocation();
    const data = JSON.parse(localStorage.getItem('data'));
    // const isLogged = useSelector(state => state.persistedReducer.isLogged);

    const isLogged = () => {
        if(!data) return false;

        return true;
    }

    if (!isLogged()) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children
}

export default RequireAuth;