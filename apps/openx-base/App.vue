<template>
	<AppContainer>
		<template #empty>
			kong
		</template>
		<div>
			<ul>
				<li v-for="(item,) in list" :key="item.name">
					<a @click="current = item">{{ item.name }}

					</a>
				</li>
			</ul>
			<WujieVue :name="current.name" :url="current.url"></WujieVue>
		</div>
	</AppContainer>
 
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { AppContainer } from '@core/components'
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
const { bus, setupApp, preloadApp, destroyApp }= WujieVue
const obj = {  
  2: 'fs', 
  a: 1, 
}
const b = 231
const a = computed(() => 3)
const c = 2323232323
</script>
