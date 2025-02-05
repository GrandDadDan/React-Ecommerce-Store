import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        themeyellow: "#f5e60d",
        themepurple: "#502ec3",
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
