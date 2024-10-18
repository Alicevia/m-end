<template>
	<AppConfigProvider>
		<h2>子应用A</h2>
		<a-input v-model="name"></a-input>

		<a-button @click="$router.push({path:'/'})">home</a-button>
		<a-button @click="$router.push({path:'/x'})">x</a-button>
		<router-view></router-view>
	</AppConfigProvider>
</template>

<script setup>
import { AppConfigProvider } from '@core/components'
import { useAppColorModeStore } from './src/store'
import { onMounted, ref } from 'vue'
useAppColorModeStore()
const name = ref('sdfsdf')


</script>
<!-- <style scoped></style> -->