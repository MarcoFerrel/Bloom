import { Outlet } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import CategoryData from "/Users/marcoferrel/Desktop/Bloom/src/data/CategoryData.json";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Categories categories={CategoryData}></Categories>;
    </div>
  );
};

export default Home;
