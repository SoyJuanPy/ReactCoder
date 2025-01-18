import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Layout>
      <Link to="/cart">
        <button className="cursor-pointer">Cart</button>
      </Link>
    </Layout>
  );
};
export default Cart;
