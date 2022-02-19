import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";

const Slider = {
  render() {
    return /* html */ `
      <div
        class="slider w-[1200px] mx-auto z-10 top-[40%] left-0 right-0"
      >
        <div class="slider-item">
          <h2 class="text-white font-bold text-5xl pb-5">
            Fast Food Restaurant
          </h2>
          <p class="text-white w-[555px] pb-5">
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </p>
          <button
            class="px-11 py-3 rounded-3xl bg-[#ffbe33] text-white hover:bg-[#e69c00] ease-in-out duration-300"
          >
            Order Now
          </button>
        </div>
        <!-- End slider-item -->
        <div class="slider-item">
          <h2 class="text-white font-bold text-5xl pb-5">
            Fast Food Restaurant
          </h2>
          <p class="text-white w-[555px] pb-5">
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </p>
          <button
            class="px-11 py-3 rounded-3xl bg-[#ffbe33] text-white hover:bg-[#e69c00] ease-in-out duration-300"
          >
            Order Now
          </button>
        </div>
        <!-- End slider-item -->
        <div class="slider-item">
          <h2 class="text-white font-bold text-5xl pb-5">
            Fast Food Restaurant
          </h2>
          <p class="text-white w-[555px] pb-5">
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </p>
          <button
            class="px-11 py-3 rounded-3xl bg-[#ffbe33] text-white hover:bg-[#e69c00] ease-in-out duration-300"
          >
            Order Now
          </button>
        </div>
        <!-- End slider-item -->
      </div>
          `;
  },
  afterRender() {
    $(document).ready(function () {
      $(".slider").slick({
        slidesToShow: 1,
        sliderToScroll: 1,
        infinite: true,
        draggable: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
        dots: true,
      });
    });
  },
};
export default Slider;
