import { createElement } from 'react';
import { useRouter } from 'next/router'
import { getLinkData } from '@/utils/getLinkData';

const DynamicLink = ({ link, children, classObj }) => {
  const isExternal = getLinkData(link).isExternal;
  const props = getLinkData(link, classObj).props;
  const router = useRouter();

  /**
   * Function to handle the route change for internal links
   * 
   * @param {object} e - The event object
   */
  const handleRouteChange = (e) => {
    e.preventDefault();
    router.push(link);
  }

  // Check if the link is external
  if (isExternal) {
    // and if so create an anchor element and pass all props
    return createElement('a', props, children);
  } else {
    // Otherwise return an anchor element passing in the onClick handler
    return <a href={link} onClick={handleRouteChange} {...props}>{children}</a>;
  }
}

export default DynamicLink;