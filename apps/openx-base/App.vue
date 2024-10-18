<template>
	<a-spin class="h-full w-full" tip="正在加载数据..." dot
		:loading="isLoading">
		<router-view></router-view>
	</a-spin>
</template>
<script setup>
import { useUserStore } from './src/store'


const { isLoading } = useUserStore()

</script>