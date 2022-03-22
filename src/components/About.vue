<template>
  <div class="about">
    <div class="container">
      <h1 class="text-center">NOSOTROS</h1>
      <br />
      <div class="row">
        <div class="col-6">
          <p class="text paragraph">
            Supermercados La Huerta es una empresa que se encuentra en la ciudad
            de Duitama, Boyacá desde el 13 de marzo de 2003, desde entonces se
            ha destacado por ser una empresa líder en la comercialización de
            Frutas y Verduras frescas por mayor y al detal, ofreciendo un
            excelente servicio y el mejor precio, comprometidos con la
            responsabilidad social. Supermercados La Huerta cuenta con dos
            sucursales en la cuidad de Duitama, siendo reconocido como una
            empresa que presta un gran servicio, frescura y calidad por lo cual
            es reconocida por distribuir sus productos a diferentes empresas en
            Duitama, Paipa, Sogamoso y Sotaquira.
          </p>
        </div>
        <div class="col-6">
          <img
            src="../assets/about_us.jpg"
            class="img-fluid rounded about-img"
          />
        </div>
      </div>
      <br /><br />
      <div class="row">
        <div class="col-6">
          <img
            src="../assets/about_us_mision.jpg"
            class="img-fluid rounded"
            alt="..."
          />
        </div>
        <div class="col-6">
          <h4 class="text-center">MISION</h4>
          <p class="text paragraph">
            Somos una empresa Duitamense líder en la comercialización de Frutas
            y Verduras frescas, dedicada a mejorar la calidad de vida de
            nuestros clientes, ofreciendo un excelente servicio y el mejor
            precio, comprometidos con la Responsabilidad Social.
          </p>
        </div>
      </div>
      <br /><br />
      <div class="row">
        <div class="col-6">
          <h4 class="text-center">VISION</h4>
          <p class="text paragraph">
            En el 2020 seremos la cadena de Supermercados líder en Duitama y
            Paipa, reconocidos por el servicio, frescura, calidad y precios de
            nuestros productos, generando el progreso y bienestar a nuestros
            clientes y colaboradores.
          </p>
        </div>
        <div class="col-6">
          <img src="../assets/about_us_vision.jpg" class="img-fluid rounded" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.about {
  color: white;
  margin: 0;
  padding: 0 100px;
  padding-bottom: 100px;
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url("../assets/about_background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  align-content: flex-start;
}
.container {
  padding-top: 130px;
}
.paragraph {
  text-align: justify;
}
.about-img {
  display: flex;
}
</style>