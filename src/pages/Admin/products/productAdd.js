import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import ProductsAdminPage from ".";
import { addProduct } from "../../../api/products";
import NavAdmin from "../../../components/navAdmin";
import { reRender } from "../../../utils/rerender";

const ProductAdd = {
  render() {
    return /* html */ `
        ${NavAdmin.render()}
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 class="text-3xl font-bold text-gray-900">
            Thêm Sản Phẩm
          </h1>
          <a href="/admin/products" class="sm:ml-3">
          <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-[#ffbe33] text-white flex hover:bg-[#e69c00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
            Đóng 
          </button>
        </a>
        </div>
      </header>
        <div class="m-auto max-w-7xl pb-36 mt-5">
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" id="form-add-product" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                <label for="title" class="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <div class="mt-1">
                <input type="text" id="title-add-product" class="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2" placeholder="Title...">
                </div>
              </div>

                <div>
                  <label for="price" class="block text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <div class="mt-1">
                  <input type="text" id="price-add-product" class="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2" placeholder="Price...">
                  </div>
                </div>

                <div>
                <label for="desc" class="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <div class="mt-1">
                <input type="text" id="desc-add-product" class="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2" placeholder="Price...">
                </div>
              </div>
    
    
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Image
                  </label>
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div class="flex text-sm text-gray-600">
                          <input id="file-upload" name="file-upload" type="file">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-[#ffbe33] text-white flex hover:bg-[#e69c00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg class="-ml-1 mr-2 h-5 w-5" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Lưu 
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
        `;
  },
  afterRender() {
    const formAdd = document.querySelector("#form-add-product");
    const inputImgProduct = document.querySelector("#file-upload");
    const CLOUDINARY_API =
      "https://api.cloudinary.com/v1_1/assignmentjs/image/upload";
    const CLOUDINARY_PRESET = "imgproduct";

    formAdd.addEventListener("submit", async (e) => {
      e.preventDefault();
      const file = inputImgProduct.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_PRESET);

      const response = await axios.post(CLOUDINARY_API, formData, {
        headers: {
          "Content-Type": "application/form-data",
        },
      });
      try {
        const { data } = await addProduct({
          title: document.querySelector("#title-add-product").value,
          price: document.querySelector("#price-add-product").value,
          desc: document.querySelector("#desc-add-product").value,
          img: response.data.url,
        });
        if (data) {
          toastr.success("Add product successfully!");
          setTimeout(() => {
            document.location.href = "/admin/products";
            reRender(ProductsAdminPage, "#app");
          }, 2500);
        }
      } catch (error) {
        toastr.error(`Error: ${error.response.data}`);
      }
    });
  },
};
export default ProductAdd;
