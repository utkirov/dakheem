<template>
  <section id="contacts" class="container location-section">
    <div data-aos="fade-up">
      <SectionTitle>{{ $t('location.section_title') }}</SectionTitle>
      <h3 class="heading">{{ $t('location.heading') }}</h3>
    </div>
    <div class="location-grid">

      <div class="slider-block" data-aos="fade-right" data-aos-duration="800">
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
            <img :src="image" :alt="$t('location.image_alt')" class="slide-image"/>
          </swiper-slide>
        </swiper>
      </div>

      <div class="info-block">
        <div class="map-wrapper" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
          <iframe
              :src="googleMapsEmbedLink"
              :title="$t('location.map_title')"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <a
              :href="googleMapsLink"
              target="_blank"
              rel="noopener noreferrer"
              class="map-button-link"
          >
            <BaseButton variant="primary" class="map-button">
              <Icon name="ph:map-trifold-bold" size="24"/>
              <span>{{ $t('location.open_in_maps') }}</span>
            </BaseButton>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {ref} from 'vue';

const modules = [Autoplay, Pagination];

const locationImages = ref([
  '/location-1.jpg',
  '/location-2.jpg',
  '/location-3.jpg'
]);

// --- ОБНОВЛЕННЫЕ ССЫЛКИ ---
// Эта ссылка для кнопки "Открыть в картах"
const googleMapsLink = ref('https://www.google.com/maps/place/Hilton+Tashkent+City/@41.3159,69.2558,17z');
// ВАЖНО: Замените эту ссылку на вашу собственную, полученную с Google Maps через "Embed a map"!
const googleMapsEmbedLink = ref('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.1043472418396!2d69.24629272646393!3d41.31416927137719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b685b689e13%3A0xaf4cdf526e02f5e7!2z0JPQvtGB0YLQuNC90LjRhtCwICLQpdC40LvRgtC-0L0gLSDQotCw0YjQutC10L3RgiI!5e1!3m2!1sru!2s!4v1750141759538!5m2!1sru!2s');
</script>

<style scoped>
.location-section {
  padding: 64px 20px 96px;
  overflow: hidden;
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
  grid-template-columns: 1fr;
  gap: 32px;
}

.slider-block {
  width: 100%;
  height: 450px;
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

.location-slider :deep(.swiper-pagination-bullet) {
  background-color: var(--foreground);
  opacity: 0.5;
}

.location-slider :deep(.swiper-pagination-bullet-active) {
  background-color: var(--primary);
  opacity: 1;
}

.info-block {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.map-wrapper {
  flex-grow: 1;
  min-height: 350px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
}

.map-button-link,
.map-button {
  width: 100%;
  text-decoration: none;
}

.map-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.map-button :deep(.icon) {
  font-size: 24px;
}

@media (min-width: 1024px) {
  .location-section {
    padding-top: 96px;
    padding-bottom: 96px;
  }

  .location-grid {
    grid-template-columns: minmax(0, 1fr) minmax(0, 450px); /* Немного увеличим ширину правой колонки */
    gap: 48px;
    align-items: stretch;
  }

  .slider-block {
    height: 100%;
    /* Ограничиваем высоту */
    max-height: 500px;
  }

  .info-block {
    height: 100%;
    /* Ограничиваем высоту */
    max-height: 500px;
  }
}
</style>