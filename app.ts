import { serve } from "https://deno.land/std@0.173.0/http/server.ts";
import { Hono } from "https://deno.land/x/hono@v2.7.3/mod.ts";
import {
  getAlbum,
  getAllAlbums,
  getAllStarsAlbums,
  getFiveStarsAlbum,
  getMillionLiveAlbums,
  getShinyColorsAlbums,
} from "./src/controllers/api.ts";

const app = new Hono();

app.get("/", (c) => {
  return c.redirect("https://github.com/lonsagisawa/stream-api.kitahina.co");
});
app.get("/album", (c) => {
  return c.json(getAllAlbums());
});
app.get("/album/allstars", (c) => {
  return c.json(getAllStarsAlbums());
});
app.get("/album/millionlive", (c) => {
  return c.json(getMillionLiveAlbums());
});
app.get("/album/shinycolors", (c) => {
  return c.json(getShinyColorsAlbums());
});
app.get("/album/fivestars", (c) => {
  return c.json(getFiveStarsAlbum());
});
app.get("/album/:id", (c) => {
  const id = c.req.param("id");
  return c.json(getAlbum(id));
});

serve(app.fetch);
