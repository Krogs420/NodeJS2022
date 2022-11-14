<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/Home/Home.svelte";
  import Enterence from "./pages/Enterence/Enterence.svelte";
  import Animals from "./pages/Animals/Animals.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/enterence">Enterence</Link>
    <Link to="animals">Animals</Link>
  </nav>
  <div>
    <Route path="/"><Home /></Route>
    <Route path="/enterence"><Enterence /></Route>
    <Route path="/animals"><Animals /></Route>
  </div>
</Router>
