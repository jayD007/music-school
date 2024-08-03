import { Lessons } from '../../types';
import { accordion, keyboard, orgelles, piano } from './data';

export const lessonsData: Lessons = [
  {
    lesson: 'Pianoles',
    description: piano,
    icon: 'DraftsIcon',
  },
  {
    lesson: 'Keyboardles',
    description: keyboard,
    icon: 'SendIcon',
  },
  {
    lesson: 'Orgelles',
    description: orgelles,
    icon: 'DraftsIcon',
  },
  {
    lesson: 'Accordeonles',
    description: accordion,
    icon: 'SendIcon',
  },

  {
    lesson: 'Accordeonles',
    description: 'De piano is een fantastisch instrument.',
    icon: 'SendIcon',
  },
];
