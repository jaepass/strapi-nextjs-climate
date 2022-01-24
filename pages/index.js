import ListingsList from '@/components/listing/ListingsList';
import { useDefaultLayoutContext } from '@/context/defaultLayout';

export default function Home() {
  const { listings } = useDefaultLayoutContext();

  return (
    <section>
      <h1>Featured listings</h1>
      <ListingsList listings={listings} length={4} />
    </section>
  )
}