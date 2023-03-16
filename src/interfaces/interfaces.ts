export interface IProductContext {
  product: Product;
  counter: number;
  maxQuantity?: number;

  increaseBy: (val: number) => void;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface onChangeArgs {
  product: Product;
  quantity: number;
}

export interface ProductInCart extends Product {
  quantity: number;
}

export interface ShoppingCart {
  [key: string]: ProductInCart;
}

export interface InitialValues {
  quantity?: number;
  maxQuantity?: number;
}

export interface ProductCardHandlers {
  counter: number;
  isMaxQuantityReached: boolean;
  maxQuantity?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}
