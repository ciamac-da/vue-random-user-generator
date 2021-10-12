const app = Vue.createApp({
    data() {
        return {
            firstName : "Cia",
            lastName  : "Doe",
            email     : "cia.doe@doe.com",
            picture   : "https://randomuser.me/api/portraits/lego/4.jpg"
        }
    }
})

app.mount("#app")
