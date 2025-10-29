<template>
  <div class="login-page">
    <div class="card">
      <div class="card-top" aria-hidden="true"></div>
      <div class="card-body">
        <h2 class="title">Login</h2>

        <form @submit.prevent="login" class="form">
          <label class="input-wrap">
            <svg
              class="icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z"
                stroke="#fff"
                stroke-width="1.2"
              />
              <path
                d="M4 20c0-4 4-6 8-6s8 2 8 6"
                stroke="#fff"
                stroke-width="1.2"
                stroke-linecap="round"
              />
            </svg>
            <input
              type="text"
              v-model="username"
              placeholder="Username"
              autocomplete="username"
            />
          </label>

          <label class="input-wrap">
            <svg
              class="icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="11"
                width="18"
                height="10"
                rx="2"
                stroke="#fff"
                stroke-width="1.2"
              />
              <path
                d="M7 11V8a5 5 0 0 1 10 0v3"
                stroke="#fff"
                stroke-width="1.2"
                stroke-linecap="round"
              />
            </svg>
            <input
              type="password"
              v-model="password"
              placeholder="Password"
              autocomplete="current-password"
            />
          </label>

          <div class="options">
            <label class="remember">
              <input type="checkbox" v-model="remember" />
              <span class="checkbox-custom"></span>
              remember me
            </label>
            <a class="forgot" href="#">forgot password</a>
          </div>

          <button class="btn-login" type="submit">Login</button>

          <div class="create">Create Account</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      remember: false,
    };
  },
  methods: {
    login() {
      // lógica de login mínima – substitua por chamada real à API
      console.log("login", {
        username: this.username,
        password: this.password,
        remember: this.remember,
      });
      // exemplo: this.$router.push('/') após autenticação
    },
  },
};
</script>

<style scoped>
/* Página inteira */
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #6b3b6b 0%, #3b2150 100%);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial;
}

.card {
  width: 360px;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(11, 4, 25, 0.5);
  overflow: hidden;
  background: #f6f3f6;
}

.card-top {
  height: 120px;
  background: linear-gradient(135deg, #8b5fa6 0%, #e6a0b8 60%);
  background-size: cover;
}

.card-body {
  padding: 22px 28px 28px 28px;
}

.title {
  margin: 0 0 14px 0;
  font-size: 22px;
  color: #1d1b1f;
  font-weight: 700;
}

.form {
  display: flex;
  flex-direction: column;
}

.input-wrap {
  display: flex;
  align-items: center;
  background: #ffd1df;
  border-radius: 20px;
  padding: 8px 12px;
  margin-bottom: 12px;
}

.input-wrap .icon {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  opacity: 0.9;
}

.input-wrap input {
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  font-size: 14px;
  color: #3b233a;
}

.options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  color: #5b4a57;
  margin-bottom: 12px;
}

.remember {
  display: flex;
  align-items: center;
  gap: 8px;
}
.remember input {
  display: none;
}
.checkbox-custom {
  width: 14px;
  height: 14px;
  border-radius: 4px;
  background: #2b1b2b;
  display: inline-block;
  position: relative;
}
.remember input:checked + .checkbox-custom {
  background: #6b4a86;
}

.forgot {
  color: #6a4c77;
  text-decoration: none;
}

.btn-login {
  margin-top: 6px;
  background: #6b466e;
  color: #fff;
  border: none;
  padding: 10px 14px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

.create {
  margin-top: 12px;
  text-align: center;
  color: #8a6d88;
  font-size: 13px;
}

/* pequenas responsividades */
@media (max-width: 420px) {
  .card {
    width: 92%;
  }
}
</style>
