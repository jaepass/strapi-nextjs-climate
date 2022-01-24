import { useDefaultLayoutContext } from '@/context/defaultLayout';
import DynamicLink from '@/components/DynamicLink';

const Navigation = () => {
  const {
    defaultPage: { attributes: { navigation } },
  } = useDefaultLayoutContext();

  return (
    <nav className="w-full bg-white fixed z-50 space-x-3 py-10 shadow-md">
      <ul className="flex flex-wrap w-full md:flex-1">
        { navigation?.navigationLinks.map((link) => (
          <li className="last:ml-auto" key={link.label}>
            <DynamicLink
              classObj="border-b-4 border-white transition duration-150 ease-linear hover:border-b-4 hover:border-green-default mr-3 flex last:ml-auto"
              link={link.href}
            >
              {link.label}
            </DynamicLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;