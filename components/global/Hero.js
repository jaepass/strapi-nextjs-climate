import Cta from './Cta';

const Hero = ({ hero }) => {
  if (!hero) {
    return null;
  }

  const {
    header,
    ctas = []
  } = hero;

  return (
    <section className="p-6 pt-32 pb-12 md:pt-48 md:pb-32 lg:pb-36 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-2xl mx-auto text-center">
        <div className="hero__content">
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-wider font-extrabold leading-tight text-transparent bg-gradient-to-tl from-green-dark to-green-default bg-clip-text">{header.title}</h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 opacity-75 sm:text-lg md:mt-5 md:max-w-3xl">{header.subtitle}</p>
            { ctas.length > 0 && ( 
              <div className="text-center mt-6 sm:inline-flex">
                { ctas.map((cta) => (
                  <div className="mr-4 last:mt-4 md:last:mt-0 last:mr-0" key={cta.id}>
                    <Cta
                      label={cta.label}
                      href={cta.href}
                      primary={cta.isPrimary}
                      className="mr-4"
                    >
                      { cta.label }
                    </Cta>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </section>
  );
}

export default Hero;