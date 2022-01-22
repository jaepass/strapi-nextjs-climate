import DynamicLink from '@/components/DynamicLink';

const ListingCardItem = ({ listing }) => {
  return (
    <DynamicLink
      className="shadow-sm"
      link={listing.attributes.website}
      classObj='p-8 relative shadow-md overflow-hidden transition duration-150 ease-in-out bg-white hover:bg-gray-100 rounded-tr-3xl bg-gradient-to-r from-green-default to-green-light hover:from-green-light hover:to-green-default'
    >
      <div>
        <h1>{listing.attributes.name}</h1>
        <p>{listing.attributes.description}</p>
      </div>
    </DynamicLink>
  )
}

export default ListingCardItem;