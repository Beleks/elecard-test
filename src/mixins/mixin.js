export const mixinSwitch = {
  data() {
    return {
      open: false,
    };
  },
  computed: {
    svgSwitch() {
      if (this.open) {
        return "SvgHide";
      } else {
        return "SvgOpen";
      }
    },
  },
}
