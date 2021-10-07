import Head from "next/head";
import { Button, Header, Products } from "../../components";
import Image from "next/image";
import { product1, product2, product3, product4 } from "../../assets/images";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
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
      <Header />
      <main>
        <section id="photo-of-the-day">
          <div className="container py-5">
            <div className="grid grid-cols-6 md:justify-between items-center">
              <div className="order-1 col-span-full md:col-span-3 my-6 ">
                <span className="text-2xl md:text-4xl font-semibold">
                  Samurai King Resting
                </span>
              </div>
              <div className="order-3 md:order-2 col-span-full md:col-span-2 md:col-start-5 xl:col-start-6">
                <Button text="Add to Cart" />
              </div>

              <div className="order-2 md:order-3 col-span-full mb-6 md:mb-0 relative row-start-2">
                <Image src={product1} q="100" layout={"responsive"} />
                <div className="absolute bottom-0 bg-white px-3 py-2 border-b font-semibold">
                  <span>Photo of the day</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id={styles["about"]}>
          <div className="container py-5">
            <div className="grid grid-cols-8 md:gap-10">
              <div className="col-span-full md:col-span-5 mb-10 mb-md-0">
                <p className={`text-2xl font-semibold `}>
                  About the Samurai King Resting
                </p>
                <p className={`${styles["category"]} text-2xl my-2`}>Pets</p>
                <span className={`${styles["description"]}`}>
                  So how did the classical Latin become so incoherent? According
                  to McClintock, a 15th century typesetter likely scrambled part
                  of Cicero's De Finibus in order to provide placeholder text to
                  mockup various fonts for a type specimen book.So how did the
                  classical Latin become so incoherent? According to McClintock,
                  a 15th century typesetter likely scrambled part of Cicero's De
                  Finibus in order to provide placeholder text to mockup various
                  fonts for a type specimen book.So how did the classical Latin
                  become so incoherent? According to McClintock.
                </span>
              </div>
              <div className="col-span-full md:col-span-3 md:text-right">
                <p className={`text-2xl font-semibold mb-8`}>People also buy</p>
                <div
                  className={`grid grid-cols-3 gap-6 lg:gap-8 md:justify-end mb-12 ${styles["alt-products"]}`}
                >
                  <Image
                    className="h-full"
                    src={product2}
                    q="100"
                    layout="responsive"
                  />
                  <Image
                    className="h-full"
                    src={product3}
                    q="100"
                    layout="responsive"
                  />
                  <Image
                    className="h-full"
                    src={product4}
                    q="100"
                    layout="responsive"
                  />
                </div>
                <div className="md:text-right">
                  <p className={`text-2xl font-semibold mb-2`}>Details</p>
                  <div className={`${styles["specifications"]}`}>
                    <div id="dimensions" className={`flex md:justify-end mb-2`}>
                      <span>Size:</span>
                      <div className="mx-2">
                        <span>1020</span>
                        <span className="mx-2">X</span>
                        <span>1020</span>
                      </div>
                      <span>Pixels</span>
                    </div>
                    <div id="file-size" className="">
                      <span>Size:</span>
                      <span className="mx-2">15mb</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-10" />
          </div>
        </section>
        <section>
          <div className="container">
            <Products />
          </div>
        </section>
      </main>
    </>
  );
}
