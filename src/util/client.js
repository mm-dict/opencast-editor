// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

/**
 * Client I stole this form a react tutorial
 */
export async function client(endpoint, { body, ...customConfig } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  const encoded = btoa(unescape(encodeURIComponent(
    "admin" + ':' + "opencast"
  )));
  const authHeaders = { 'Authorization': `Basic ${encoded}` };

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    user: "admin",
    password: "opencast",
    headers: {
      ...headers,
      ...customConfig.headers,
      ...authHeaders,
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  let data
  try {
    const response = await window.fetch(endpoint, config)
    data = await response.json()
    if (response.ok) {
      return data
    }
    throw new Error(response.statusText)
  } catch (err) {
    return Promise.reject(err.message ? err.message : data)
  }
}

client.get = function (endpoint, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'GET' })
}

client.post = function (endpoint, body, customConfig = {}) {
  return client(endpoint, { ...customConfig, body })
}