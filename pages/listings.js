import qs from 'qs';
import Head from 'next/head';
import { useDefaultLayoutContext } from '@/context/defaultLayout';
import { fetchData } from 'utils/data';
import Hero from '@/components/global/Hero';
import ListingsList from '@/components/listing/ListingsList';

const query = qs.stringify({
  populate: {
    hero: {
      populate: '*',
    },
    seo: {
      populate: '*',
    },
  }
}, {
    ecodeValuesOnly: true,
});

// List of listings
export default function ListingsPage ({ listingsPage }) {
  const { listings } = useDefaultLayoutContext();
  
  if (!listingsPage) {
    return null;
  }
  
  const {
    attributes: {
      title,
      hero: heroData,
      seo: seoData,
    }
  } = listingsPage;

  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="title" content={ seoData.metaTitle } />
        <meta name="description" content={ seoData.metaDescription } />
      </Head>

      <Hero hero={heroData} />

      <section className="p-6 md:py-20 lg:max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl tracking-wider font-extrabold leading-tight">Initiatives and organizations</h2>
          <ListingsList listings={listings} />
      </section>
    </>
  );
}

export async function getStaticProps() {
  const { data: listingsPage } = await fetchData('listings-page', query);

  return {
    props: {
      listingsPage,
    }
  }
}