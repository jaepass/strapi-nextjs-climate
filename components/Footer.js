import DynamicLink from './DynamicLink';

const Footer = () => {

  // Footer links list
  const footerLinks = [
    { name: 'Strapi', url: 'https://strapi.io/' },
    { name: 'Next.js', url: 'https://nextjs.org/' },
    { name: 'Vercel', url: 'https://vercel.com/' },
  ];

  return (
    <footer className="pt-16 pb-14 border items-center flex justify-center">
      <div>
        <DynamicLink
          link="https://jaeriah.com"
          classObj="transition duration-150 text-gray-900 hover:text-gray-600"
        >
          A climate advocacy project made with &#x2665; by <span className="font-medium text-green-default">Jaeriah</span>
        </DynamicLink>
        <div className="pt-3 text-center">
          {footerLinks.map((link) => (
            <DynamicLink
              key={link.name}
              classObj="border-b-4 border-white transition duration-150 ease-linear hover:border-b-4 hover:border-green-default mr-3 last:mr-0"
              link={link.url}
            >
              {link.name}
            </DynamicLink>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;