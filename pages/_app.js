import { useState } from "react";
import "tailwindcss/tailwind.css";
import "../globals.css";

function MyApp({ Component, pageProps }) {
  
  return <Component {...pageProps} />;
}

export default MyApp;
