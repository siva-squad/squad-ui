import { resolve } from "path";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";
import { name } from "./package.json";

const formattedName = name.match(/[^/]+$/)?.[0] ?? name;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  resolve: {
    alias: {
      "@molecules": resolve(__dirname, "src/components/molecules"),
      "@atoms": resolve(__dirname, "src/components/atoms"),
      "@organisms": resolve(__dirname, "src/components/organisms"),
      "@components": resolve(__dirname, "src/components"),
      "@assets": resolve(__dirname, "src/assets"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@": resolve(__dirname, "./"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/**/*.stories.tsx",
        "src/**/const.ts",
        "src/**/consts.ts",
        "src/**/index.ts",
        "src/**/type.ts",
        "src/vite-env.d.ts",
        "src/assets/**/*",
      ],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: formattedName,
      formats: ["es", "umd"],
      fileName: (format) => `${formattedName}.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react/jsx-runtime": "react/jsx-runtime",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
});
