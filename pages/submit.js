import qs from 'qs';
import Head from 'next/head';
import { fetchData } from 'utils/data';
import Hero from '@/components/global/Hero';
import SubmitListingForm from '@/components/listing/SubmitListingForm';

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

export default function SubmitPage({ submitPage }) {
  if (!submitPage) {
    return null;
  }

  const {
    attributes: {
      title,
      hero: heroData,
      seo: seoData,
    }
  } = submitPage;

  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="title" content={ seoData.metaTitle } />
        <meta name="description" content={ seoData.metaDescription } />
      </Head>

      <Hero hero={heroData} />

      <section className="p-6 md:py-20 lg:max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl tracking-wider font-extrabold leading-tight">Submit a new initiative</h2>
        <SubmitListingForm />
      </section>
    </>
  );
}

export async function getStaticProps() {
  const { data: submitPage } = await fetchData('submit-page', query);

  return {
    props: {
      submitPage,
    }
  }
}