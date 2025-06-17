<template>
  <div class="preloader-container">
    <div class="curtain left"></div>
    <div class="curtain right"></div>

    <div class="logo-container">
      <a href="/" class="logo">
        <img :src="logoSrc" alt="DAKHEEM Logo" class="logo-image" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Логика для выбора логотипа в зависимости от темы
const colorMode = useColorMode();
const logoSrc = computed(() => {
  return colorMode.value === 'dark' ? '/logo-light.svg' : '/logo-dark.svg';
});
</script>

<style scoped>
.preloader-container {
  position: fixed;
  inset: 0; /* top: 0; right: 0; bottom: 0; left: 0; */
  z-index: 9999;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Скрываем все, что выходит за пределы */
}

/* Стили для шторок */
.curtain {
  position: absolute;
  top: 0;
  width: 50.5%; /* Небольшое наложение, чтобы не было щели по центру */
  height: 100%;
  background-color: var(--background);
  transition: background-color 0.3s ease;
}

.left {
  left: 0;
  /* Анимация для левой шторки: уезжает влево */
  animation: slide-away-left 1s ease-in-out forwards;
  animation-delay: 2s; /* Начинается после анимации логотипа */
}

.right {
  right: 0;
  /* Анимация для правой шторки: уезжает вправо */
  animation: slide-away-right 1s ease-in-out forwards;
  animation-delay: 2s;
}

/* Контейнер для логотипа */
.logo-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  /* Анимация появления и исчезновения логотипа */
  animation: logo-fade 2.5s ease-in-out forwards;
}

.logo-image {
  height: 40px; /* Размер логотипа на прелоадере */
  width: auto;
  color: var(--foreground); /* Цвет для SVG */
}

/* Ключевые кадры для анимаций */
@keyframes slide-away-left {
  to {
    transform: translateX(-100%);
  }
}
@keyframes slide-away-right {
  to {
    transform: translateX(100%);
  }
}

@keyframes logo-fade {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }
  20%, 80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }
}
</style>