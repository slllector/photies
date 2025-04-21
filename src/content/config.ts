import { defineCollection } from 'astro:content';
import { cldAssetsLoader } from 'astro-cloudinary/loaders';

export const collections = {
  urbanPhotos: defineCollection({
    loader: cldAssetsLoader({
      folder: 'web/urban',
      context: true
    })
  }),
  naturePhotos: defineCollection({
    loader: cldAssetsLoader({
      folder: 'web/nature',
      context: true
    })
  }),
  landscapePhotos: defineCollection({
    loader: cldAssetsLoader({
      folder: 'web/landscapes',
      context: true
    })
  }),
  plantPhotos: defineCollection({
    loader: cldAssetsLoader({
      folder: 'web/plants',
      context: true
    })
  }),
}