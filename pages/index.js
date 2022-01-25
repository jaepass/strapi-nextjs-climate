import { useDefaultLayoutContext } from '@/context/defaultLayout';
// import Hero from '@/components/Hero';
import ListingsList from '@/components/listing/ListingsList';

export default function Home() {
  const { listings } = useDefaultLayoutContext();

  return (
    <section>
      <h1>Featured listings</h1>
      {/* <Hero /> */}
      <ListingsList listings={listings} length={4} />
    </section>
  )
}