import { reRender } from "../utils/rerender";

const Header = {
  render() {
    return /* html */ `
      <div class="banner relative w-full h-[730px]" id="Heddermain">
        <img
          class="w-full h-full object-cover"
          src="https://res.cloudinary.com/assignment22/image/upload/v1645160974/img/hero-bg_tdu0rj.jpg"
          alt=""
        />
      </div>
        <div
          class="w-[1200px] mt-7 mx-auto absolute flex justify-between top-0 left-0 right-0 z-10"
        >
          <div class="logo w-28">
            <img width="100%" src="https://res.cloudinary.com/assignment22/image/upload/v1645160974/img/logo_ptlu8j.png" alt="" />
          </div>
          <div class="menu">
            <ul class="mt-[25px]">
              <li class="inline-block mx-5">
                <a
                  class="text-white text-lg hover:text-[#ffbe33] ease-in-out duration-300"
                  href="/"
                  >Trang Chủ</a
                >
              </li>
              <li class="inline-block mx-5">
                <a
                  class="text-white text-lg hover:text-[#ffbe33] ease-in-out duration-300"
                  href="/products"
                  >Sản phẩm</a
                >
              </li>
              <li class="inline-block mx-5">
                <a
                  class="text-white text-lg hover:text-[#ffbe33] ease-in-out duration-300"
                  href="#"
                  >Tin Tức</a
                >
              </li>
              <li class="inline-block mx-5">
                <a
                  class="text-white text-lg hover:text-[#ffbe33] ease-in-out duration-300"
                  href="#"
                  >Liên Hệ</a
                >
              </li>
            </ul>
          </div>
          <div class="icon flex gap-3 mt-[25px]">
          // login
            <div class="login text-white hover:text-[#ffbe33] group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>

              <div
                class="in-up--sub absolute top-[70px] bg-white shadow-xl z-50 p-3 rounded-lg invisible ease-linear duration-300 w-60 right-[-96px] group-hover:visible before:absolute before:-top-2 before:left-10 before:w-5 before:h-5 before:bg-white before:rounded before:rotate-45 before:z-10 before:shadow-xl"
              >

              ${localStorage.getItem("user")
        ? /* HTML */ `
                      <div class="flex items-center pb-3 w-full">
                        <div class="ml-4">
                          <div class="text-sm text-gray-500">Xin chào !</div>
                          <div>
                            <span
                              class="user-name text-sm font-medium text-gray-900"
                            ></span>
                          </div>
                        </div>
                      </div>
                      <ul>
                        <li
                          class="rounded-lg text-black hover:bg-[#ffbe33] hover:text-white"
                        >
                          <a class="inline-block p-2" href="/admin"
                            >Trang quản trị</a
                          >
                        </li>
                        <li
                          class="logout rounded-lg text-black hover:bg-[#ffbe33] hover:text-white cursor-pointer"
                        >
                          <span class="inline-block p-2">Đăng xuất</span>
                        </li>
                      </ul>
                    `
        : `<ul>
                                <li class="rounded-lg text-black hover:bg-[#ffbe33] hover:text-white"><a class="inline-block p-2" href="/signin">Đăng nhập</a></li>
                                <li class="rounded-lg text-black hover:bg-[#ffbe33] hover:text-white"><a class="inline-block p-2" href="/signup">Đăng ký</a></li>
                               </ul>`
      }
              </div>



            </div>
            // end login
            <a href="/cart"> <div
              class="cart text-white hover:text-[#ffbe33] ease-in-out duration-300"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                />
              </svg>
            </div> </a>
            <div
              class="search text-white hover:text-[#ffbe33] ease-in-out duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="w-[1200px] mt-20 gap-10 grid mx-auto grid-cols-2">
          <div class="bg-[#222831] rounded-md flex gap-3 px-5 py-4 group">
            <div
              class="border-[5px] border-[#ffbe33] rounded-full overflow-hidden w-44 h-44"
            >
              <img
                class="group-hover:scale-110 ease-in-out duration-300"
                src="https://res.cloudinary.com/assignment22/image/upload/v1645243669/img/o1_d73adp.jpg"
                alt=""
              />
            </div>
            <div class="mt-3">
              <h3 class="text-white text-3xl pb-3">Tasty Thursdays</h3>
              <p class="text-white">
                <strong class="text-3xl">20%</strong
                ><span class="text-xl pl-1">off</span>
              </p>
              <button
                class="mt-3 px-11 py-3 rounded-3xl bg-[#ffbe33] text-white flex hover:bg-[#e69c00] ease-in-out duration-300"
              >
                Order Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
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

          <div class="bg-[#222831] rounded-md flex gap-3 px-5 py-4 group">
            <div
              class="border-[5px] border-[#ffbe33] rounded-full overflow-hidden w-44 h-44"
            >
              <img
                class="group-hover:scale-110 ease-in-out duration-300"
                src="https://res.cloudinary.com/assignment22/image/upload/v1645243669/img/o2_rrtyhz.jpg"
                alt=""
              />
            </div>
            <div class="mt-3">
              <h3 class="text-white text-3xl pb-3">Pizza Days</h3>
              <p class="text-white">
                <strong class="text-3xl">15%</strong
                ><span class="text-xl pl-1">off</span>
              </p>
              <button
                class="mt-3 px-11 py-3 rounded-3xl bg-[#ffbe33] text-white flex hover:bg-[#e69c00] ease-in-out duration-300"
              >
                Order Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
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
        `;
  },
  afterRender() {
    const userName = document.querySelector(".user-name");
    const logout = document.querySelector(".logout");
    if (localStorage.getItem("user")) {
      userName.innerHTML = JSON.parse(localStorage.getItem("user")).username;
      logout.addEventListener("click", () => {
        localStorage.removeItem("user");
        reRender(Header, "#header");
      });
    }
  },
};
export default Header;
