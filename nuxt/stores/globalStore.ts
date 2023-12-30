const emtpyTrack: Track = {
  name: 'none',
  lyrics: '',
  mp3: { asset: { _ref: 'file-027401f31c3ac1e6d78c5d539ccd1beff72b9b11-pdf' } },
}

export const useGlobalStore = defineStore('global', () => {
  const menuItem = ref<MenuItem>('none')

  const setMenuItem = (item: MenuItem) => {
    if (menuItem.value === item) {
      menuItem.value = 'none'
    } else {
      menuItem.value = item
    }

    if (menuItem.value === 'album') {
      setCurrentTrack(emtpyTrack)
    }
  }

  const currentTrack = ref<Track>(emtpyTrack)

  const setCurrentTrack = (track: Track) => {
    if (
      currentTrack.value.name === track.name &&
      currentTrack.value.name !== 'none'
    ) {
      currentTrack.value = emtpyTrack
    } else {
      currentTrack.value = track
    }
  }

  return {
    menuItem,
    setMenuItem,
    currentTrack,
    setCurrentTrack,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}
