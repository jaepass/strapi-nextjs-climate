import qs from 'qs';
import Head from 'next/head'
import { fetchData } from 'utils/data';
import Hero from '@/components/global/Hero';
import Content from '@/components/global/Content';

const query = qs.stringify({
  populate: {
    hero: {
      populate: '*',
    },
    content: {
      populate: '*',
    },
    seo: {
      populate: '*',
    },
  }
}, {
    ecodeValuesOnly: true,
});

export default function AboutPage ({ aboutPage }) {
  
  if (!aboutPage) {
    return null;
  }
  
  const {
    attributes: {
      title,
      hero: heroData,
      seo: seoData,
      content: contentArr,
    }
  } = aboutPage;

  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="title" content={ seoData.metaTitle } />
        <meta name="description" content={ seoData.metaDescription } />
      </Head>

      <Hero hero={heroData} />

      <section className="p-6 md:py-20 lg:max-w-5xl mx-auto">
        { contentArr?.length > 0 && contentArr.map((contentData, index) => (
          <Content
            key={index}
            content={contentData}
          />
        )) }
      </section>
    </>
  );
}

export async function getStaticProps() {
  const { data: aboutPage } = await fetchData('about-page', query);

  return {
    props: {
      aboutPage,
    }
  }
}