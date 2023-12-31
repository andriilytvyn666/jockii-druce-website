type Track = {
  name: string
  lyrics: Any
  mp3: audio
}

type StreamingLinks = {
  spotify: string
  appleMusic: string
  youtubeMusic: string
  soundCloud: string
}

type MainMenu = {
  title: mainMenuItem
  album: mainMenuItem
  streaming: mainMenuItem
  pix: mainMenuItem
}

type mainMenuItem = {
  name: string
  enabled: boolean
}

type audio = {
  asset: { _ref: string }
}

type image = {
  asset: { _ref: string }
}
