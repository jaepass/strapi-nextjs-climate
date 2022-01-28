import qs from 'qs';
import { fetchData } from '@/utils/data';

const query = qs.stringify({
  populate: {
    listings: {
      populate: '*',
    },
  }
}, {
    ecodeValuesOnly: true,
});

export default function CategoryPage({ category, categories }) {
  return (
    <>
      {category.name}
      {categories?.map((category) => (
        console.log(category.listings)
      ))}
    </>
  );
};

export async function getStaticPaths() {
  const { data: categories } = await fetchData('categories');

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = (await fetchData('categories', params.slug));
  const { data: categories }  = await fetchData('categories', query);

  return {
    props: { category, categories },
    revalidate: 1,
  };
}