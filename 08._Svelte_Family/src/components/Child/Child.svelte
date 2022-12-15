<script>
    export let child;
    export let onTellILoveYou;
    export let onAlwaysSayHi;
    export let parentName;
   
</script>

<p>{child.name}</p>
<button on:click={onTellILoveYou}>Wisper i parrents ear</button>
<button on:click={onAlwaysSayHi(`I love you,, ${parentName}. `)}>Greet</button>