import { fetchData } from 'utils/fetchData';
import ListingsList from '@/components/listing/ListingsList';

// List of listings
export default function ListingsPage ({ listings }) {
  return (
    <>
      <section>
        Banner
      </section>
      <section>
        <ListingsList listings={listings} />
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const { data: listings } = await fetchData('listings');

  return {
    props: {
      listings,
    }
  }
}