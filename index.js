// index.js
import { serve } from "bun";
import { menuHandler } from "./api/menu.js";
import { categoriesHandler } from "./api/categories.js";

serve({
  fetch: async (req) => {
    const url = new URL(req.url);

    if (url.pathname === "/api/menu") {
      return await menuHandler(req);
    } else if (url.pathname === "/api/categories") {
      return await categoriesHandler(req);
    } else {
      return new Response("Not Found", { status: 404 });
    }
  },
  port: 3000,
});
