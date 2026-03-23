import ProductCard from "../common/ProductCard";

const StoreGrid = () => {
  return (
    <div className="w-296 pt-5">
      <div className="grid grid-cols-4 gap-5.25">
        {Array.from({ length: 12 }).map((r, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default StoreGrid;