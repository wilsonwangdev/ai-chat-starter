import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});

export const { GET } = createFromSource(source, {
  language: 'english',
});
