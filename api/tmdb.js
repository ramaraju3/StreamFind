// Proxies TMDB so the API key stays server-side (set TMDB_KEY in Vercel env vars).
const ALLOWED_ORIGIN = 'https://ramaraju3.github.io';
const PATH_OK = /^(search\/multi|(movie|tv)\/\d+(\/(watch\/providers|external_ids|credits|videos))?)$/;

module.exports = async (req, res) => {
  if (req.headers.origin !== ALLOWED_ORIGIN) return res.status(403).json({ error: 'origin not allowed' });
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  const { path = '', ...params } = req.query;
  if (!PATH_OK.test(path)) return res.status(400).json({ error: 'path not allowed' });
  const qs = new URLSearchParams({ ...params, api_key: process.env.TMDB_KEY });
  const r = await fetch(`https://api.themoviedb.org/3/${path}?${qs}`);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-maxage=86400');
  res.status(r.status).send(await r.text());
};
