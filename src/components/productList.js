import { getAllProducts } from "../api/products";
const ProductList = {
  async render() {
    const { data } = await getAllProducts();
    return /* html */ `
 
      <main>
        <div class="w-[1200px] mt-20 mx-auto">
          <div>
            <h3 class="text-center text-3xl">Our Menu</h3>
          </div>
          <div class="grid grid-cols-3 gap-10">

          ${data
            .map(
              ({ img, title, desc, price, id }) => /* html */ `
          <div
          class="relative mt-6 rounded-2xl overflow-hidden bg-[#222831] group"
        >
          <div
            class="bg-[#f1f2f3] flex justify-center h-[215px] rounded-bl-[45px] p-6"
          >
           <a   href="/detail/${id}"> <img
          
              class="max-w-full max-h-[145px] mt-4 duration-200 group-hover:scale-110"
              src="${img}"
              alt=""
            />
            </a>
          </div>
          <div class="p-[25px]">
            <h3 class="font-semibold text-xl mb-2 text-white">
              ${title}
            </h3>
            <p class="text-base text-white">
              ${desc}S
            </p>
            <div class="flex justify-between mt-7">
              <span class="text-white">${price} $</span>
              <button
                class="text-white w-10 h-10 rounded-full bg-[#ffbe33] hover:bg-[#e69c00] ease-in-out duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mt-1 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
          `
            )
            .join("")}
          </div>
        </div>
      </main>
          `;
  },
};
export default ProductList;
