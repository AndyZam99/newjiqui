import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'ni5ielmz',
  dataset: 'production', 
  useCdn: true, 
  apiVersion: '2023-10-01', 
});

export default client;
