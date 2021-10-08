import { useState } from "react";
import "tailwindcss/tailwind.css";
import { Header } from "../components";
import { CartProvider } from "../contexts/cartcontext";
import "../globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <ToastContainer position="top-center" autoClose={3000}/>
        <Header />
        <Component />
      </CartProvider>
    </>
  );
}

export default MyApp;
