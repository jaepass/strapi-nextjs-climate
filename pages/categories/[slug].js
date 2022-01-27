// import qs from 'qs';
// import { fetchData } from '@/utils/data';

// const query = qs.stringify({
//   populate: {
//     categories: {
//       sort: ['name:asc'],
//       filters: {
//         name: {
//           $eq: 'Cars',
//         },
//       },
//     },
//   },
// }, {
//   encodeValuesOnly: true,
// });

// export async function getStaticProps({ params }) {
//   const { slug } = params;

//   const category = await commerce.categories.retrieve(slug, {
//     type: 'slug',
//   });

//   const { data: categories } = await fetchData('categories');
//   const { data: products } = await fetchData('listings', query);

//   return {
//     props: {
//       category,
//       products,
//     },
//   };
// }