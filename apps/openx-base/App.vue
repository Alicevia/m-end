<template>
	<AppConfigProvider>
		<a-spin class="h-full w-full " :tip="tip" dot
			:loading="refreshLoading">
			<router-view></router-view>
		</a-spin>
	</AppConfigProvider>
</template>
<script setup>
import { useUserStore } from './src/store'
import { AppConfigProvider   } from '@core/components'
import { useAppColorModeStore   } from './src/store'
useAppColorModeStore()
const { refreshLoading, tip } = useUserStore()

</script>