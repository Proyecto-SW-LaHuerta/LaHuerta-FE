<template>
  <div class="impProducts">
    <div class="impProducts-container">
      <h1>Nuestros Productos</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div
          class="col"
          :key="natprod.productId"
          v-for="natprod in nationalProds"
        >
          <button type="button" class="btn btn-light" v-if="this.type">
            <div class="card text-center" style="width: 18rem">
              <img :src="natprod.picture" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{{ natprod.name }}</h5>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data: function () {
    return {
      nationalProds: [],
      products: [],
      categories: [],
      type: "false",
    };
  },
  methods: {
    listProducts: function () {
      let url = "https://la-huerta-be.herokuapp.com/products/";
      let config = { headers: {} };
      axios
        .get(url, config)
        .then((res) => {
          this.products = res.data;
          var results = this.products.filter(function (product) {
            return product.categoryId == "12ec016c-6232-4cc2-8f62-4192eee79a56";
          });
          results.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });
          this.nationalProds = results;
        })
        .catch((err) => {
          console.log(err);
        });
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
  },
  created: function () {
    this.listProducts();
    this.listCategories();
  },
};
</script>

<style>
.impProducts {
  margin: 0;
  padding: 110px 20px;
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("./media/products_background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  align-content: flex-start;
}
.impProducts h1 {
  color: white;
  margin: 30px;
}
.impProducts-container {
  margin-top: 96px;
  height: max-content;
}
.impProducts-container .btn-light {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  height: 295px;
}
.impProducts-container .card-img-top {
  height: 200px;
  object-fit: cover;
}
.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}
</style>