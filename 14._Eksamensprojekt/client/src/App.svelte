<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/Home/Home.svelte";
  import Login from "./pages/Login/Login.svelte";
</script>


<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/">Login</Link>
  </nav>
  <div>
    <Route path="/"><Home /></Route>
    <Route path="/login"><Home /></Route>
  </div>
</Router>




<style>

</style>
