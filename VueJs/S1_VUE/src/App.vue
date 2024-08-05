<template>
  <h1 class="f-20">Hola Mundo en VUE js</h1>

  <p>Contador: {{ counter }}</p>
  <button @click ="increment">increment +</button>

</template>

<script>
  console.log("hola desde consola!!!");

  const counter = ref<number>(1)
  
  const increment = ()=>{
    counter.value++
  }
</script>
<style>
h1 {
  color: red;
}
</style>