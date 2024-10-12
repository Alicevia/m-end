<template>
	<a-dropdown trigger="hover">
		<a-button shape="round" @click="switchMode">
			<template #icon>
				<icon-moon-fill v-if="isDark"></icon-moon-fill>
				<icon-sun-fill v-if="isLight"></icon-sun-fill>
			</template>
		</a-button>
		<template #content>
			<a-doption  @click="item.handleClick" v-for="item of list" :key="item.title">
				<template #icon >
					<icon-check  :class="[item.selected?'':' invisible']"></icon-check>
				</template>
				{{ item.title }} 
			</a-doption>
		</template>
	</a-dropdown>
</template>

<script setup>
import { ref  } from 'vue'
import { toRefs } from '@vueuse/core'
const props = defineProps({
  appColorMode: Object,
})
const { isDark, isLight, isAutoMode, isLightMode, isDarkMode, switchMode, toAuto, toDark, toLight }=toRefs(props.appColorMode)
const list = ref([
  { title: '暗色模式', handleClick: toDark, selected: isDarkMode },
  { title: '亮色模式', handleClick: toLight, selected: isLightMode },
  { title: '跟随系统', handleClick: toAuto, selected: isAutoMode  },
])
</script>
<style scoped>
</style>