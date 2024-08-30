import React from 'react';

export type Page = {
  title: string;
  route: string;
  icon?: any;
};

export type Lessons = {
  lesson: string;
  description: string;
  icon?: string;
}[];
