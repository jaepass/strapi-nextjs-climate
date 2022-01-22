import Link from 'next/link';
import { fetchData } from 'utils/fetchData';

export default function CategoriesPage({ categories }) {
  return (
    // Banner
    <section>
      {categories.map(category => (
        <Link href={`/categories/${category.id}`} key={category.id}>
          <a>{category.attributes.name}</a>
        </Link>
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