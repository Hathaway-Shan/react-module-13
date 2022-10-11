export async function fetchBusinesses(zip = '93117', term = '') {
  const params = new URLSearchParams();
  params.set('zip', zip);
  params.set('term', term);
  const resp = await fetch(`/.netlify/functions/fetch-yelp?${params.toString()}`, {
    headers: { Accept: 'application/json' },
  });
  const data = await resp.json();
  return data;
}
