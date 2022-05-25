export async function post  (params) {
  return await fetch('https://api.svelte.dev', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-AccountId': 1222111,
      'X-Debug': 'true',
    },
    body: {qwe: 123},
  })
}