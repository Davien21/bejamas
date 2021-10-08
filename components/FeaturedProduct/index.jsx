import React from "react";
import { useProducts } from "../../hooks";
import { Button } from "../../components";
import Image from "next/image";
import { product1, product2, product3, product4 } from "../../assets/images";
import styles from "./featured-product.module.css";

function FeaturedProduct(props) {
  const products = useProducts();

  return (
    <div className={""}>
      <div
        id={`${styles["photo-of-the-day"]}`}
        className={`mb-10 grid grid-cols-6 md:justify-between items-center`}
      >
        <div className="order-1 col-span-full md:col-span-3 my-6 ">
          <span className="text-2xl md:text-4xl font-semibold">
            Samurai King Resting
          </span>
        </div>
        <div className="order-3 md:order-2 col-span-full md:col-span-2 md:col-start-5 xl:col-start-6">
          <Button text="Add to Cart" />
        </div>

        <div className="order-2 md:order-3 col-span-full mb-6 md:mb-0 relative row-start-2">
          <div className={`${styles["image"]}`}>
            <Image
              src={product1}
              q="100"
              layout={"responsive"}
              objectFit="cover"
              objectPosition="left"
            />
          </div>
          <div className="absolute bottom-0 bg-white px-3 py-2 border-b font-semibold">
            <span>Photo of the day</span>
          </div>
        </div>
      </div>
      <div id={styles["about"]} className="grid grid-cols-8 md:gap-10">
        <div className="col-span-full md:col-span-5 mb-10 mb-md-0">
          <p className={`text-2xl font-semibold `}>
            About the Samurai King Resting
          </p>
          <p className={`${styles["category"]} text-2xl my-2`}>Pets</p>
          <span className={`${styles["description"]}`}>
            So how did the classical Latin become so incoherent? According to
            McClintock, a 15th century typesetter likely scrambled part of
            Cicero's De Finibus in order to provide placeholder text to mockup
            various fonts for a type specimen book.So how did the classical
            Latin become so incoherent? According to McClintock, a 15th century
            typesetter likely scrambled part of Cicero's De Finibus in order to
            provide placeholder text to mockup various fonts for a type specimen
            book.So how did the classical Latin become so incoherent? According
            to McClintock.
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
    </div>
  );
}

export default FeaturedProduct;
