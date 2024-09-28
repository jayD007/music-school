import solo from './solo.jpg';
import piano_les from './piano_les.jpg';
import accordion1 from './accordion1.jpg';
import accordion2 from './accordion2.jpg';
import finalGroupPerformance from './finalGroupPerformance.jpg';
import finalPerformance from './finalPerformance.jpg';
import groupPerformance from './groupPerformance.jpg';
import { GalleryItem } from '../../types';

const altTag = (alt: string) => {
  return 'muzik-school-heesch-frank' + alt;
};

export const galleryPhotos: GalleryItem = [
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
