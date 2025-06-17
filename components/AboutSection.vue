<template>
  <section id="about" class="container about-section">
    <div class="about-grid">

      <div class="text-content">
        <div data-aos="fade-right">
          <SectionTitle>{{ $t('about.section_title') }}</SectionTitle>
          <h3 class="heading">{{ $t('about.heading') }}</h3>
        </div>
        <p class="text" data-aos="fade-right" data-aos-delay="200">
          {{ $t('about.text') }}
        </p>
      </div>

      <div class="image-wrapper" data-aos="fade-left" data-aos-delay="300">
        <img
            src="/about.JPG"
            alt="Luxury living in Dubai"
            class="about-image"
            :style="imageParallaxStyle"
        >
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useWindowScroll } from '@vueuse/core';

// Логика для параллакс-эффекта остается без изменений
const { y } = useWindowScroll();

const imageParallaxStyle = computed(() => ({
  transform: `translateY(${y.value * 0.2}px)`
}));
</script>

<style scoped>
.about-section {
  padding: 96px 20px;
  overflow-x: hidden;
}
.about-grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 колонка на мобильных по умолчанию */
  gap: 48px;
  align-items: center;
}

/* Стили для текстового блока */
.heading {
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.2;
  color: var(--foreground);
}
.text {
  font-size: 18px;
  line-height: 1.6;
  color: var(--muted);
}

/* Стили для контейнера изображения, чтобы параллакс работал корректно */
.image-wrapper {
  border-radius: 8px;
  height:700px;
  overflow: hidden; /* Обрезаем изображение, которое выходит за рамки */
}
.about-image {
  width: 100%;
  height: 100%; /* Делаем изображение выше, чтобы при сдвиге не было пустых мест */
  object-fit: cover;
  /* Позиционируем по центру, чтобы при сдвиге выглядело хорошо */
  object-position: center;
  /* will-change помогает браузеру оптимизировать анимацию */
  will-change: transform;
}


/* Адаптивность для больших экранов */
@media (min-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr 1fr; /* 2 колонки на десктопах */
    gap: 80px;
  }
}

/* Адаптивность для мобильных */
@media (max-width: 1023px) {
  .about-section {
    padding: 64px 20px;
  }
  /* На мобильных ставим картинку перед текстом */
  .image-wrapper {
    grid-row: 1;
    height: 350px;
  }
}
</style>