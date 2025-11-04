<template>
  <Navbar />
  <div
    class="hero"
    :style="{ backgroundImage: `url(${require('@/assets/fundo_4.webp')})` }"
  >
    <div class="card">
      <div class="card-top" aria-hidden="true"></div>
      <div class="card-body">
        <h2 class="title">Login</h2>

        <form @submit.prevent="login" class="form">
          <div v-if="errorMessage" class="form-error">{{ errorMessage }}</div>
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
              v-model="email"
              placeholder="Email"
              autocomplete="email"
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
              placeholder="Senha"
              autocomplete="current-password"
            />
          </label>

          <div class="options">
            <label class="remember">
              <input type="checkbox" v-model="remember" />
              <span class="checkbox-custom"></span>
              Lembrar me
            </label>
            <a class="forgot" href="#">Esqueci minha senha</a>
          </div>

          <button class="btn-login" type="submit" :disabled="loading">
            <span v-if="!loading">Login</span>
            <span v-else>Entrando...</span>
          </button>

          <div class="create">Criar Conta</div>
        </form>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "@/components/navBar.vue";
import Footer from "@/components/footerPage.vue";
import { loginUser, setAuthToken } from "@/services/api.js";

export default {
  name: "LoginPage",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      email: "",
      password: "",
      remember: false,
      loading: false,
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      this.errorMessage = "";
      this.loading = true;
      try {
        const res = await loginUser(this.email, this.password);
        // exemplo de dados retornados: { idToken, refreshToken, expiresIn, localId }
        if (res.idToken) {
          localStorage.setItem("idToken", res.idToken);
        }
        if (res.refreshToken) {
          localStorage.setItem("refreshToken", res.refreshToken);
        }
        // configura header Authorization para futuras chamadas
        setAuthToken(res.idToken);

        // redireciona para mainPage (ou rota desejada)
        this.$router.push({ path: "/mainPage" });
      } catch (err) {
        alert("Login falhou:", err);
        // err pode ser um objeto vindo do backend
        this.errorMessage =
          (err && err.error && err.error.message) || err.message || String(err);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
/* Página inteira */
.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* efeito parallax */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  font-family: serif;
}

.card {
  width: 360px;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(11, 4, 25, 0.6);
  overflow: hidden;
  background: #181818; /* mesmo tom do navbar/footer */
  border-top: 3px solid rgba(212, 175, 55, 0.08);
}

.card-top {
  height: 120px;
  /* leve brilho dourado para combinar com o tema */
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.08) 0%,
    rgba(212, 175, 55, 0.03) 60%
  );
  background-size: cover;
}

.card-body {
  padding: 22px 28px 28px 28px;
}

.title {
  margin: 0 0 14px 0;
  font-size: 30px;
  color: #d4af37; /* título dourado */
  text-shadow: 2px 2px 8px #000, 0 0 16px #222;
  font-weight: bold;
  font-weight: 700;
}

.form {
  display: flex;
  flex-direction: column;
}

.input-wrap {
  display: flex;
  align-items: center;
  background: rgba(212, 175, 55, 0.04); /* fundo escuro com leve tom dourado */
  border-radius: 20px;
  padding: 8px 12px;
  margin-bottom: 12px;
  border: 1px solid rgba(212, 175, 55, 0.06);
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
  color: #fffbe6; /* texto claro sobre fundo escuro */
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
  background: rgba(212, 175, 55, 0.06);
  display: inline-block;
  position: relative;
  border: 1px solid rgba(212, 175, 55, 0.08);
}
.remember input:checked + .checkbox-custom {
  background: #ffd700;
}

.forgot {
  color: #d4af37;
  text-shadow: 2px 2px 8px #000, 0 0 16px #222;
  text-decoration: none;
}

.btn-login {
  margin-top: 6px;
  background: #d4af37; /* botão dourado */

  color: #181818; /* texto escuro */
  border: none;
  padding: 10px 14px;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
}

.create {
  margin-top: 12px;
  text-align: center;
  color: #f3e7b3;
  font-size: 13px;
}

/* pequenas responsividades */
@media (max-width: 420px) {
  .card {
    width: 92%;
  }
}
</style>
