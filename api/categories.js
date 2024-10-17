// api/categories.js
import db from "../firebase.js";

export const categoriesHandler = async (req) => {
  try {
    const dataRef = db.ref("menu/categories");
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
