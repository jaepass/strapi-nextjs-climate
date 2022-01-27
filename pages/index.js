import qs from 'qs';
import Head from 'next/head';
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
    listings: {
      populate: '*',
    },
  }
}, {
    ecodeValuesOnly: true,
});

export default function Home({ home }) {
  if (!home) {
    return null;
  }

  const {
    attributes: {
      title,
      hero: heroData,
      seo: seoData,
      listings: { data: listingsData }
    }
  } = home;

  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="title" content={ seoData.metaTitle } />
        <meta name="description" content={ seoData.metaDescription } />
      </Head>

      <Hero hero={heroData} />
  
      <section className="p-6 md:py-20 lg:max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl tracking-wider font-extrabold leading-tight">Featured initiatives</h2>
        <ListingsList listings={listingsData} length={4} />
      </section>
    </>
  );
}

export async function getStaticProps() {
  const { data: home } = await fetchData('home', query);

  return {
    props: {
      home
    }
  }
}