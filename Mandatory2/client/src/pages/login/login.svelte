<script>
    let mail = "";
    let password = "";

    async function checkEmailAndPas() {
        console.log("Badabing badabum it works")
        const url = 'http://localhost:8081/api/users/login';
        const user = {mail: mail, password: password};
        const response = await fetch(url, {method: "POST", 
        headers: {"Content-type": "application/json"}, body: JSON.stringify(user)});
        const data = await response.json()
        if (response.ok) {
            console.log("You got it brother man")
            mail = "";
            password = "";
        }
    }
</script>

<form>
    <h1>Login</h1>

    <input type="email" bind:value={mail} name="email"/>

    <input type="password" bind:value={password} name="password"/>

    <button on:click={checkEmailAndPas} type="button">Login</button>
</form>