import CardItem from '@/components/CardItem';
import { fetchData } from 'utils/data';

export default function CategoriesPage({ categories }) {
  if (!categories) {
    return null;
  }

  return (
    // Banner
    <section>
      { categories?.map((category) => (
        <CardItem
          key={category.id}
          link={`/categories/${category.slug}`}
        >
          {category.attributes.name}
        </CardItem> 
      ))}
    </section>
  );
}

export async function getStaticProps() {
  const { data: categories } = await fetchData('categories');

  return {
    props: {
      categories,
    }
  }
}