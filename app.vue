<template>
  <div>
    <Transition name="preloader-fade">
      <ThePreloader v-if="isLoading"/>
    </Transition>

    <div v-show="!isLoading" className="main-content">
      <NuxtPage/>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';

const isLoading = ref(true);

onMounted(() => {
  // Устанавливаем таймер, который скроет прелоадер.
  // 3000 мс - это общее время анимации + небольшая задержка.
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);

});
</script>

<style>
/* Стили для плавного исчезновения прелоадера */
.preloader-fade-leave-active {
  transition: opacity 0.3s ease-out;
  transition-delay: 0.2s; /* Небольшая задержка перед тем, как v-if удалит элемент */
}

.preloader-fade-leave-to {
  opacity: 0;
}
</style>