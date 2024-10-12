<template>
	<a-dropdown trigger="hover">
		<a-button shape="round">
			<template #icon>
				<icon-user ></icon-user>
			</template>
		</a-button>
		<template #content>
			<a-doption >个人中心</a-doption>
			<a-doption >退出登录</a-doption>
		</template>
	</a-dropdown>
</template>

<script setup>
 
</script>
<style scoped>
</style>