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

<div class="container">
  <form>
    <input type="email" bind:value={mail} name="email" />

    <button on:click={sendEmail} type="button">Send mail</button>
  </form>
</div>
