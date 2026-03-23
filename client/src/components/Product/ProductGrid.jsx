import ProductCard from "../common/ProductCard";

const ProductGrid = () => {
  return (
    <div className="w-220.25">
      <div className="grid grid-cols-3 gap-5.25">
        {Array.from({ length: 9 }).map((r, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;