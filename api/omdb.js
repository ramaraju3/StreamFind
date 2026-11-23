// Proxies OMDB so the API key stays server-side (set OMDB_KEY in Vercel env vars).
const ALLOWED_ORIGIN = 'https://ramaraju3.github.io';

module.exports = async (req, res) => {
  if (req.headers.origin !== ALLOWED_ORIGIN) return res.status(403).json({ error: 'origin not allowed' });
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  const { i } = req.query;
  if (!/^tt\d+$/.test(i || '')) return res.status(400).json({ error: 'bad imdb id' });
  const r = await fetch(`https://www.omdbapi.com/?i=${i}&apikey=${process.env.OMDB_KEY}`);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-maxage=86400');
  res.status(r.status).send(await r.text());
};
