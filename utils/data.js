// Get the url of the Strapi API based om the env variable or the default local one.
function getStrapiURL(path) {
  if (process.env.NODE_ENV === 'production') {
    return process.env.NEXT_PUBLIC_BASE_URL + path
  }
  return process.env.LOCAL_BASE_URL + path;
}

/**
 * 
 * @param {string} path - The API endpoint path
 * @param {string} query - The query params
 * @returns {Promise} - A promise that resolves to the response body
 */
 export async function fetchData(path, query) {
  let url;

  // If params are passed, add them to the url
  if (query !== null) {
    let base = getStrapiURL(path);
    url = `${base}?${query}`;
  } else {
    url = getStrapiURL(path);
  }

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

// This function will build the url to fetch on the Strapi API
export function getData(slug) {
  const slugToReturn = `${slug}`;
  const apiUrl = `pages?slug=${slug}`;

  return {
    data: getStrapiURL(apiUrl),
    slug: slugToReturn,
  };
}