import ListingCardItem from './ListingCardItem';

const ListingsList = ({ listings, length }) =>{
  return (
    <div className="mx-20 py-20 grid md:grid-cols-3 gap-8">
      { length
        ? listings?.slice(0, length).map((listing) => (
          <ListingCardItem key={listing.id} listing={listing} />
        )) : listings.map((listing) => (
        <ListingCardItem key={listing.id} listing={listing} />
      )) }
    </div>
  )
}

export default ListingsList;