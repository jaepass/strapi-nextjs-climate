import CardItem from '../CardItem';

const ListingsList = ({ listings, length }) =>{
  return (
    <div className="mx-20 py-20 grid md:grid-cols-3 gap-8">
      { listings?.slice(0, length ? length : undefined).map((listing) => (
        <CardItem
          key={listing.id}
          link={listing.attributes.website}
        >
          { listing.attributes.name }
          { listing.attributes.description }
          { listing.attributes.categories.data.map((category) => (
            <p
              key={category.id}
              className="justify-center flex bg-white text-black text-xs font-bold uppercase px-2 py-1 rounded-full"
            >
              { category.attributes.name }
            </p>
          )) }
        </CardItem>
      )) }
    </div>
  )
}

export default ListingsList;