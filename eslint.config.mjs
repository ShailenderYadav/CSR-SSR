import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
   {
    // Add your custom rules here
    rules: {
      "@next/next/no-img-element": "off", // Example: disable next.js img element warning
      "react/no-unescaped-entities": "off", // Example: disable HTML entity warning
      "your-other-rule": "off"
    }
  }
];

export default eslintConfig;
