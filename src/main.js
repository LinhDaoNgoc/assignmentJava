import Navigo from "navigo";
import DashboardPage from "./pages/admin/dashboard";
import ProductsAdminPage from "./pages/Admin/products";
import ProductAdd from "./pages/Admin/products/productAdd";
import ProductEdit from "./pages/Admin/products/productUpdate";
import CartPage from "./pages/cart";
import HomePage from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import productList from "./components/productList";
import detail from "./pages/detail";
// import AccountsAdminPage from "./page/Admin/users";
// import UserAdd from "./page/Admin/users/userAdd";
// import UserEdit from "./page/Admin/users/userEdit";
const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
  document.getElementById("app").innerHTML = await content.render(id);
  if (content.afterRender) content.afterRender(id);
};
// router.on("/admin/*", () => {}, {
//   before(done, match) {
//     if (JSON.parse(localStorage.getItem("user"))) {
//       const id = JSON.parse(localStorage.getItem("user")).id;
//       if (id == 1) {
//         done();
//       } else {
//         document.location.href = "/";
//       }
//     } else {
//       document.location.href = "/";
//     }
//   },
// });
router.on({
  "/": () => print(HomePage),
  "/admin": () => {
    print(DashboardPage);
  },
  "/admin/dashboard": () => {
    print(DashboardPage);
  },
  "/admin/products": () => {
    print(ProductsAdminPage);
  },
  "/admin/products/add": () => print(ProductAdd),
  "/admin/products/:id/edit": (value) => print(ProductEdit, value.data.id),
  // "/news/:id": (value) => print(DetailNewsPage, value.data.id),
  // "/admin/news": () => print(AdminNewsPage),
  // "/admin/news/:id/edit": ({ data }) => print(AdminEditPost, data.id),
  // "/admin/news/add": () => print(AdminNewsAddPage),
  "/signup": () => print(Signup),
  "/signin": () => print(Signin),
  "/cart": () => print(CartPage),
  "/products": () => print(productList),
  "/detail/:id": ({ data }) => print(detail, data.id),
  // "/admin/users": () => render(AccountsAdminPage),
  // "/admin/users/add": () => render(UserAdd),
  // "/admin/users/:id/edit": (value) => render(UserEdit, value.data.id),
});

router.resolve();
