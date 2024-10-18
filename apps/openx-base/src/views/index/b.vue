<template>
	<WujieVue name="b"
		alive
		sync 
		exec 
		:props="{colorMode:appColorMode.store.value}" 
		url="http://localhost:5175">
	</WujieVue>
 
</template>

<script setup>
import { useAppColorModeStore } from '../../store'
const appColorMode = useAppColorModeStore()
</script>
<style scoped>
</style>