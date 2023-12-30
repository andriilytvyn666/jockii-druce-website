type twitterPost = {
  post: string
}

type Track = {
  name: string
  lyrics: Any
  mp3: audio
}

type Twitter = {
  posts: twitterPost[]
}

type StreamingLinks = {
  spotify: string
  appleMusic: string
  youtubeMusic: string
  soundCloud: string
}

type audio = {
  asset: { _ref: string }
}

type image = {
  asset: { _ref: string }
}
