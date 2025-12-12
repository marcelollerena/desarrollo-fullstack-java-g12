import { Home, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex px-4 items-center justify-between h-16 bg-red-500 text-white">
      <Link to={"/"}>
        <Home />
      </Link>

      <div className="flex items-center gap-4">
        <Link to={"/products"}>Tienda</Link>
        <button className="cursor-pointer">
          <ShoppingCart />
        </button>
      </div>
    </div>
  );
};
