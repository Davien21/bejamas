import { useProducts, useToggleToCart } from "../../hooks";
import { Button } from "../../components";
import Image from "next/image";

import styles from "./featured-product.module.css";
import { formatSize, getBlurPath } from "../../utils";
import { useCartContext } from "../../contexts";
import { Loader } from "../Loader";

const FeaturedProduct = () => {
  const { products, isError, isLoading } = useProducts();
  const featuredProduct = products?.find((product) => product.featured);
  const category = featuredProduct?.category;
  const recommendations = products.filter(
    (product) => product.category === category
  );
  const { cart, setCart } = useCartContext();
  const { toggleCart, isInCart } = useToggleToCart({
    product: featuredProduct,
    cart,
    setCart,
  });

  return (
    <>
      {isError && <div className="text-2xl">There was an error 😭...</div>}
      <Loader isLoading={isLoading} />
      {!isLoading && !isError && products.length == 0 && (
        <div className="text-2xl">There are no products in the database</div>
      )}
      {featuredProduct && (
        <div className={""}>
          <div
            id={`${styles["photo-of-the-day"]}`}
            className={`mb-10 grid grid-cols-6 xl:grid-cols-9 md:justify-between items-center`}
          >
            <div className="order-1 col-span-full md:col-span-4 xl:col-span-7 my-6">
              <span className="text-2xl md:text-4xl font-semibold">
                {featuredProduct?.name}
              </span>
            </div>
            <div className="order-3 md:order-2 col-span-full md:col-span-2">
              <Button
                onClick={() => toggleCart()}
                text={isInCart ? "Remove From Cart" : "Add to Cart"}
              />
            </div>

            <div className="grid grid-cols-1 order-2 md:order-3 col-span-full mb-6 md:mb-0 relative row-start-2">
              <div className={`${styles["image"]}`}>
                <Image
                  priority="true"
                  alt={featuredProduct?.image?.alt}
                  src={featuredProduct?.image?.src}
                  width="1536"
                  height="1024"
                  placeholder="blur"
                  blurDataURL={getBlurPath(featuredProduct?.image?.src)}
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
                About the {featuredProduct?.name}
              </p>
              <p className={`${styles["category"]} text-2xl my-2`}>
                {featuredProduct.category}
              </p>
              <span className={`${styles["description"]}`}>
                {featuredProduct?.description}
              </span>
            </div>
            <div className="col-span-full md:col-span-3 md:text-right">
              <p className={`text-2xl font-semibold mb-8`}>People also buy</p>
              <div
                className={`grid grid-cols-3 gap-6 lg:gap-8 md:justify-end mb-12 ${styles["alt-products"]}`}
              >
                {recommendations.map((product) => {
                  return (
                    <Image
                      key={product.name}
                      className="h-full"
                      alt={product.image.alt}
                      src={product.image.src}
                      width="640"
                      height="800"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={getBlurPath(product.image.src)}
                    />
                  );
                })}
              </div>
              <div className="md:text-right">
                <p className={`text-2xl font-semibold mb-2`}>Details</p>
                <div className={`${styles["specifications"]}`}>
                  <div id="dimensions" className={`flex md:justify-end mb-2`}>
                    <span>Size:</span>
                    <div className="mx-2">
                      <span>{featuredProduct?.details.dimensions.width}</span>
                      <span className="mx-2">X</span>
                      <span>{featuredProduct?.details.dimensions.width}</span>
                    </div>
                    <span>Pixels</span>
                  </div>
                  <div id="file-size" className="">
                    <span>Size:</span>
                    <span className="mx-2">
                      {formatSize(featuredProduct?.details.size)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedProduct;
