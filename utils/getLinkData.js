/**
 * @param {string} link - The link provided by the consuming component
 * @param {boolean|null} openNewWindow - Whether or not to open the link in a new window
 * @returns {object} - An object containing the component and props to pass in as the element attributes
 */
function getLinkData(link, classObj, openNewWindow = null,) {
  let isExternalLink = false;
  let newWindow = openNewWindow;

  // Check for nullable link and return empty props and div component if it is
  if (!link) {
    return {
      component: 'div',
      props: classObj ? { className: classObj } : {},
      link,
      openNewWindow,
    }
  }

  // Check for external link
  if (link.match(/^https?:/) !== null) {
    isExternalLink = true;
  }

  // If the link is external, set the newWindow prop to true
  if (openNewWindow === null) {
    newWindow = isExternalLink;
  }

  // Define props to pass to the element
  const props = {};


  // Both the 'a' and 'Link' components require a href prop
  // Pass directly to the href attribute
  props.href = link
  props.className = classObj;

  // If the link is external, set other necessary attributes
  if (newWindow) {
    props.target = '_blank';
    props.rel = 'noopener noreferrer';
  }

  return {
    component: isExternalLink ? 'a' : 'Link',
    openInNewWindow: newWindow,
    props,
    link
  }
}

export { getLinkData };