import { useDefaultLayoutContext } from '@/context/defaultLayout';
import DynamicLink from '@/components/global/DynamicLink';

const Navigation = () => {
  const {
    defaultPage: { attributes: { navigation } },
  } = useDefaultLayoutContext();

  if (!navigation) {
    return null;
  }

  return (
    <nav className="flex items-center justify-center inline-block align-middle h-20 w-full bg-white fixed z-50 space-x-3 shadow-md">
      <ul className="flex flex-wrap w-full md:flex-1 px-7">
        { navigation?.navigationLinks.map((link) => (
          <li className="last:ml-auto mr-6 last:mr-0" key={link.label}>
            <DynamicLink
              classObj="border-b-4 border-white transition duration-150 font-bold ease-linear hover:border-b-4 hover:border-green-default flex"
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