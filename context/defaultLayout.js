import { createContext, useContext } from 'react';
import Navigation from '@/components/global/Navigation';
import Footer from '@/components/global/Footer';

// Create the context object
const DefaultLayoutContext = createContext(null);

const DefaultLayoutProvider = ({ children, value }) => {
  return (
    <DefaultLayoutContext.Provider value={value}>
      <Navigation />
      <main className="pr-40">
        <section className="pt-40 pl-40">
          { children }
        </section>
      </main>
      <Footer />
    </DefaultLayoutContext.Provider>
  )
};

// Hook to get the context
const useDefaultLayoutContext = () => {
  return useContext(DefaultLayoutContext);
}

export { DefaultLayoutProvider, useDefaultLayoutContext };