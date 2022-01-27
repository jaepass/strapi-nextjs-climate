import DynamicLink from './DynamicLink';

const Cta = ({
  label,
  href,
  primary = true,
  button = false,
  onHandleClick
}) => {

  return (
    <>
      { button ? (
        // If is button, use onClick handler to handle route change
        <>
          { primary ? (
            <DynamicLink
              type="button"
              aria-label={label}
              role="button"
              button
              classObj="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm tracking-wider font-semibold rounded-md text-white bg-green-default hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-default transition duration-150 ease-in-out"
              onHandleClick={onHandleClick}
            >
              { label }
            </DynamicLink>
          ) : (
            <DynamicLink
              type="button"
              aria-label={label}
              role="button"
              classObj="border-2 border-green-default inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm tracking-wider font-semibold rounded-md text-green-default bg-white hover:text-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-default transition duration-150 ease-in-out "
              onHandleClick={onHandleClick}
            >
              { label }
            </DynamicLink>
          )}
        </>
        ) : (
          <>
            { primary ? (
            <DynamicLink
              type="button"
              aria-label={label}
              role="button"
              classObj="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm tracking-wider font-semibold rounded-md text-white bg-green-default hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-default transition duration-150 ease-in-out"
              link={href}
            >
              { label }
            </DynamicLink>
          ) : (
            <DynamicLink
              type="button"
              aria-label={label}
              role="button"
              classObj="border-2 border-green-default inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm tracking-wider font-semibold rounded-md text-green-default bg-white hover:text-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-default transition duration-150 ease-in-out"
              link={href}
            >
              { label }
            </DynamicLink>
          )}
          </>
        )
      }
    </>
  )
}

export default Cta;