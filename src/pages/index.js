import styles from "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Grid } from "@/components/Grid";
import { useEffect, useState } from "react";

function AspectRatioTracker() {
  const [aspectRatio, setAspectRatio] = useState(null);

  useEffect(() => {
    function calculateAspectRatio() {
      return window.innerWidth / window.innerHeight;
    }

    function handleResize() {
      setAspectRatio(calculateAspectRatio());
    }

    if (typeof window !== "undefined") {
      setAspectRatio(calculateAspectRatio());
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return aspectRatio;
}

export default function Home({ productData }) {
  console.log(productData);
  console.log(productData[0].groups);
  const categories = productData[0].groups;

  const aspectRatio = AspectRatioTracker();

  let flexLayout;

  if (aspectRatio > 4) {
    // Extremely wide screens (e.g., 48:9 or wider)
    flexLayout = "0 0 4.16%";
  } else if (aspectRatio > 2) {
    // Wide screens (e.g., 32:9 or wider)
    flexLayout = "0 0 8.33%";
  } else if (aspectRatio > 1.5) {
    // Screens with aspect ratio between 16:9 and 32:9
    flexLayout = "0 0 16.66%";
  } else {
    // Screens with aspect ratio less than 16:9
    flexLayout = "0 0 33.33%";
  }

  const gridStep = {
    flex: `${flexLayout}`,
  };

  // const backgroundImageUrl = productData[0]?.additionally[0]?.img?.src || "";

  // const divStyle = {
  //   backgroundImage: `url(${backgroundImageUrl})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   height: "100%",
  // };

  function splitGroup(group) {
    const subgroups = [];
    for (let i = 0; i < group.products.length; i += 4) {
      subgroups.push({
        group: group.group,
        products: group.products.slice(i, i + 4),
      });
    }
    return subgroups;
  }

  const newData = categories.flatMap((group) =>
    group.products.length > 4 ? splitGroup(group) : group
  );

  // newData.sort((a, b) => b.products.length - a.products.length);

  console.log(newData);

  useEffect(() => {
    const element = document.querySelector(".products__grid");
    const realWidth = element.scrollWidth;
    console.log("grid width:", realWidth);
  }, []);

  return (
    <>
      <Header></Header>
      <div style={gridStep} className="products__grid">
        {newData.map((group) => (
          <div key={group.group} className="group">
            <div className="info__wrapper">
              <div className="column__name">{group.group}</div>
              <div className="column__name">Цена</div>
              <div className="column__name">Акция</div>
            </div>
            {group.products.map((product) => (
              <div className="product" key={product.name}>
                <div className="column__info">
                  <div>
                    <div className="product__name">
                      {product.name.length > 12
                        ? `${product.name.substring(0, 12)}...`
                        : product.name}
                    </div>
                    <div className="product__info">
                      Алк. {product.alcohol}% Пл. {product.density}%{" "}
                      {product.city}
                    </div>
                  </div>
                  <img
                    className="product__img"
                    src={
                      product.additionally[0].img.src[
                        "$playback-data-resource"
                      ] || product.additionally[0].img.src
                    }
                  />
                </div>
                <div className="column__price">
                  {product.price}
                  {product.priceByCard !== 0 && !product.discount.length && (
                    <div className="stroke"></div>
                  )}
                </div>
                {product.priceByCard !== 0 && !product.discount.length && (
                  <div className="column__promo">{product.priceByCard}</div>
                )}
                {product.discount.length > 0 && (
                  <div
                    className={`${
                      product.discount[0].length > 5
                        ? "promo__minimised"
                        : "column__promo"
                    }`}
                  >
                    {product.discount[0]}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
        {productData[0].additionally[0].img.src === "" ? (
          <img
            className="poster"
            src="https://ae04.alicdn.com/kf/H9a0580ed27b64ef08dfce964d5709475K.jpg"
          ></img>
        ) : (
          <img
            className="poster"
            src={productData[0].additionally[0].img.src}
          ></img>
        )}
      </div>
      <Footer></Footer>
    </>
  );
}

export async function getStaticProps() {
  async function fetchProductData() {
    try {
      const response = await fetch(
        "http://portal.visiobox.ru/docs/projects/meln/response_sample.json"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching product data:", error);
      return null;
    }
  }

  const productData = await fetchProductData();

  return {
    props: {
      productData,
    },
  };
}
