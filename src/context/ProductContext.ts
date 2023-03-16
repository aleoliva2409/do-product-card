import { createContext } from 'react';
import { IProductContext } from '../interfaces/interfaces';

const ProductContext = createContext({} as IProductContext);

export default ProductContext;
