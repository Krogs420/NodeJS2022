<script>
import { Router, Link, Route } from "svelte-navigator";
import Home from "./pages/home/home.svelte";
import Login from "./pages/login/login.svelte";
import Mail from "./pages/Mail/Mail.svelte";
import Clans from "./pages/Clans/Clans.svelte";

</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/mail">Mail</Link>
    <Link to="/clans">Clans</Link>
  </nav>
  <div>
    <Route path="/"><Home /></Route>
    <Route path="/login"><Login /></Route>
    <Route path="/mail"><Mail /></Route>
    <Route path="/clans"><Clans /></Route>
  </div>
</Router>

<style>

@font-face {
    font-family: "ninjanaruto";
    src: url(../../../public/njnaruto.ttf);
  }

  nav {
    font-family: "ninjanaruto";
    text-align: center;
    margin: 10px;
    text-decoration: none;
  }
</style>