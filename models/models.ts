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
  timeRange?: string | null;
  price?: string | null;
  style: {
    gridColumnStart?: string;
    gridColumnEnd?: string;
    gridColumn?: string;
    fontSize?: string;
  },
  backgroundImage: string
  cards: CardData[]
};

export type CardData = {
  title: string;
  description: string;
  timeRange: string;
  price: string;
  style: {
    gridColumnStart?: string;
    gridColumnEnd?: string;
    gridColumn?: string;
    fontSize?: string;
  },
  backgroundImage: string
};
