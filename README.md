# ProductCard package

This is a simple package for testing

### Alejandro Oliva

## Ejemplo

```
import {
  ProductCard,
  ProductTitle,
  ProductImage,
  ProductButtons,
} from 'do-product-card';

const product = {
  id: '1',
  title: 'Coffe Mug 1',
  // img: './coffee-mug.png',
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <ProductCard
        product={product}
        initialValues={{
          quantity: 6,
          maxQuantity: 10,
        }}
      >
        {({
          reset,
          counter,
          isMaxQuantityReached,
          maxQuantity,
          increaseBy,
        }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;

```
