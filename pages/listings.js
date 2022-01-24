import qs from 'qs';
import Link from 'next/link';
import { fetchData } from 'utils/fetchData';
import ListingsList from '@/components/listing/ListingsList';

// const getQuery = (queryString) => {
//   const query = qs.stringify({
//     populate: {
//       categories: {
//         sort: ['name:asc'],
//         filters: {
//           name: {
//             $eq: queryString,
//           },
//         },
//       },
//     },
//   }, {
//     ecodeValuesOnly: true,
//   });

//   return query;
// }

const query = qs.stringify({
  populate: ['categories']
}, {
    ecodeValuesOnly: true,
});

// List of listings
export default function ListingsPage ({ listings , categories}) {
  return (
    <>
      <section>
        <section>
          <h1>Categories filter</h1>
          { categories.map((category) => (
            <Link href={ `http://localhost:3000/api/listings?populate[categories][sort][0]=name%3Aasc&populate[categories][filters][name][$eq]=${category.attributes.name}`} key={category.attributes.name}>
              <a>{ category.attributes.name }</a>
            </Link>
        ))}
        </section>
        <section>
          Listing list section
          <ListingsList listings={listings} />
        </section>
    </section>
    </>
  );
}

export async function getStaticProps() {
  const { data: listings } = await fetchData('listings', query);
  const { data: categories } = await fetchData('categories');

  return {
    props: {
      listings,
      categories
    }
  }
}