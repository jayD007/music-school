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
