import { signup } from "../api/users";

const Signup = {
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
          Đăng Ký
        </h2>
      </div>
      <form class="mt-8 space-y-6" id="formSignup" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
        <div>
        <label for="userName" class="sr-only">userName</label>
        <input
          id="userName"
          name="userName"
          type="userName"
          autocomplete="userName"
          required
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Tên tài khoản"
        />
      </div>
          <div>
            <label for="email" class="sr-only">Email</label>
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



        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Đăng ký
          </button>
        </div>
        <p class="mt-2 text-center text-sm text-gray-600">
        Bạn đã có tài khoản?
        <a href="/signin" class="font-medium text-indigo-600 hover:text-indigo-500"> Đăng nhập </a>
      </p>
      </form>
    </div>
  </div>
        `;
  },
  afterRender() {
    const formSignup = document.querySelector("#formSignup");
    formSignup.addEventListener("submit", (e) => {
      e.preventDefault();
      // call api
      signup({
        username: document.querySelector("#userName").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
      });
      window.location.href = "/signin";
      // thông báo bạn đăng nhập thành công....
    });
  },
};
export default Signup;
