<template>
	<div>
		<h2>子应用b</h2>
		<a-input></a-input>
	</div>
</template>

<script setup>
import { useAppColorModeStore } from './src/store'
useAppColorModeStore()
</script>
<style scoped></style>