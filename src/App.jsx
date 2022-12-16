import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/AuthProvider";
import store from "./store";

//IMPORT LAYOUT
import AuthLayout from "./layout/AuthLayout";
import AppLayout from "./layout/AppLayout";

//IMPORT PAGES
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddTodo from "./pages/AddTodo";
import UpdateTodo from "./pages/UpdateTodo";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <Routes>
            <Route path='auth' element={<AuthLayout />}>
              <Route index element={<Login />} />
            </Route>
            <Route path='home' element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path='add-todo' element={<AddTodo />} />
              <Route path='edit-todo/:id' element={<UpdateTodo />} />
            </Route>
          </Routes>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
