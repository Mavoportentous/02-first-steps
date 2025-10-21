import { ItemCounter } from "./shopping-cart/ItemCounter";
interface ItemInCart {
  productName: string;
  quantity: number;

}

const itemsInCart: ItemInCart[] = [
  { productName: 'Nintendo Switch 2', quantity: 1 },
  { productName: 'Pro Controller', quantity: 2 },
  { productName: 'Super Smash', quantity: 5 }
]
export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {
        itemsInCart.map(({ productName, quantity }) => (
          <ItemCounter key={productName} nameProduct={productName} quantity={quantity} />
        ))
      }
      {/* <ItemCounter nameProduct="Xbox 360" quantity={10} />
      <ItemCounter nameProduct="Control inalambrico" quantity={10} />
      <ItemCounter nameProduct="Fifa 2026" quantity={10} /> */}
    </>
  );
}