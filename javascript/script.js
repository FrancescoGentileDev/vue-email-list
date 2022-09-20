const app = new Vue({
  el: "#app",
  data: {
    emails: [],
  },
    mounted() {
        let promises = [];
      const mailer = ()=> new Promise((resolve, reject) => {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) => {
         resolve(response.data.response) 
        }) 
      }) 
        
      for (let i = 0; i < 10; i++) {
              promises.push(mailer())
      }

        
        
        
      console.log(promises)

      Promise.all(promises)
          .then((value) => {
              for (let mail of value) {
              this.emails.push(mail)
          }
      })
    },
});
