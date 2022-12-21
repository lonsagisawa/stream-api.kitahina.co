import ShinyColors from "../model/ShinyColors.ts";
import { Album } from "../types/Album.ts";

const findAlbum = (albumId: string): Album | undefined =>
  ShinyColors.find(({ id }) => id === albumId);

const isMissing = (value: any) => value === null || value === undefined;

export const getAlbums = ({ response }: { response: any }) => {
  response.status = 200;
  response.body = { msg: "Albums fetched.", data: ShinyColors };
  return;
};

export const getAlbum = ({
  params,
  response,
}: {
  params: any;
  response: any;
}) => {
  const album: Album | undefined = findAlbum(params.id);
  if (isMissing(album)) {
    response.body = { msg: "Album not found." };
    response.status = 404;
    return;
  }
  response.body = { msg: "Album found.", data: album };
  response.status = 200;
};
