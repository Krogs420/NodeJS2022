<script>
  let mail = "";
  let password = "";

  async function checkEmailAndPas() {
    const url = "http://localhost:8081/api/users/login";
    const user = { mail: mail, password: password };
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (response.ok) {
        window.location.replace("/")
      console.log("You got it brother man");
      mail = "";
      password = "";
    }
  }
</script>

<body>
  <div class="background-image">
    <div class="header">
      <h1>Login</h1>
    </div>
    <div class="container">
      <form>
        <input type="email" bind:value={mail} name="email" />

        <input type="password" bind:value={password} name="password" />

        <button on:click={checkEmailAndPas} type="button">Login</button>
      </form>
    </div>
  </div>
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
    -webkit-text-stroke: 1px white;
    font-family: "ninjanaruto", sans-serif;
  }

  .container {
      margin: auto;
      width: 50%;
      border: 3px solid green;
      padding: 10px;
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
