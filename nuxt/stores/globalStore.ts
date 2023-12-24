export const useGlobalStore = defineStore('global', () => {
  const menuItem = ref<MenuItem>('none')
  const setMenuItem = (item: MenuItem) => {
    if (menuItem.value === item) {
      menuItem.value = 'none'
    } else {
      menuItem.value = item
    }

    if (menuItem.value === 'album') {
      setCurrentTrack('none')
    }
  }

  const currentTrack = ref<number | 'none'>('none')
  const setCurrentTrack = (track: number | 'none') => {
    if (currentTrack.value === track && currentTrack.value !== 'none') {
      currentTrack.value = 'none'
    } else {
      currentTrack.value = track
    }
  }

  return { menuItem, setMenuItem, currentTrack, setCurrentTrack }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}
