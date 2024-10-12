import { useColorMode  } from '@vueuse/core'
import { computed, watch   } from 'vue'

const DARK = 'dark'
const LIGHT = 'light'
const AUTO = 'auto'
export const useAppColorMode = (options={}) => {
  const { system, store, state }=useColorMode({
    selector: 'body',
    attribute: 'arco-theme',
    ...options,
  })
  const isDarkMode = computed(() => store.value==DARK)
  const isLightMode = computed(() => store.value==LIGHT)
  const isAutoMode = computed(() => store.value==AUTO)
  
  const isDark = computed(() => state.value==DARK)
  const isLight = computed(() => state.value==LIGHT)

  const changeColorMode = v => store.value=v
  const createChangeFn = v => () => changeColorMode(v)
  const toDark = createChangeFn(DARK)
  const toLight = createChangeFn(LIGHT)
  const toAuto =  createChangeFn(AUTO)
  const switchMode = () => {
    if(isDark.value) toLight()
    else toDark()
  }
  return { 
    isDarkMode, isLightMode, isAutoMode,
    state, store, 
    isLight, isDark,
    switchMode, toDark, toLight, toAuto, changeColorMode,
  }

}

const UPDATE_COLOR_MODE = 'update:colorMode'

export const useWujieMainAppColorMode = (wujie, options) => {
  const appColorMode = useAppColorMode(options)
  if(wujie){
    watch(appColorMode.store, v => {
      wujie.bus.$emit(UPDATE_COLOR_MODE, v)
    })
  }
  return appColorMode
}
export const useWujieSubAppColorMode = (options) => {
  const appColorMode = useAppColorMode(options)
  const colorMode= globalThis.$wujie?.props.colorMode
  if(colorMode){
    appColorMode.store.value = colorMode
    globalThis.$wujie.bus.$on(UPDATE_COLOR_MODE, (v) => {
      appColorMode.store.value= v
    })
  }
  return appColorMode
}