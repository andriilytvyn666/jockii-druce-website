type twitterPost = {
  name: string
  date: string
  post: string
}

type Track = {
  name: string
  lyrics: Any
  mp3?: audio
}

type Twitter = {
  posts: twitterPost[]
}

type audio = {
  asset: { _ref: string }
}

type image = {
  asset: { _ref: string }
}
