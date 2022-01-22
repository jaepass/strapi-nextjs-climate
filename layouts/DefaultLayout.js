import Head from 'next/head';
import Navigation from '@/components/Navigation.js';
import Footer from '@/components/Footer.js';

const DefaultLayout = ({
  children,
  title,
  subtitle,
  description
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation />
      </header>
      <main className="container">
        { children }
      </main>
      <Footer />
    </>
  );
}

export default DefaultLayout;