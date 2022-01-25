import { useDefaultLayoutContext } from '@/context/defaultLayout';
import DynamicLink from '../global/DynamicLink';

const Footer = () => {
  const {
    defaultPage: { attributes: { footer } },
  } = useDefaultLayoutContext();

  return (
    <footer className="mt-20 pt-16 pb-14 border items-center flex justify-center">
      <div>
        <DynamicLink
          link={footer.footerTitle.href}
          classObj="transition duration-150 text-gray-900 hover:text-gray-600"
        >
          {footer?.footerTitle.label}
        </DynamicLink>
        <div className="pt-3 text-center">
          {footer?.footerLinks.map((link) => (
            <DynamicLink
              key={link.label}
              classObj="text-gray-600 border-b-4 border-white transition duration-150 ease-linear hover:border-b-4 hover:border-green-default mr-3 last:mr-0"
              link={link.href}
            >
              {link.label}
            </DynamicLink>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;