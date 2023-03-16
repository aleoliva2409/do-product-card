import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffe Mug 1',
  // img: './coffee-mug.png',
};

const App = () => {
  return (
    <ProductCard
      product={product}
      initialValues={{
        quantity: 6,
        maxQuantity: 10,
      }}
    >
      {({ reset, counter, isMaxQuantityReached, maxQuantity, increaseBy }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
