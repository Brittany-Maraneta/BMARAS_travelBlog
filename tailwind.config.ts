const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
    },
  },
};
