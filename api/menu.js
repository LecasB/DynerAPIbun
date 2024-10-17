// api/menu.js
import db from "../firebase.js";

export const menuHandler = async (req) => {
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
};
