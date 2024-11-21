import { Navigate } from "react-router-dom";
import { getUserToken, logout } from "../../features/Authentication/userSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const token = useAppSelector(getUserToken);
  const dispatch = useAppDispatch();

  if (!token) {
    dispatch(logout());
    return <Navigate to="/" replace />;
  }

  try {
    const decodedToken: any = jwtDecode(token);

    const isExpired = decodedToken.exp * 1000 < Date.now();
    if (isExpired) {
      toast.success("Please login again");
      dispatch(logout());
      return <Navigate to="/" replace />;
    }

    return children;
  } catch (error) {
    toast.error("Unauthorize action");
    dispatch(logout());
    console.error(error);
    return <Navigate to="/" replace />;
  }
}

export default ProtectedRoute;
