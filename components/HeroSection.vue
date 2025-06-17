<template>
  <section class="hero-section">

    <swiper
        @swiper="onSwiper"
        @autoplay-time-left="onAutoplayTimeLeft"
        :modules="modules"
        :slides-per-view="1"
        :loop="true"
        effect="fade"
        :fade-effect="{ crossFade: true }"
        :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
        class="hero-swiper"
    >
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <div class="slide-background" :style="{ backgroundImage: `url(${slide.backgroundImage})` }"></div>
        <div class="slide-overlay"></div>

        <div class="container slide-content">
          <div class="content-wrapper">
            <SectionTitle class="content-feature-text">{{ slide.featuredText }}</SectionTitle>
            <h1 class="content-title">{{ slide.title }}</h1>
            <p class="content-description">{{ slide.description }}</p>
            <div class="content-features">
              <div v-for="feature in slide.features" :key="feature.text" class="feature-item">
                <Icon :name="feature.icon" />
                <span v-html="feature.text"></span>
              </div>
            </div>
            <BaseButton variant="primary" class="content-button">Read More</BaseButton>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="hero-pagination">
      <button
          v-for="(slide, index) in slides"
          :key="slide.id"
          @click="goToSlide(index)"
          class="pagination-bullet"
          :class="{ 'active': activeIndex === index }"
      >
        <div v-if="activeIndex !== index" class="dot"></div>
        <template v-else>
          <svg class="progress-ring" viewBox="0 0 30 30">
            <circle class="progress-ring-track" r="14" cx="15" cy="15"></circle>
            <circle class="progress-ring-progress" r="14" cx="15" cy="15" :style="{ strokeDashoffset: progressRingOffset }"></circle>
          </svg>
          <span class="pagination-number">{{ index + 1 }}</span>
        </template>
      </button>
    </div>

  </section>
</template>

<script setup>
// Импорты из библиотеки Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { ref, computed } from 'vue';

const modules = [Autoplay, EffectFade];

// --- ЗАПОЛНЕННЫЕ ДАННЫЕ ДЛЯ СЛАЙДОВ ---
const slides = ref([
  {
    id: 1,
    featuredText: 'Featured Property',
    title: 'WYNWOOD BY IMTIAZ',
    description: 'Welcome to Wynwood Residence by Imtiaz, an architectural sanctuary rising on the prestigious shores of the Dubai Islands.',
    backgroundImage: '/1.jpg',
    features: [
      { icon: 'ph:armchair-bold', text: 'FULLY<br>FURNISHED' },
      { icon: 'ph:map-pin-bold', text: 'PRIME<br>LOCATION' },
      { icon: 'ph:waves-bold', text: '5 MIN WALK<br>TO THE BEACH' },
    ]
  },
  {
    id: 2,
    featuredText: 'New Release',
    title: 'MARINA VISTAS',
    description: 'Discover a new level of luxury living with breathtaking views of the Arabian Gulf and Dubai Marina skyline.',
    backgroundImage: '/4.jpg',
    features: [
      { icon: 'ph:sailboat-bold', text: 'MARINA<br>ACCESS' },
      { icon: 'ph:swimming-pool-bold', text: 'INFINITY<br>POOL' },
      { icon: 'ph:buildings-bold', text: 'PANORAMIC<br>VIEWS' },
    ]
  },
  {
    id: 3,
    featuredText: 'Exclusive Offer',
    title: 'PALACE RESIDENCES',
    description: 'A contemporary waterfront apartment building with a range of modern amenities and services for a premium lifestyle.',
    backgroundImage: '/3.jpg',
    features: [
      { icon: 'ph:car-bold', text: 'VALET<br>PARKING' },
      { icon: 'ph:spa-bold', text: 'LUXURY<br>SPA' },
      { icon: 'ph:bell-bold', text: '24/7<br>CONCIERGE' },
    ]
  }
]);

// --- ЛОГИКА ДЛЯ ИНДИКАТОРА ---
const swiperInstance = ref(null);
const activeIndex = ref(0);
const autoplayProgress = ref(0);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
  swiper.on('slideChange', () => {
    activeIndex.value = swiper.realIndex;
  });
};

const onAutoplayTimeLeft = (s, timeLeft, percentage) => {
  autoplayProgress.value = 1 - percentage;
};

const goToSlide = (index) => {
  swiperInstance.value?.slideToLoop(index);
};

const RADIUS = 14;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const progressRingOffset = computed(() => {
  return CIRCUMFERENCE * (1 - autoplayProgress.value);
});
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  color: #fff;
}

.hero-swiper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  position: relative;
  display: flex;
  align-items: center;
}

.slide-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8));
  z-index: 1;
}

.slide-content {
  position: relative;
  z-index: 2;
}

.content-wrapper {
  max-width: 650px;
}

/* --- Анимации появления контента --- */
.content-feature-text, .content-title, .content-description, .content-features, .content-button {
  opacity: 0;
  transform: translateY(20px);
}
.swiper-slide-active .content-feature-text { animation: fadeInUp 0.5s 0.3s ease forwards; }
.swiper-slide-active .content-title { animation: fadeInUp 0.5s 0.5s ease forwards; }
.swiper-slide-active .content-description { animation: fadeInUp 0.5s 0.7s ease forwards; }
.swiper-slide-active .content-features { animation: fadeInUp 0.5s 0.9s ease forwards; }
.swiper-slide-active .content-button { animation: fadeInUp 0.5s 1.1s ease forwards; }
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* --- Конец блока анимаций --- */


.content-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 20px;
  line-height: 1.1;
  text-transform: uppercase;
}

.content-description {
  font-size: 18px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  max-width: 500px;
}

.content-features {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px 0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.feature-item :deep(i) {
  font-size: 32px;
}

/* Боковая панель */
.side-toolbar {
  display: none;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(5px);
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  border-radius: 10px 0 0 10px;
  z-index: 10;
}

.toolbar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
}
.toolbar-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.toolbar-item :deep(i) {
  font-size: 24px;
  margin-bottom: 5px;
}

@media (min-width: 1024px) {
  .side-toolbar {
    display: flex;
  }
}

/* --- Стили для нового индикатора --- */
.hero-pagination {
  position: absolute;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.pagination-bullet {
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.2s ease;
}
.pagination-bullet:hover {
  transform: scale(1.1);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
}

.pagination-bullet.active .dot {
  display: none;
}

.pagination-number {
  position: absolute;
  color: #4ade80;
  font-weight: bold;
}

/* Стили для SVG кольца прогресса */
.progress-ring {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}
.progress-ring-track,
.progress-ring-progress {
  fill: transparent;
  stroke-width: 2;
}
.progress-ring-track {
  stroke: rgba(255, 255, 255, 0.2);
}
.progress-ring-progress {
  stroke: #4ade80;
  stroke-linecap: round;
  stroke-dasharray: v-bind(CIRCUMFERENCE);
  stroke-dashoffset: v-bind(CIRCUMFERENCE);
  transition: stroke-dashoffset 0.1s linear;
}
</style>