import {  useWujieMainAppColorMode } from '@core/composable'
import { createSharedComposable  } from '@vueuse/core'
import WujieVue from 'wujie-vue3'
export * from './user'
 
export const useAppColorModeStore = createSharedComposable(
  () =>
    useWujieMainAppColorMode(WujieVue, { initialValue: 'dark' }),
) 
