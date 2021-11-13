const API_BASE_URL = 'https://api.tvmaze.com'

export async function apiGet(queryStirng) {
  const response = await fetch(`${API_BASE_URL}${queryStirng}`).then(r => r.json())
  return response
}
