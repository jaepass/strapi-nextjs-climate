import CardItem from '../CardItem';

const ListingsList = ({ listings, length }) =>{
  return (
    <section className="grid md:grid-cols-3 gap-8 pt-20">
      { listings?.slice(0, length ? length : undefined).map((listing) => (
        <CardItem
          key={listing.id}
          link={listing.attributes.website}
        >
          <h3 className="shadow-xs text-white pb-3">{ listing.attributes.name }</h3>
          <p className="pb-4">{ listing.attributes.description }</p>
          { listing.attributes.categories.data.map((category) => (
            <p
              key={category.id}
              className="inline-flex bg-white text-black text-xxs font-bold uppercase rounded-full px-3 py-1"
            >
              { category.attributes.name }
            </p>
          )) }
        </CardItem>
      )) }
    </section>
  )
}

export default ListingsList;