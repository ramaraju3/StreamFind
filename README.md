# StreamFind

**Where to watch anything.**

A fast, mobile-first web app that tells you where to stream a movie or TV show, with ratings, soundtrack info, and book adaptation details — all in one place.

Live: [ramaraju3.github.io/streamfind](https://ramaraju3.github.io/streamfind/)

---

## Features

- **Streaming availability** — see which services have the title (subscription, rent, or buy) in the US
- **Ratings** — TMDB score, IMDb rating, and Rotten Tomatoes score side by side
- **Soundtrack** — official soundtrack album via iTunes, plus scene-specific songs via TuneFind
- **Book adaptations** — if the movie or show is based on a book, shows the cover and a link to read it on Open Library
- **Typo tolerance** — handles misspellings using word-by-word fallback and adjacent character swap correction
- **iOS Shortcut support** — open `?q=title` to trigger a search automatically (see below)

---

## APIs Used

| API | Purpose | Key required |
|-----|---------|-------------|
| [TMDB](https://www.themoviedb.org/documentation/api) | Movie/TV search, streaming providers | Yes (free) |
| [OMDB](https://www.omdbapi.com) | IMDb + Rotten Tomatoes ratings | Yes (free) |
| [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI) | Soundtrack album | No |
| [Open Library](https://openlibrary.org/developers/api) | Book adaptation info | No |
| [TuneFind](https://www.tunefind.com/api) | Songs featured in scenes | Yes (free) |

---

## Setup

This is a single `index.html` file. To use your own API keys, open the file and update the constants near the top of the `<script>` block:

```js
const K = 'your_tmdb_api_key';
const OMDB_KEY = 'your_omdb_key';
const TUNEFIND_USER = 'your_tunefind_username';
const TUNEFIND_PASS = 'your_tunefind_password';
```

- **TMDB key** — get one free at [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
- **OMDB key** — get one free at [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
- **TuneFind credentials** — register at [tunefind.com](https://www.tunefind.com) (TuneFind is optional; iTunes soundtrack works without it)

---

## iOS Shortcut

You can search StreamFind directly from the iOS Shortcuts app or Siri:

1. **Ask for Input** — prompt: "Search for a movie or TV Show"
2. **Replace Text** — find ` ` (space), replace `%20`, in: Provided Input
3. **URL** — `https://ramaraju3.github.io/streamfind/?q=` + Replaced Text variable
4. **Open URLs** — URL variable from step 3

---

## Deployment

The app is a static single-page file — no build step, no server. It's hosted on GitHub Pages directly from `main`.

---

## Credits

- Movie and streaming data by [TMDB](https://www.themoviedb.org)
- Ratings by [OMDB](https://www.omdbapi.com)
- Soundtrack data by [iTunes](https://www.apple.com/itunes/) and [TuneFind](https://www.tunefind.com)
- Book data by [Open Library](https://openlibrary.org)
