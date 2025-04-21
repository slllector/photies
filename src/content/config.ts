import { defineCollection } from 'astro:content';
import { cldAssetsLoader } from 'astro-cloudinary/loaders';

export const collections = {
  urbanPhotos: defineCollection({
    loader: cldAssetsLoader({ folder: 'web/urban', context: true, limit: 500 })
  }),
  naturePhotos: defineCollection({
    loader: cldAssetsLoader({ folder: 'web/nature', context: true, limit: 500 })
  }),
  landscapePhotos: defineCollection({
    loader: cldAssetsLoader({ folder: 'web/landscapes', context: true, limit: 500 })
  }),
  plantPhotos: defineCollection({
    loader: cldAssetsLoader({ folder: 'web/plants', context: true, limit: 500 })
  }),
};