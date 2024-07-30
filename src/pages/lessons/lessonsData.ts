import { Lessons } from '../../types';
import { piano } from './data/piano';
import { keyboard } from './data/keyboard';
import { orgelles } from './data/orgelles';
import { accordeon } from './data/accordion';
import { introduction } from './data/introduction';

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
    description: accordeon,
    icon: 'SendIcon',
  },
  {
    lesson: 'Doel van de lessen en Lestarieven',
    description: introduction,
    icon: 'SendIcon',
  },
  {
    lesson: 'Accordeonles',
    description: 'De piano is een fantastisch instrument.',
    icon: 'SendIcon',
  },
];
