import Footer from "../components/footer";
import Header from "../components/header";
import ProductList from "../components/productList";
import Slider from "../components/slider";

const HomePage = {
  render() {
    return /* html */ `
    ${Header.render()}
    ${Slider.render()}
    ${ProductList.render()}
    ${Footer.render()}`;
  },
  afterRender() {
    Slider.afterRender();
    Header.afterRender();
  },
};
export default HomePage;
