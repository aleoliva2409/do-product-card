import React, { CSSProperties, useContext } from 'react';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import ProductContext from '../context/ProductContext';

interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  return (
    <img
      src={img ? img : product.img ? product.img : noImage}
      style={style}
      alt="coffe/noImage"
      className={`${styles.productImg} ${className}`}
    />
  );
};

export default ProductImage;
