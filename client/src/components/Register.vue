<template>
    <div>
        <h1 class="mb-4">Register</h1>

      <form>
            <!-- <input type="text" name="username" placeholder="username" v-model="username"> -->
            <div class="inputs">
              <input class="form-control" type="email" name="email" placeholder="email" v-model="email">
              <input class="form-control my-3" type="password" name="password" placeholder="password" v-model="password">
            </div>
            <div class="error my-3" v-html="error"></div>
            <button class="btn btn-primary" @click="register">Register</button>
        </form>
    </div>
</template>

/* eslint-disable no-alert, no-console */
<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  data() {
    return {
      // username: '',
        email: '',
      password: '',
      error: null
    };
  },
    methods: {
    async register (event) {
      event.preventDefault();
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.email = '';
        this.password = '';
        this.error = '';
      } catch (error) {
        this.error = error.response.data.error;
      }
      }  
    },
//   watch: {
//     email (value) {
//         // eslint-disable-next-line
//         console.log('email has changed: ', value)
//     },
// },
// mounted () {
//     setTimeout(() => {
//         this.email = 'hello world'
//     }, 2000);
// },
};
</script>

<style>
  .inputs {
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
  }
  .error {
    color: red;
  }
</style>
