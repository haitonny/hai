module.exports = {
  purge: ["src/App.vue", "src/assets/styles/**", "src/components/**", "src/views/**"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "var(--spacing-4)",
      },
    },
  },
  variants: {},
  plugins: [require("@vunamhung/tailwind-config"), require("@tailwindcss/custom-forms")],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
