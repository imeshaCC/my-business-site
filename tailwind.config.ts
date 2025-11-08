import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1e4eea", // tweak later
        },
      },
      fontWeight: {
        headline: "700",
      },
    },
  },
  plugins: [typography, aspectRatio],
};
export default config;