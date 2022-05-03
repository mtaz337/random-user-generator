const app = Vue.createApp({
  data(){
    return {
      firstName : 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      gender: 'male',
      picture: 'https://i.pinimg.com/236x/8a/f2/a0/8af2a0c328704957a1375be1e8ff7c87---years-evan.jpg',
    }
  }
})

app.mount('#app') 