import Footer from "../components/footer";
import Header from "../components/header";
import ProductList from "../components/productList";
import Slider from "../components/slider";

const HomePage = {
  async render() {
    return /* html */ `
    <header id="header"> ${Header.render()}</header>
   
    ${Slider.render()}
    ${await ProductList.render()}
    ${Footer.render()}`;
  },
  afterRender() {
    Slider.afterRender();
    Header.afterRender();
  },
};
export default HomePage;
