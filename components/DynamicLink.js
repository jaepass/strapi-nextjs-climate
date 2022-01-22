import { createElement } from 'react';
import Link from 'next/link';
import { getLinkData } from '@/utils/getLinkData';

const DynamicLink = ({ link, children, classObj }) => {
  const linkComponent = getLinkData(link, classObj).component;
  const props = getLinkData(link, classObj).props;

  if (linkComponent === 'a') {
    return createElement(linkComponent, props, children);
  } else {
    return <Link {...props}>{ children }</Link>
  }
}

export default DynamicLink;