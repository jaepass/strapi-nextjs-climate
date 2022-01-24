import DynamicLink from '@/components/DynamicLink';

const CardItem = ({ link, children }) => {
  return (
    <DynamicLink
      link={link}
      classObj='p-8 relative shadow-md overflow-hidden transition duration-150 ease-in-out bg-white hover:bg-gray-100 rounded-tr-3xl bg-gradient-to-r from-green-default to-green-light hover:from-green-light hover:to-green-default'
    >
      { children }
    </DynamicLink>
  )
}

export default CardItem;