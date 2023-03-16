import { useEffect, useRef, useState } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(
    initialValues?.quantity || value
  );
  const isMounted = useRef(false);

  const increaseBy = (val: number) => {
    let newValue = Math.max(counter + val, 0);
    if (initialValues?.maxQuantity) {
      newValue = Math.min(newValue, initialValues.maxQuantity);
    }

    setCounter(newValue);
    onChange && onChange({ quantity: newValue, product });

    // setCounter((prev) => Math.max(prev + val, 0));

    // onChange && onChange({ product: { ...product }, quantity: counter }); // ? otra sintaxis
    // onChange?.({ product: { ...product }, quantity: counter });
  };

  const reset = () => {
    setCounter(initialValues?.quantity || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return {
    counter,
    increaseBy,
    maxQuantity: initialValues?.maxQuantity,
    isMaxQuantityReached:
      !!initialValues?.quantity && initialValues.maxQuantity === counter,
    reset,
  };
};

export default useProduct;
