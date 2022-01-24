import CardItem from '@/components/CardItem';
import { fetchData } from 'utils/fetchData';

export default function CategoriesPage({ categories }) {
  return (
    // Banner
    <section>
      { categories.map((category) => (
        <CardItem
          key={category.id}
          link={`/categories/${category.id}`}
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