import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation";
import Home from "./Routes/Home/Home";
import SignIn from "./Routes/SignIn/SignIn";



const Shop = () => {
  return <h1>I am the Shop Page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="SignIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
