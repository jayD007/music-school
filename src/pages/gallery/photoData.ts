import { GalleryItem } from '../../types';
import solo from '../../assest/galleryPhotos/solo.jpg';
import piano_les from '../../assest/galleryPhotos/piano_les.jpg';
import accordion1 from '../../assest/galleryPhotos/accordion1.jpg';
import accordion2 from '../../assest/galleryPhotos/accordion2.jpg';
import finalGroupPerformance from '../../assest/galleryPhotos/finalGroupPerformance.jpg';
import finalPerformance from '../../assest/galleryPhotos/finalPerformance.jpg';

import groupPerformance from '../../assest/galleryPhotos/groupPerformance.jpg';

const altTag = (alt: string) => {
  return 'muzik-school-heesch-frank' + alt;
};

export const itemData: GalleryItem = [
  {
    img: solo,
    alt: altTag('solo'),
    featured: true,
  },

  {
    img: groupPerformance,
    alt: altTag('groupPerformance'),
  },

  {
    img: finalPerformance,
    alt: altTag('finalPerformance'),
    featured: true,
  },
  {
    img: piano_les,
    alt: altTag('piano-lesson'),

    featured: true,
  },
  {
    img: finalGroupPerformance,
    alt: altTag('final-group-performance'),
  },
  {
    img: accordion2,
    alt: altTag('accordion'),
  },
  {
    img: accordion1,
    alt: altTag('accordion'),
  },
];
