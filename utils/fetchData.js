// Store the base url to export
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * 
 * @param {string} path - The API endpoint path
 * @param {string} params - The query params
 * @returns {Promise} - A promise that resolves to the response body
 */
async function fetchData(path, params = null) {
  let url;

  // If params are passed, add them to the url
  if (params !== null) {
    url = `${baseUrl}/${path}/${params}`;
  } else {
    url = `${baseUrl}/${path}`;
  }

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export { baseUrl, fetchData };