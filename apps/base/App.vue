<template>
	<div>
		<div class="">app</div>
		<ul>
			<li v-for="item of list" :key="item.url">
				<a @click="current = item">{{ item.name }}</a>
			</li>
		</ul>
		<WujieVue :name="current.name" :url="current.url"></WujieVue>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import WujieVue from 'wujie-vue3'
const list = [
  {
    url: 'http://localhost:5174',
    name: '5174',
  },
  {
    url: 'http://localhost:5175',
    name: '5175',
  },
]
const current = ref(list[0])
const { bus, setupApp, preloadApp, destroyApp } = WujieVue

</script>
<style scoped></style>