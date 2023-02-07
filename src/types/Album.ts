export type Album = {
  id: string;
  name: string;
  brand: string;
  series?: string;
  cover: string;
  platform: {
    spotify?: string;
    applemusic?: string;
    amazon?: string;
  };
  songs?: Array<string>;
};
