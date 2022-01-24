import App from 'next/app';
import qs from 'qs';
import '../styles/globals.css'
import { DefaultLayoutProvider } from '@/context/defaultLayout';
import { fetchData } from '@/utils/fetchData';

const listingsQuery = qs.stringify({
  populate: ['categories']
}, {
    ecodeValuesOnly: true,
});

const defaultPageQuery = qs.stringify({
  populate: [
    'navigation',
    'navigation.navigationLinks',
    'footer',
    'footer.footerTitle',
    'footer.footerLinks',
  ],
}, {
    ecodeValuesOnly: true,
});
function MyApp({ Component, pageProps, listings, defaultPage }) {
  
  return (
    <DefaultLayoutProvider value={{ listings, defaultPage }}>
      <Component {...pageProps} />
    </DefaultLayoutProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { data: listings } = await fetchData('listings', listingsQuery);
  const { data: defaultPage } = await fetchData('default-page', defaultPageQuery);

  return { ...appProps, listings, defaultPage };
}

export default MyApp;
