<script>
  export let radius
  export let strokeWidth
  export let stroke
  export let data

  let width = 500;
  let height = 500;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<svg {width} {height}>
  {#each data.data as bubble}
    <circle
      cx={bubble.x * width / 100}
      cy={height - bubble.y * height / 100}
      r={radius}
      fill={bubble.fill}
      stroke={stroke}
      stroke-width={strokeWidth}
      ></circle>
  {/each}
</svg>

<style>
  svg {
    overflow: hidden;
  }
</style>