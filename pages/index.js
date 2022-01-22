import { fetchData } from '@/utils/fetchData';
import ListingsList from '@/components/listing/ListingsList';

/**
 * To-DO:
 * 
 * - [ ] Parse in listings from the API
 * - [ ] Add the filtered listings section to the page
 */


export default function Home({ listings }) {
  return (
    <section>
      <ListingsList listings={listings} length={4} />
    </section>
  )
}

export async function getServerSideProps() {
  const { data: listings } = await fetchData('listings');

  return {
    props: {
      listings,
    }
  }
}
