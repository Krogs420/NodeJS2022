<script>
  async function getNaruto() {
    const res = await fetch(`https://naruto-details.herokuapp.com/clan`);
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      return data;
    } else {
      throw new Error(data);
    }
  }

  let promise = getNaruto();
</script>

<body>
  <div class="header">
    <h1>Naruto</h1>
  </div>
  <div class="background-image">
    <div class="container" />
  </div>

  {#await promise}
    <p>Here comes Naruto</p>
  {:then data}
    <div />
  {/await}
</body>

<style>
  @font-face {
    font-family: "ninjanaruto";
    src: url(../../../public/njnaruto.ttf);
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: "ninjanaruto", sans-serif;
  }

  .container {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .background-image {
    background-image: url("../public/NarutoBackground.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
  }

  .header {
    background-color: orange;
    padding: 10px 0px;
    text-align: center;
    justify-content: center;
  }
</style>
