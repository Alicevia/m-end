<template>
	<AppConfigProvider>
		<a-layout  class="h-full">
			<a-layout-header class="">
				<a-page-header
					:show-back="false"
					title="Openx"
					subtitle="openx-front-team">
					<template #extra>
						<a-space>
							<AppColorMode :appColorMode="appColorMode"></AppColorMode>
							<AppUserCenter :logout="logout"></AppUserCenter>
						</a-space>
					</template>
				</a-page-header>
			</a-layout-header>
			<a-layout>
				<a-layout-sider style="width:49px;">
					<a-menu :selectedKeys="selectedKeys" :collapsed="true" :onMenuItemClick="onMenuItemClick">
						<a-menu-item v-for="(item,) in list" :key="item.name">
							<template #icon><icon-apps></icon-apps></template>
							{{ item.name }}
						</a-menu-item>
					</a-menu>
				</a-layout-sider>
				<a-layout-content>
					<router-view v-slot="{ Component }">
						<component :is="Component" ></component>
					</router-view>
				</a-layout-content>
			</a-layout>
			<!-- <a-layout-footer class=" text-center">
			</a-layout-footer> -->
		</a-layout>
	</AppConfigProvider>
 
</template>

<script setup>
import { reactive, computed } from 'vue'
import { AppConfigProvider, AppColorMode, AppUserCenter } from '@core/components'
import { useAppColorModeStore, useUserStore } from '../store'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
const { logout }=useUserStore()
const isProd = import.meta.env.PROD
const list = [
  {
    url: `http://localhost:${isProd?'4174' : '5174'}`,
    name: 'a',
  },
  {
    url: `http://localhost:${isProd?'4175' : '5175'}`,
    name: 'b',
  },
]
// const lifecycles = {
//   beforeLoad: (appWindow) => console.log(`${appWindow.__WUJIE.id} beforeLoad 生命周期`),
//   beforeMount: (appWindow) => console.log(`${appWindow.__WUJIE.id} beforeMount 生命周期`),
//   afterMount: (appWindow) => console.log(`${appWindow.__WUJIE.id} afterMount 生命周期`),
//   beforeUnmount: (appWindow) => console.log(`${appWindow.__WUJIE.id} beforeUnmount 生命周期`),
//   afterUnmount: (appWindow) => console.log(`${appWindow.__WUJIE.id} afterUnmount 生命周期`),
//   activated: (appWindow) => console.log(`${appWindow.__WUJIE.id} activated 生命周期`),
//   deactivated: (appWindow) => console.log(`${appWindow.__WUJIE.id} deactivated 生命周期`),
//   loadError: (url, e) => console.log(`${url} 加载失败`, e),
// }
const router = useRouter()
const onMenuItemClick = (name) => {
  router.push({ name })
}
const route = useRoute()
const selectedKeys =computed(() => route.matched.map(item => item.name))
const appColorMode =reactive(useAppColorModeStore())
</script>
