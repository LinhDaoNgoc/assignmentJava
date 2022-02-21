import axios from "axios";
import { add } from "../../../api/posts";
import NavAdmin from "../../../components/NavAdmin";
import $ from "jquery";
import validate from "jquery-validation";

const AdminNewsAddPage = {
  render() {
    return /* html */ `
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2
                    class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                    >
                    Thêm bài viết
                    </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <a href="/admin/news" class="sm:ml-3">
                        <button
                            type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <!-- Heroicon name: solid/check -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Quay lại
                        </button>
                    </a>
                </div>
                </div>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <form action="" id="form-add-post">
                    
                    
                    <input type="text" 
                        placeholder="Tieu de bai viet" 
                        class="border border-black" 
                        id="title-post"
                        name="title-post"
                    >
                    <div class="grid grid-cols-2 gap-8">
                        <div>
                            <input type="file"  
                                class="border border-black"
                                id="img-post"
                            >
                        </div>
                        <div><img width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png" id="previewImage" /></div>
                    </div>
                    <textarea name="" 
                            id="desc-post" 
                            cols="30" 
                            rows="10" 
                            class="border border-black"
                    ></textarea>
                    <button>Them</button>
                </form>
            </div>
            </main>
        </div>
        `;
  },
  afterRender() {
    const imgPost = document.querySelector("#img-post");
    const imgPreview = document.querySelector("#previewImage");

    imgPost.addEventListener("change", (e) => {
      imgPreview.src = URL.createObjectURL(imgPost.files[0]);
    });
    $("#form-add-post").validate({
      rules: {
        "title-post": "required",
      },
      messages: {
        "title-post": "Nhập tiêu đề anh ei",
      },

      submitHandler: async (form) => {
        const file = imgPost.files[0];
        const formData = new FormData();

        formData.append("file", file);
        formData.append("upload_preset", "jkbdphzy");

        const { data } = await axios({
          url: "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-formendcoded",
          },
          data: formData,
        });
        add({
          title: document.querySelector("#title-post").value,
          img: data.url,
          desc: document.querySelector("#desc-post").value,
        })
          .then((result) => console.log(result.data))
          .catch((error) => console.log(error));

        form.reset();
      },
    });
  },
};
export default AdminNewsAddPage;
