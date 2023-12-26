export const useGlobalStore = defineStore('global', () => {
  const audio = ref<ReturnedValue>()

  const setAudio = (newAudio: ReturnedValue) => {
    audio.value = newAudio
  }

  const menuItem = ref<MenuItem>('none')
  const setMenuItem = (item: MenuItem) => {
    if (menuItem.value === item) {
      menuItem.value = 'none'
    } else {
      menuItem.value = item
    }

    if (menuItem.value === 'album') {
      setCurrentTrack({ name: 'none', lyrics: '' })
    }
  }

  const currentTrack = ref<Track>({ name: 'none', lyrics: '' })

  const setCurrentTrack = (track: Track) => {
    if (
      currentTrack.value.name === track.name &&
      currentTrack.value.name !== 'none'
    ) {
      currentTrack.value = {
        name: 'none',
        lyrics: '',
      }
    } else {
      currentTrack.value = track
    }
  }

  return {
    audio,
    setAudio,
    menuItem,
    setMenuItem,
    currentTrack,
    setCurrentTrack,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}
