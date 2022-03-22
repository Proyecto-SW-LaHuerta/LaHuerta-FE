<template>
  <div class="inventory">
    <h1>INVENTARIO</h1>
    <br />
    <div class="table-responsive">
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col" class="text-center">Nombre</th>
            <th scope="col" class="text-center">Precio (lb)</th>
            <th scope="col" class="text-center">Impuesto</th>
            <th scope="col" class="text-center">Stock</th>
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
  name: "Inventory",
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
.inventory {
  color: white;
  margin: 0;
  padding: 130px 35px;
  padding-bottom: 70px;
  height: 100%;
  width: 100%;
  position: fixed;
  display: block;
  background-image: url("../assets/inventory_background.jpg");
  justify-content: center;
  align-items: flex-start;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  align-content: flex-start;
}
.inventory h1 {
  margin-top: 20px;
  text-align: center;
}
.container_inventory {
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