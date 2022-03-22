<template>
  <div class="natProducts">
    <div class="natProducts-container">
      <h1>Nuestros Productos</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div
          class="col"
          :key="natprod.productId"
          v-for="natprod in nationalProds"
        >
          <button
            type="button"
            class="btn btn-light position-relative"
            v-if="this.type"
          >
            <div class="card text-center" style="width: 18rem">
              <img :src="natprod.picture" class="card-img-top" alt="..." />
              <div class="card-body">
                <div
                  class="alert alert-secondary"
                  style="width: 18rem"
                  role="alert"
                  v-bind:value="natprod.productId"
                  v-if="soldOut"
                >
                  Agotado
                </div>
                <div class="row">
                  <div class="col-sm-8">
                    <h5 class="card-title">{{ natprod.name }}</h5>
                  </div>
                  <div class="col-sm-4">
                    <button
                      type="button"
                      class="btn btn-outline-secondary"
                      v-on:click="shoopingActions(natprod)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="black"
                        class="bi bi-cart-plus-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"
                        ></path>
                      </svg>
                      <span class="visually-hidden">Button</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div
      class="alert alert-success alert-dismissible fade show"
      role="alert"
      v-on:click="this.onShoopingCart = false"
      v-if="onShoopingCart"
    >
      Tu <strong>producto</strong> fue añadido al <strong>carrito</strong>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NationalProd",
  data: function () {
    return {
      nationalProds: [],
      products: [],
      categories: [],
      type: "false",
      shoopingCart: [],
      onShoopingCart: false,
      soldOut: false,
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
            return product.categoryId == "6902fbf6-e476-4655-ad9d-28ce652a7176";
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
    checkAvailable: function (e) {
      for (var i = 0; i <= e.length; i++) {}
    },
    shoopingActions: function (e) {
      if (this.shoopingCart.push(e)) {
        this.onShoopingCart = true;
      }
      this.$emit("dataEmitToChild", this.shoopingCart);
    },
  },
  created: function () {
    this.listProducts();
    this.listCategories();
  },
};
</script>

<style>
.natProducts {
  margin: 0;
  padding: 110px 30px;
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
.natProducts h1 {
  color: white;
  margin: 30px;
}
.natProducts-container {
  margin-top: 100px;
  height: max-content;
}
.natProducts-container .btn-light {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  height: 295px;
}
.natProducts-container .card-img-top {
  height: 200px;
  object-fit: cover;
}
.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}
.alert.alert-secondary {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 0rem;
}
.alert.alert-success.alert-dismissible.fade.show {
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
  position: absolute;
  right: 0;
  margin-top: 110px;
}
</style>