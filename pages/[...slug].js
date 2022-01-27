import delve from 'dlv';
import { getData } from '@/utils/data';
import { getDataDependencies } from './api/data';

const Pages = ({ pageData }) => {
  const sections = delve(pageData, 'sections');

  return <div></div>
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  console.log('Slug', slug);
  
  try {
    const data = getData(slug);
    const res = await fetch(delve(data, 'data'));
    const json = await res.json();

    const pageData = await getDataDependencies(json, '0');
    console.log('Page data', pageData);
  } catch (error) {
    console.error(error);
  }
}

export default Pages;