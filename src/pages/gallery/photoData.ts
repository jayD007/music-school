import { GalleryItem } from '../../types';
import solo from '../../assest/galleryPhotos/solo.jpg';
import piano_les from '../../assest/galleryPhotos/piano_les.jpg';
import accordion1 from '../../assest/galleryPhotos/accordion1.jpg';
import accordion2 from '../../assest/galleryPhotos/accordion2.jpg';
import finalGroupPerformance from '../../assest/galleryPhotos/finalGroupPerformance.jpg';
import finalPerformance from '../../assest/galleryPhotos/finalPerformance.jpg';

import groupPerformance from '../../assest/galleryPhotos/groupPerformance.jpg';

export const itemData: GalleryItem = [
  {
    img: solo,
    title: 'Breakfast',
    author: '@bkristastucchio',
    featured: true,
  },

  {
    img: groupPerformance,
    title: 'Camera',
    author: '@helloimnik',
  },

  {
    img: finalPerformance,
    title: 'Burger',
    author: '@rollelflex_graphy726',
    featured: true,
  },
  {
    img: piano_les,
    title: 'Honey',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: finalGroupPerformance,
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: accordion2,
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: accordion1,
    title: 'Bike',
    author: '@southside_customs',
  },
];
