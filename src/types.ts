export type Page = {
  title: string;
  route: string;
  icon?: any;
  id: string;
};

export type Lessons = {
  lesson: string;
  description: string;
  icon?: string;
}[];

export type GalleryItem = {
  img: string;
  title: string;
  featured?: boolean;
  author?: string;
}[];

export type FormData = {
  firstName: string;
  middleName: string;
  lastName: string;
  question: string;
  age: string;
  email: string;
  phone: string;
};
