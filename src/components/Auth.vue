<template>
  <div class="auth-page" :style="{ backgroundImage: `url('${currentBg}')` }">
    <div class="overlay"></div>

    <div class="auth-container">
      <transition name="fade-slide" mode="out-in">
        <div :key="activeTab" class="auth-card">
          <!-- 🔐 LOGIN -->
          <form v-if="activeTab === 'login'" class="auth-form" @submit.prevent="loginUser">
            <h2 class="glow-text">Welcome Back 👋</h2>
            <input v-model="username" type="text" placeholder="Username" />
            <input v-model="password" type="password" placeholder="Password" />
            <button class="btn-glow" type="submit">Login</button>

            <p class="toggle">
              Don’t have an account?
              <span @click="switchTab('signup')">Sign Up</span>
            </p>
            <p class="toggle small" @click="switchTab('reset')">Forgot Password?</p>
          </form>

          <!-- 🧠 SIGNUP -->
          <form v-else-if="activeTab === 'signup'" class="auth-form" @submit.prevent="signupUser">
            <h2 class="glow-text">Create Account 🌱</h2>
            <input v-model="username" type="text" placeholder="Username" required />
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <button class="btn-glow" type="submit">Sign Up</button>

            <p class="toggle">
              Already have an account?
              <span @click="switchTab('login')">Login</span>
            </p>
          </form>

          <!-- 🔁 RESET PASSWORD -->
          <form v-else class="auth-form" @submit.prevent="resetPassword">
            <h2 class="glow-text">Reset Password 🔄</h2>
            <input v-model="email" type="email" placeholder="Enter your email" required />
            <button class="btn-glow" type="submit">Send Reset Link</button>

            <p class="toggle">
              Back to
              <span @click="switchTab('login')">Login</span>
            </p>
          </form>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Emit to parent (App.vue) so it can switch screen -> 'main'
const emit = defineEmits(['authSuccess'])

// 🖼 Background image rotation
const bgImages = [
  '/images/main.jpg',
  '/images/Market/2.jpg',
  '/images/Guide/3.jpg',
  '/images/Disease/1.jpg',
  '/images/Guide/5.jpg',
]
const currentBg = ref(bgImages[0])
setInterval(() => {
  const random = Math.floor(Math.random() * bgImages.length)
  currentBg.value = bgImages[random]
}, 6000)

// 🌿 Auth states
const activeTab = ref('login')
const username = ref('')
const password = ref('')
const email = ref('')

const switchTab = (tab) => (activeTab.value = tab)

// ✅ Instantly tell parent we're authenticated (no DB check)
const loginUser = () => {
  // optionally clear fields:
  // username.value = ''; password.value = '';
  emit('authSuccess')
}

const signupUser = () => alert(`Sign up for ${username.value}`)
const resetPassword = () => alert(`Reset link sent to ${email.value}`)
</script>

<style scoped>
/* (same styles as you had) */
@font-face {
  font-family: 'Jejak';
  src: url('../assets/fonts/JejakCintta.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

/* 🧠 Layout base */
.auth-page {
  position: relative;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.overlay {
  position: absolute;
  inset: 0;
  backdrop-filter: blur(6px) brightness(0.7);
  z-index: 0;
}
.auth-container {
  z-index: 1;
  width: 90%;
  max-width: 420px;
}

/* 🌈 Card */
.auth-card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px 30px;
  color: #fff;
  box-shadow: 0 0 30px rgba(0, 255, 130, 0.3);
  animation: floatUp 1.5s ease forwards;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.auth-form h2 {
  font-family: 'Jejak', cursive;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 10px;
}

input {
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s;
}
input:focus {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 10px #27ae60;
}

.btn-glow {
  background: linear-gradient(90deg, #27ae60, #1abc9c, #2ecc71);
  background-size: 300% 100%;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.4s ease;
  animation: shimmer 3s infinite linear;
}
.btn-glow:hover {
  transform: scale(1.05);
  background-position: 100% 0;
}

.toggle {
  text-align: center;
  margin-top: 10px;
}
.toggle span {
  color: #2ecc71;
  cursor: pointer;
  font-weight: bold;
}
.toggle span:hover {
  text-decoration: underline;
}
.toggle.small {
  font-size: 0.9rem;
  opacity: 0.8;
}

.glow-text {
  background: linear-gradient(120deg, #27ae60, #a9dfbf, #1abc9c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shineGreen 3s linear infinite;
}

/* ✨ Animations */
@keyframes shineGreen {
  0% {
    background-position: -100% center;
  }
  100% {
    background-position: 200% center;
  }
}
@keyframes floatUp {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes shimmer {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* 💫 Transition between forms */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* 📱 Responsive */
@media (max-width: 768px) {
  .auth-card {
    padding: 30px 20px;
  }
  h2 {
    font-size: 1.6rem;
  }
}
</style>
