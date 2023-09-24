import { useEffect, useState } from "react";

export const Grid = ({ flexLayout, productData }) => {
  const categories = productData[0].groups;

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

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const element = document.querySelector(".products__grid");
    const realWidth = element.scrollWidth;

    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + 3840;
        if (newPosition >= realWidth) {
          element.scrollTo(0, 0);
          return 0;
        } else {
          element.scrollTo(newPosition, 0);
          return newPosition;
        }
      });
    }, 30000);

    return () => clearInterval(scrollInterval);
  }, []);

  const gridStep = {
    flex: `${flexLayout}`,
  };

  return (
    <>
      <div className="background">
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
                    <div className="grow">
                      <div className="product__name">
                        {product.additionally[0].img.src[
                          "$playback-data-resource"
                        ] ||
                        (product.additionally[0].img.src &&
                          product.name.length > 14) ? (
                          <div className="h4 animate">
                            <div>{product.name}</div>
                            <div>{product.name}</div>
                          </div>
                        ) : (
                          <div>{product.name}</div>
                        )}
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
            ""
          ) : (
            <div className="poster__wrapper">
              <img
                className="poster"
                src={productData[0].additionally[0].img.src}
              ></img>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
