import {defineStore} from "pinia";

export const useTheme = defineStore({
  id: "theme",
  state: () => ({
    theme: null
  }),
});
