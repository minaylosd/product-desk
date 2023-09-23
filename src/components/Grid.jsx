import { ProductGroup } from "./ProductGroup";

export const Grid = () => {
  return (
    <>
      <div className="products__grid">
        {productData.map((groups) => (
          <div key={group.group} className="group">
            <div className="info__wrapper">
              <div className="column__name">Светлое нефильтрованное</div>
              <div className="column__name">Цена</div>
              <div className="column__name">Акция</div>
            </div>
            <div className="product">
              <div className="column__info">
                <div className="product__name">Три быка Драфт</div>
                <div className="product__info">
                  Алк. 4,5% пл. 12% с. Новая Усмань
                </div>
              </div>
              <div className="column__price">141</div>
              <div className="column__promo">1+1=3</div>
            </div>
          </div>
        ))}
        <div className="group">
          <div className="info__wrapper">
            <div className="column__name">Светлое нефильтрованное</div>
            <div className="column__name">Цена</div>
            <div className="column__name">Акция</div>
          </div>
          <div className="product">
            <div className="column__info">
              <div className="product__name">Три быка Драфт</div>
              <div className="product__info">
                Алк. 4,5% пл. 12% с. Новая Усмань
              </div>
            </div>
            <div className="column__price">141</div>
            <div className="column__promo">1+1=3</div>
          </div>
        </div>
        <ProductGroup></ProductGroup>
        <ProductGroup></ProductGroup>
        <ProductGroup></ProductGroup>
      </div>
    </>
  );
};
