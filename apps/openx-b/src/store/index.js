import { useWujieSubAppColorMode } from '@core/composable'
import { createSharedComposable  } from '@vueuse/core'
 
export const useAppColorModeStore = createSharedComposable(
  () => useWujieSubAppColorMode({ initialValue: 'dark' }),
)

// export const useAppColorModeStore = createSharedComposable(() => {
//   const appColorMode = useAppColorMode({ initialValue: 'dark' })
//   const colorMode=globalThis.$wujie?.props.colorMode
//   if(colorMode){
//     appColorMode.store.value = colorMode
//     globalThis.$wujie.bus.$on('update:colorMode', (v) => {
//       appColorMode.store.value= v
//     })
//   }
  
//   return appColorMode
// })
