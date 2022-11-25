<script>
  let mail = "";

  async function sendEmail() {
    const url = "http://localhost:8081/mail";

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({mail}),
    });
  }
</script>



<body>
    <div class="header">
      <h1>Naruto</h1>
    </div>
    <div class="background-image">
        <div class="container">
            <form>
                <button on:click={sendEmail} type="button">Send mail</button>
                <input type="email" bind:value={mail} name="email" />
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

    input{
	width: 60%;
	height: 20px;
	background: #e0dede;
	justify-content: center;
	display: flex;
	margin: 20px auto;
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 5px;
}

    button {
    -webkit-text-stroke: 0.1px white;
    font-family: "ninjanaruto", sans-serif;
	width: 20%;
	height: 40px;
	margin: 10px auto;
	justify-content: center;
	display: block;
	color: black;
	background: #0c2fdf;
	font-size: 1em;
	font-weight: bold;
	margin-top: 20px;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;
}
  </style>
