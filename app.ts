import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { getAlbum, getAlbums } from "./src/controllers/api.ts";

const router = new Router();
const port = 3000;

router
  .get("/album", getAlbums)
  .get("/album/:id", getAlbum)
  .get("/", (context) => {
    context.response.body = "stream-api.kitahina.co";
  });

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${port}...`);

await app.listen({ port });
