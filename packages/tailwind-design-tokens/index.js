import colors from './colors.js';
import spacing from './spacing.js';
import typography from './typography.js';

/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors,
      spacing,
      fontSize: typography,
    },
  },
};

export default config;

// Export separately for semantic tokens or direct usage
export { colors, spacing, typography };
