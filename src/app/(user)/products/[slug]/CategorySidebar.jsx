import ProductsFilter from "../ProductsFilter";
import ProductSort from "../ProductSort";

function CategorySidebar({ categories }) {
  return (
    <div className="col-span-1">
      <ProductsFilter categories={categories} />
      <ProductSort />
    </div>
  );
}

export default CategorySidebar;
