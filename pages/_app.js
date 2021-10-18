import "tailwindcss/tailwind.css";
import { Header } from "../components";
import { CartProvider } from "../contexts/cartcontext";
import "../globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FilterProvider, SortingProvider } from "../contexts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <ToastContainer position="top-center" autoClose={3000} />
        <Header />
        <SortingProvider>
          <FilterProvider>
            <Component {...pageProps} />
          </FilterProvider>
        </SortingProvider>
      </CartProvider>
    </>
  );
}

export default MyApp;
