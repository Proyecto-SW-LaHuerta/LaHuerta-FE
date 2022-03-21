<template>
  <div class="productCrud">
    <h1>CRUD Productos</h1>
    <div class="container_crud_product">
      <form
        class="row g-3"
        id="form"
        enctype="multipart/form-data"
        v-on:submit.prevent="createProduct"
      >
        <div class="row align-items-center">
          <div class="col">
            <div class="card text-center">
              <img
                v-if="imagePreview"
                class="card-img-top"
                :src="imagePreview"
              />
            </div>
            <div class="mb-3">
              <input
                class="form-control"
                type="file"
                @change="onFileChange"
                ref="file"
              />
            </div>
          </div>
          <div class="col">
            <div class="row">
              <div class="col">
                <label class="form-label">Nombre</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="product.name"
                  required
                />
              </div>
              <div class="col">
                <label for="inputAddress" class="form-label">Categoria</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="product.categoryId"
                >
                  <option
                    :key="category.categoryId"
                    v-for="category in categories"
                    v-bind:value="category.categoryId"
                  >
                    {{ category.categoryType }}
                  </option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label class="form-label">Impuesto</label>
                <input
                  class="form-control"
                  type="number"
                  v-model="product.tax"
                  required
                />
              </div>
              <div class="col">
                <label class="form-label">Precio (lb)</label>
                <input
                  class="form-control"
                  type="number"
                  v-model="product.price"
                  required
                />
              </div>
              <div class="col">
                <label class="form-label">Stock</label>
                <input
                  class="form-control"
                  type="number"
                  v-model="product.stock"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-success" type="submit">
            Agregar Producto
          </button>
        </div>
      </form>
    </div>

    <div class="table-responsive">
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col" class="text-center">Nombre</th>
            <th scope="col" class="text-center">Precio (lb)</th>
            <th scope="col" class="text-center">Impuesto</th>
            <th scope="col" class="text-center">Stock</th>
            <th scope="col" class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="prods.productId" v-for="prods in products">
            <td class="text-center">
              {{ prods.name }}
            </td>
            <td class="text-center">
              {{ prods.price }}
            </td>
            <td class="text-center">
              {{ prods.tax }}
            </td>
            <td class="text-center">
              {{ prods.stock }}
            </td>
            <td class="text-center">
              <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" class="btn btn-warning">
                  <i class="bi bi-pencil-fill"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  v-on:click="deleteProduct(prods.productId)"
                >
                  <i class="bi bi-trash-fill"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

var loads = [];
export default {
  name: "UserCrud",
  data: function () {
    return {
      categories: [],
      products: [],
      product: {
        name: "",
        tax: "",
        price: "",
        stock: "",
        categoryId: "",
        picture: "",
      },
      imagePreview: null,
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.imagePreview = URL.createObjectURL(file);
      var files = e.target.files;
      for (var i = 0, len = files.length; i < len; i++) {
        var filer = files[i];
        var reader = new FileReader();
        reader.onload = (function (f) {
          return function (e) {
            loads.push({
              data: this.result.split(",")[1],
            });
          };
        })(filer);
        reader.readAsDataURL(filer);
      }
    },
    createProduct: async function () {
      try {
        this.product.picture = loads[0].data;
        let url = "https://la-huerta-be.herokuapp.com/products/";
        let body = this.product;
        let config = {
          headers: {},
        };
        let result = await axios.post(url, body, config);
        this.listProducts();
      } catch (err) {
        alert("Error, algo inespeado sucedio");
      }
    },
    deleteProduct: async function (id) {
      try {
        let url = "https://la-huerta-be.herokuapp.com/product/" + id + "/";
        let config = { headers: {} };
        await axios.delete(url, config);
        this.listProducts();
      } catch (error) {
        console.log(error);
      }
    },
    listCategories: function (e) {
      let url = "https://la-huerta-be.herokuapp.com/categories/";
      let config = {
        headers: {},
      };
      axios
        .get(url, config)
        .then((res) => {
          this.categories = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    listProducts: function () {
      let url = "https://la-huerta-be.herokuapp.com/products/";
      let config = { headers: {} };
      axios
        .get(url, config)
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created: function () {
    this.listProducts();
    this.listCategories();
  },
};
</script>

<style>
h1 {
  text-align: center;
}
.productCrud {
  color: white;
  margin: 0;
  padding: 120px 35px;
  padding-bottom: 70px;
  height: 100%;
  width: 100%;
  position: fixed;
  display: block;
  background-image: url("./media/products_background.jpg");
  justify-content: center;
  align-items: flex-start;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  align-content: flex-start;
}
.container_crud_product {
  margin: 30px 0;
  padding: 40px;
  background-color: rgba(19, 19, 19, 0.75);
  border-radius: 10px;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.crud-container {
  height: max-content;
}
</style>