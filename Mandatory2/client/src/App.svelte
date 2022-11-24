<script>
import { Router, Link, Route } from "svelte-navigator";
import Home from "./pages/home/home.svelte";
import Login from "./pages/login/login.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
  </nav>
  <div>
    <Route path="/"><Home /></Route>
    <Route path="/login"><Login /></Route>
  </div>
</Router>

<style>

@font-face {
    font-family: "ninjanaruto";
    src: url(../../../public/njnaruto.ttf);
  }

  nav {
    font-family: "ninjanaruto";
    text-decoration: none;
  }
</style>