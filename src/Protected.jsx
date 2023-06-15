import { Navigate } from "react-router-dom";
const Protected = ({ canNav, path, children }) => {
    if (!canNav) {
        return <Navigate to={`${path}`} replace />;
    }
    return children;
};
export default Protected;
