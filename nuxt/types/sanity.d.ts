type twitterPost = {
  name: string
  date: string
  post: string
}

type Track = {
  name: string
  lyrics: Any
}

type Twitter = {
  posts: twitterPost[]
}

type image = {
  asset: { _ref: string }
}
