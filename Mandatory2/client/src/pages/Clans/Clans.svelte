<script>
     import { each } from "svelte/internal";


async function getNaruto() {
  const res = await fetch(`http://localhost:8081/naruto`);
  const data = await res.json();
  console.log(data);
  if (res.ok) {
    return data;
  } else {
    throw new Error(data);
  }
}

let promise = getNaruto();
console.log(promise)
</script>

<body>
    {#await promise}
    <p>Here comes Naruto</p>
  {:then data}
    {#each data as clan}
      <p>{clan["1. Name"]}</p>
    {/each}  
  {/await}
</body>