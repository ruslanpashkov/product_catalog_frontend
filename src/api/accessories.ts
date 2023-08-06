import { client } from '../helpers/fetchClient';
import { Product } from '../types/Product';

export const getAccessories = async () => {
  const response = await client.get<Product[]>('/accessories');

  return response;
};
