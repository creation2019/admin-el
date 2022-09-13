import { defineStore } from "pinia"

export const useUserStore = defineStore({
  id: 'user',
  state () {
    return {
      user: {}
    }
  },
  actions: {
    getuser (user) {
      this.user = user
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: localStorage
      }
    ]
  }

})
