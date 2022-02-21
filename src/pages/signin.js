import toastr from "toastr";
import "toastr/build/toastr.css";
import { signin, signup } from "../api/users";

const Signin = {
  async render() {
    return /* html */ `
    <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
      <a href="/">        <img
      class="mx-auto h-12 w-auto"
      src="https://res.cloudinary.com/assignment22/image/upload/v1645160974/img/logo_ptlu8j.png"
      alt="Workflow"
    /></a>

        
        <h2 class="mt-6 text-center text-3xl font-extrabold uppercase text-gray-900">
          Đăng nhập
        </h2>
      </div>
      <form class="mt-8 space-y-6" id="formSignin" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Mật khẩu"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              for="remember-me"
              class="ml-2 block text-sm text-gray-900"
            >
              Nhớ tài khoản
            </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Quên mật khẩu?
            </a>
          </div>
        </div>

        <div>
          <button
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Đăng nhập
          </button>
        </div>
        <p class="mt-2 text-center text-sm text-gray-600">
        Bạn chưa có tài khoản?
        <a href="/signup" class="font-medium text-indigo-600 hover:text-indigo-500"> Đăng ký </a>
      </p>
      </form>
    </div>
  </div>
        `;
  },
  afterRender() {
    const formSignin = document.querySelector("#formSignin");
    formSignin.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        // call api
        const { data } = await signin({
          email: document.querySelector("#email").value,
          password: document.querySelector("#password").value,
        });
        if (data) {
          localStorage.setItem("user", JSON.stringify(data.user));
          toastr.success("Login successfully!");
          setTimeout(() => {
            if (data.user.id === 1) {
              document.location.href = "/admin";
            } else {
              document.location.href = "/";
            }
          }, 2000);
        }
      } catch (error) {
        console.log(error.response.data);
      }
    });
  },
};
export default Signin;
