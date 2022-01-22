import axios from 'axios';
import { baseUrl } from './fetchData';

export const createListing = (newListing) => {
  try {
    axios.post(`${baseUrl}/listings`, newListing)
    console.log('New listing created', newListing)
  } catch (error) {
    console.error(error);
  }
}