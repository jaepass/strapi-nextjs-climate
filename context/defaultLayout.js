import { createContext, useContext } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Create the context object
const DefaultLayoutContext = createContext(null);

const DefaultLayoutProvider = ({ children, value }) => {
  return (
    <DefaultLayoutContext.Provider value={value}>
      <Navigation />
      { children }
      <Footer />
    </DefaultLayoutContext.Provider>
  )
};

// Hook to get the context
const useDefaultLayoutContext = () => {
  return useContext(DefaultLayoutContext);
}

export { DefaultLayoutProvider, useDefaultLayoutContext };