// Store the base url to export
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * 
 * @param {string} path - The API endpoint path
 * @param {string} query - The query params
 * @returns {Promise} - A promise that resolves to the response body
 */
async function fetchData(path, query) {
  let url;

  // If params are passed, add them to the url
  if (query !== null) {
    url = `${baseUrl}/${path}?${query}`;
  } else {
    url = `${baseUrl}/${path}`;
  }

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export { baseUrl, fetchData };