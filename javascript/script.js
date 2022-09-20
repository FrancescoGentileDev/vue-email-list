const app = new Vue({
  el: "#app",
  data: {
    emails: [],
  },
  mounted() {
    const promise = new Promise(async (resolve) => {
      const tempEmails = [];

      for (let index = 0; index < 10; index++) {
        await axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            tempEmails.push(response.data.response);
          });
      }

      resolve(tempEmails);
    }).then((emails) => {
      this.emails = emails;
    });
  },
});
