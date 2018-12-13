<template>
  <div id="app">
   <!-- <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
		
	}
html,body{
	height: 100%;
  width: 100%;
  
}
#app {
  height: 100%;
  width: 100%;
}
</style>
