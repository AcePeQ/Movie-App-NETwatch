import { Navigate } from "react-router-dom";
import { getUserToken, logout } from "../../features/Authentication/userSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const token = useAppSelector(getUserToken);
  const dispatch = useAppDispatch();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    if (!token) {
      dispatch(logout());
      setIsAuthorized(false);
      return;
    }

    try {
      const decodedToken = jwtDecode<JwtPayload>(token);
      const expirationTime = decodedToken.exp;

      if (expirationTime === undefined) {
        toast.error("Token does not contain expiration time");
        dispatch(logout());
        setIsAuthorized(false);
        return;
      }

      const isExpired = expirationTime * 1000 < Date.now();
      if (isExpired) {
        toast.success("Please login again");
        dispatch(logout());
        setIsAuthorized(false);
      } else {
        setIsAuthorized(true);
      }
    } catch {
      toast.error("Unauthorized action");
      dispatch(logout());
      setIsAuthorized(false);
    }
  }, [token, dispatch]);

  if (isAuthorized === null) {
    return null;
  }

  return isAuthorized ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;
