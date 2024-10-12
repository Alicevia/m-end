<template>
	<AppConfigProvider>
		<a-button>{{ 1 }}</a-button>
	</AppConfigProvider>
</template>

<script setup>
import { AppConfigProvider } from '@core/components'
import { useAppColorModeStore } from './src/store'
const appColorMode = useAppColorModeStore()
globalThis.$wujie.bus.$on('update:appColorMode', appColorMode.changeColorMode)
</script>
<!-- <style scoped></style> -->