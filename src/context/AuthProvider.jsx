import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const navigate = useNavigate();

  const user = {
    id: 1,
    name: "user",
    email: "user@example.com",
    password: "password",
    token: "token",
  };

  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/auth");
        return;
      }

      setAuth(user);
      navigate("/home");
    };
    authUser();
  }, []);

  const logOut = () => {
    Swal({
      title: "Do you want to log out?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        setAuth({});
        localStorage.removeItem("token");
        navigate("/auth");
      }
    });
  };

  return (
    <AuthContext.Provider value={{ setAuth, auth, user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
