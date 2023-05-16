export type GalleryData = {
  type: string;
  style: {
    backgroundImage: string;
    gridColumnStart: string;
    gridColumnEnd: string;
  };
  isDevelopment: boolean;
  year?: string;
  card?: {
    type: string;
    year: string;
    title: string;
    link: string;
  };
};

export type TextData = {
  title: string;
  description: string;
  style: {
    gridColumnStart?: string;
    gridColumnEnd?: string;
    gridColumn?: string;
    fontSize?: string;
  }
};
