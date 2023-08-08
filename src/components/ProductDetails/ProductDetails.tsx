/* eslint-disable max-len */
import classNames from 'classnames';
import { FC, useState } from 'react';
// import { useProductsContext } from '../../contexts/ProductsContext/useProductsContext';
// import { findItemById } from '../../helpers/findItemById';
import { colorCodes } from '../../helpers/constants/colorCodes';
import { ProductInfo } from '../../types/Product';
// import { Icon } from '../Icon';
import './Flex__Container.scss';
import './ProductDetails.scss';

interface Props {
  product: ProductInfo;
}

export const ProductDetails: FC<Props> = ({ product }) => {
  const [selectedCapacity, setSelectedCapacity] = useState(product.capacity);
  const [selectedColor, setSelectedColor] = useState(product.color);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [animateImage, setAnimateImage] = useState(true);

  // const {
  //   addProductToCart,
  //   toggleLikeProduct,
  // } = useProductsContext();

  // const hasItemInCart = Boolean(findItemById(cart, product.id));
  // const isLiked = Boolean(findItemById(likedProducts, product.id));

  // const likeButtonIcon = isLiked ? 'like-filled' : 'like';

  const handleCapacityClick = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setAnimateImage(true);
  };

  const handleAnimationEnd = () => {
    setAnimateImage(false);
  };

  return (
    <article className="product">
      <h1 className="product__title">{product.name}</h1>

      <div className="flex">
        <div className="flex__container">
          <div className="flex__container-image product__img-container">
            <img
              onAnimationEnd={handleAnimationEnd}
              className={classNames('product__img', { 'product__img-animated': animateImage })}
              src={`https://apple-catalog-api.onrender.com/${product.images[selectedImageIndex]}`}
              alt={`Product ${selectedImageIndex + 1}`}
            />
          </div>

          <div className="product__image-selector flex__container-selector--photo">
            <div className="product__image-selector--container">
              <ul className="product__image-selector--list">
                {product.images.map(
                  (image: string, index: number) => (
                    <li
                      key={`image-${index}`}
                      className="product__image-selector--item">
                      <button
                        className={classNames('product__image-selector--photo-button', {
                          'product__image-selector--photo-button--active': selectedImageIndex === index,
                        })}
                        onClick={() => handleImageClick(index)}
                      >
                        <img
                          className="product__image-selector--photo"
                          src={`https://apple-catalog-api.onrender.com/${image}`}
                          alt={`Product ${index + 1}`}
                        />
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="product__details-selector flex__container-selector--details">
            <div className="product__details-selector--container">
              <div className="product__details-selector--titleContainer">
                <span
                  className="product__details-selector--title"
                >
                  Available colors
                </span>
                <span
                  className="product__details-selector--title product__details-selector--title-ID"
                >
                  ID:{product.itemId}
                </span>
              </div>
              <ul className="product__details-selector--list">
                {product.colorsAvailable.map((color, index) => (
                  <li
                    key={`color-${index}`}
                    className="product__details-selector--item">
                    <div className={classNames('product__details-selector--item-button', {
                      'product__details-selector--item-button--active': selectedColor === color,
                    })}
                    >
                      <button
                        className="product__details-selector--color-button"
                        onClick={() => handleColorClick(color)}
                        style={{ backgroundColor: colorCodes[color] }}
                      >
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="decorative-line"></div>

            <div className="product__details-selector">
              <div className="product__details-selector--container">
                <div className="product__details-selector--titleContainer">
                  <span className="product__details-selector--title">
                    Available capacities
                  </span>
                </div>
                <ul className="product__details-selector--list">
                  {product.capacityAvailable.map((capacity: string, index: number) => (
                    <li
                      key={`capacity-${index}`}
                      className="product__details-selector--item"
                    >
                      <button
                        className={classNames('product__details-selector--capacity-button', {
                          'product__details-selector--capacity-button--active': selectedCapacity === capacity,
                        })}
                        onClick={() => handleCapacityClick(capacity)}
                      >
                        {capacity}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="decorative-line"></div>

            <section className="Card__prices">
              <h2 className="Card__current-price">
                {product.price}
              </h2>

              <h2 className="Card__previous-price">
                {product.fullPrice}
              </h2>
            </section>

            {/* <section className="Card__actions product__section-actions">
              {hasItemInCart
                ? (
                  <button
                    className="Card__actions-button Card__actions-button--added"
                  >
                    Added to cart
                  </button>
                )
                : (
                  <button
                    className="Card__actions-button Card__actions-button--add"
                  >
                    Add to cart
                  </button>
                )}

              <button
                className="Card__actions-button Card__actions-button--like"
              >
                <Icon size={40} type={likeButtonIcon} />
              </button>
            </section> */}

            <section className="product__section-techspechs">
              <ul className="Card__list-specifications">
                <li className="Card__item-specification">
                  <p className="Card__item-title-specification">
                    Screen
                  </p>

                  <span className="Card__item-value-specification">
                    {product.screen}
                  </span>
                </li>

                <li className="Card__item-specification">
                  <p className="Card__item-title-specification">
                    Resolution
                  </p>

                  <span className="Card__item-value-specification">
                    {product.resolution}
                  </span>
                </li>

                <li className="Card__item-specification">
                  <p className="Card__item-title-specification">
                    Processor
                  </p>

                  <span className="Card__item-value-specification">
                    {product.processor}
                  </span>
                </li>

                <li className="Card__item-specification">
                  <p className="Card__item-title-specification">
                    RAM
                  </p>

                  <span className="Card__item-value-specification">
                    {product.ram}
                  </span>
                </li>
              </ul>
            </section>
          </div>
          <span
            className="product__details-selector--title flex__container-ID"
          >
            ID: {product.itemId}
          </span>
        </div>
      </div>
    </article>
  );
};
