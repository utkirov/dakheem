<template>
  <section id="contacts" class="container location-section">
    <div data-aos="fade-up">
      <SectionTitle>{{ $t('location.section_title') }}</SectionTitle>
      <h3 class="heading">{{ $t('location.heading') }}</h3>
    </div>
    <div class="location-grid">

      <div class="slider-block" data-aos="fade-right" data-aos-delay="100">
        <swiper
            :modules="modules"
            :loop="true"
            :space-between="10"
            :pagination="{ clickable: true }"
            :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
            class="location-slider"
        >
          <swiper-slide v-for="image in locationImages" :key="image">
            <img :src="image" alt="Location view" class="slide-image" />
          </swiper-slide>
        </swiper>
      </div>

      <div class="info-block" data-aos="fade-left" data-aos-delay="300">
        <div class="map-wrapper">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.348621124231!2d69.2669458760011!3d41.32296997130283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3d8d6a339d%3A0xad8c55e933276606!2sHilton%20Tashkent%20City!5e0!3m2!1sen!2s!4v1718485235399!5m2!1sen!2s"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <a
            :href="googleMapsLink"
            target="_blank"
            rel="noopener noreferrer"
            class="map-button-link"
        >
          <BaseButton variant="secondary" class="map-button">
            <Icon name="ph:map-trifold-bold" />
            <span>{{ $t('location.open_in_maps') }}</span>
          </BaseButton>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Используем правильные импорты из Swiper для Nuxt 3 / Vue 3
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { ref } from 'vue';

// Подключаем модули Swiper
const modules = [Autoplay, Pagination];

// Данные для компонента
const locationImages = ref([
  '/location-1.jpg', // Убедитесь, что эти изображения есть в папке /public
  '/location-2.jpg',
  '/location-3.jpg'
]);

// Замените эту ссылку на вашу ссылку в Google Maps
const googleMapsLink = ref('https://maps.app.goo.gl/9i5z2Zz3JpE4wS1w7');
</script>

<style scoped>
.location-section {
  padding: 64px 20px 96px;
  overflow-x: hidden;
}
.heading {
  margin-bottom: 40px;
  max-width: 36rem;
  font-size: 30px;
  font-weight: 500;
  color: var(--foreground);
}
.location-grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 колонка на мобильных */
  gap: 32px;
}

/* Слайдер */
.slider-block {
  width: 100%;
  height: 450px; /* Фиксированная высота для мобильных */
  border-radius: 12px;
  overflow: hidden;
}
.location-slider {
  width: 100%;
  height: 100%;
}
.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* Стилизация стандартной пагинации Swiper */
.location-slider :deep(.swiper-pagination-bullet) {
  background-color: var(--foreground);
  opacity: 0.5;
}
.location-slider :deep(.swiper-pagination-bullet-active) {
  background-color: var(--primary);
  opacity: 1;
}

/* Правая колонка */
.info-block {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.map-wrapper {
  flex-grow: 1;
  min-height: 250px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
}
.map-button-link {
  text-decoration: none;
}
.map-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

/* Адаптивность */
@media (min-width: 1024px) {
  .location-section {
    padding-top: 96px;
    padding-bottom: 96px;
  }
  .location-grid {
    grid-template-columns: minmax(0, 1fr) minmax(0, 420px);
    gap: 48px;
  }
  .heading {
    font-size: 36px;
  }
  .slider-block {
    height: 500px;
  }
  .info-block {
    height: 500px;
  }
}
</style>