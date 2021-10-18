import Head from "next/head";
import { Products } from "../components";
import FeaturedProduct from "../components/FeaturedProduct";
import { SWRConfig } from "swr";
import { getproducts } from "../services";

function IndexPage({ fallback }) {
  return (
    <>
      <Head>
        <link rel="icon" href="./favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="A simple E-commerce store made by Chidiebere Ekennia using Nextjs - for the Bejamas Frontend Developer role."
        />
        <meta
          name="keywords"
          content="Bejamas, Chidiebere Ekennia, Frontend, E-commerce"
        ></meta>
        <title>Bejamas Store | Home</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <main>
          <section id="featured-product">
            <div className="container py-5">
              <FeaturedProduct />
              <hr className="mt-10 hr-lg" />
            </div>
          </section>
          <section>
            <div className="container">
              <Products />
            </div>
          </section>
        </main>
      </SWRConfig>
    </>
  );
}

export async function getServerSideProps() {
  const products = await getproducts();
  const a = {
    props: {
      fallback: {
        "/api/products": products,
      },
    },
  };
  return a;
}

export default IndexPage;
