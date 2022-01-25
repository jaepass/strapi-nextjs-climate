import qs from 'qs';
import Link from 'next/link';
import { useDefaultLayoutContext } from '@/context/defaultLayout';
import { fetchData } from 'utils/data';
import ListingsList from '@/components/listing/ListingsList';

// const getCategoryQuery = (categoryString) => {
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
  populate: {
    hero: {
      populate: '*',
    }
  }
}, {
    ecodeValuesOnly: true,
});

// List of listings
export default function ListingsPage ({ attributes }) {
  const { listings } = useDefaultLayoutContext();

  return (
    <section className="relative pt-40">
      <section>
        {/* <h1>Categories filter</h1> */}
        {/* { categories?.map((category) => (
          <Link href={ `http://localhost:3000/api/listings?populate[categories][sort][0]=name%3Aasc&populate[categories][filters][name][$eq]=${category.attributes.name}`} key={category.attributes.name}>
            <a>{ category.attributes.name }</a>
          </Link>
      ))} */}
      </section>
      <ListingsList listings={listings} />
    </section>
  );
}

// export async function getStaticProps() {
//   const { data: { attributes } } = await fetchData('listings-page', query);

//   return {
//     props: {
//       attributes
//     }
//   }
// }