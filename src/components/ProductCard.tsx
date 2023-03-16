import React, { CSSProperties } from 'react';
import styles from '../styles/styles.module.css';
import useProduct from '../hooks/useProduct';
import ProductContext from '../context/ProductContext';
import {
  Product,
  onChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from '../interfaces/interfaces';

interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[]; //? uno o varios componentes hijos
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxQuantity, reset, isMaxQuantityReached } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <ProductContext.Provider
      value={{ counter, increaseBy, product, maxQuantity }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          counter,
          isMaxQuantityReached,
          reset,
          increaseBy,
          maxQuantity,
          product,
        })}
      </div>
    </ProductContext.Provider>
  );
};

export default ProductCard;
