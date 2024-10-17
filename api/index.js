import { serve } from "bun";
import db from "../firebase.js";

serve({
  fetch: async (req) => {
    const url = new URL(req.url);

    if (url.pathname === "/menu") {
      try {
        const dataRef = db.ref("menu/menus");
        const snapshot = await dataRef.get();
        if (snapshot.exists()) {
          return new Response(JSON.stringify(snapshot.val()), {
            headers: { "Content-Type": "application/json" },
          });
        } else {
          return new Response(JSON.stringify({ error: "No data found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
          });
        }
      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    return new Response("Not Found", { status: 404 });
  },
  port: 3000,
});
