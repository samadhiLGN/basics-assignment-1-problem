const app = Vue.createApp({
    data() {
        return {
            myName:'Samadhi Madushanka',
            myAge: 31,
            myImgUrl: 'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        };

    },
    methods: {
        myAgeAddition() {
            return this.myAge + 5;
        },
        calculateRandom() {
            return Math.random();
        }
    
    }
})

app.mount('#assignment');