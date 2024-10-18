<template>
	<WujieVue 
		name="a" 
		:props="{colorMode:appColorMode.store.value}"
		url="http://localhost:5174"
		alive
		sync 
		exec>
	</WujieVue>  
</template>

<script setup>
import { useAppColorModeStore } from '../../store'
const appColorMode = useAppColorModeStore()
</script>
<style scoped>
</style>