type MenuItem = 'none' | 'twitter' | 'album' | 'streaming' | 'pix'

// TODO: replace this copy paste with proper type import (figure it out somehow)
type ReturnedValue = {
  play: PlayFunction
  sound: Ref<Howl | null>
  stop: (id?: number) => void
  pause: (id?: number) => void
  isPlaying: Ref<boolean>
  duration: Ref<number | null>
}
