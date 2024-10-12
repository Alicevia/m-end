<template>
	<AppConfigProvider>
		<a-layout  class=" h-full ">
			<a-layout-header class="">
				<a-page-header
					:show-back="false"
					title="Openx"
					subtitle="openx-front-team">
					<template #extra>
						<a-space>
							<AppColorMode :appColorMode="appColorMode"></AppColorMode>
							<AppUserCenter></AppUserCenter>
						</a-space>
					</template>
				</a-page-header>
			</a-layout-header>
			<a-layout>
				<a-layout-sider style="width:49px;">
					<a-menu :collapsed="true">
						<a-menu-item key="1">
							<template #icon><icon-apps></icon-apps></template>
							Navigation 1
						</a-menu-item>
						<a-menu-item key="2">
							<template #icon><icon-apps></icon-apps></template>
							Navigation 1
						</a-menu-item>
					</a-menu>
	
				</a-layout-sider>
				<a-layout-sider style="width: 206px; ">
					23
				</a-layout-sider>
				<a-layout-content>
					<div>
						<WujieVue :name="current.name" :url="current.url" :props="{colorMode:appColorMode.store}"></WujieVue>
					</div>
				</a-layout-content>
			</a-layout>
			<a-layout-footer>
				<a-button>test</a-button>
			</a-layout-footer>
		</a-layout>
	</AppConfigProvider>
 
</template>

<script setup>
import { ref,  reactive } from 'vue'
import { AppConfigProvider, AppColorMode, AppUserCenter } from '@core/components'
import { useAppColorModeStore } from './src/store'
import WujieVue from 'wujie-vue3'

const isProd = import.meta.env.PROD
const list = [
  {
    url: `http://localhost:${isProd?'4174' : '5174'}`,
    name: isProd? '4174':'5174',
  },
  {
    url: `http://localhost:${isProd?'4175' : '5175'}`,
    name: isProd? '4175':'5175',
  },
]
const current = ref(list[0])
const appColorMode =reactive(useAppColorModeStore())
</script>
