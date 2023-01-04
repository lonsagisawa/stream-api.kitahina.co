import { serve } from "https://deno.land/std/http/server.ts";
import { Hono } from "https://deno.land/x/hono/mod.ts";
import { getAlbum, getAlbums } from "./src/controllers/api.ts";

const app = new Hono();

app.get("/", (c) => c.text("Hello! Hono!"));
app.get("/album", (c) => {
  return c.json(getAlbums());
});
app.get("/album/:id", (c) => {
  const id = c.req.param("id");
  return c.json(getAlbum(id));
});

serve(app.fetch);
