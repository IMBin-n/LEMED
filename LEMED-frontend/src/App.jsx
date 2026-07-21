import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LangProvider } from "./context/LangContext";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";   // ← جدید
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import ShoppingCart from "./pages/shoppingCart";
import Login from "./pages/Login";       // ← جدید
import Register from "./pages/Register"; // ← جدید

export default function App() {
  return (
    <LangProvider>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route index path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="product/:id" element={<ProductDetail />} />
                <Route path="shoppingCart" element={<ShoppingCart />} />
                <Route path="articles" element={<Articles />} />
                <Route path="articles/:id" element={<ArticleDetail />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </LangProvider>
  );
}