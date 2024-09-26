<template>
	<div>
		<div class="">app</div>
		<ul>
			<li v-for="(item,) in list" :key="item.name">
				<a @click="current = item">{{ item.name }}

				</a>
			</li>
		</ul>
		<WujieVue :name="current.name" :url="current.url"></WujieVue>
	</div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
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
const a = computed(() => 3)
</script>
<style scoped lang="less">
@link-color:#428bca; 

@link-color-hover:darken(@link-color, 10%);
// Variables
@my-selector: banner;

// Usage
.@{my-selector}

 {
  margin: 0 auto;
  font-weight: bold;
  line-height: 40px;
}

.container {
  display: block;
  width: 100px;
  color:@link-color;
  .child {
    height: 100px;

  }
}

.a {
  display: flex;
}

 
</style>