Vue.createApp({
  data() {
    return {
      dark: false,
      buttonText: "toggle-light",
    };
  },
  methods: {
    toggleLight() {
      this.dark = !this.dark;
      if (this.dark) {
        document.body.classList.add("body--dark");
        this.buttonText = "Good Night";
      } else {
        document.body.classList.remove("body--dark");
        this.buttonText = "Good Morning";
      }
    },
  },
}).mount("#app");
