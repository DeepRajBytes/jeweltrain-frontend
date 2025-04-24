export const environment = {
  backendUrl:
    import.meta.env.PRODUCTION_MODE === "production"
      ? "https://jeweltrain-backend.onrender.com/"
      : "http://localhost:3001/",
};
