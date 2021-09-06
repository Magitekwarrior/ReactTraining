import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Product 1",
    description: "Prod 1 description",
    price: 6,
  },
  {
    id: "p2",
    title: "Product 2",
    description: "Prod 2 description",
    price: 23,
  },
  {
    id: "p3",
    title: "Product 3",
    description: "Prod 3 description",
    price: 65,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
          ))}
      </ul>
    </section>
  );
};

export default Products;
