<template>
  <section class="hero-section" id="main">

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
            <SectionTitle class="content-feature-text">{{ $t(slide.featuredTextKey) }}</SectionTitle>
            <h1 class="content-title">{{ $t(slide.titleKey) }}</h1>
            <p class="content-description">{{ $t(slide.descriptionKey) }}</p>
            <div class="content-features">
              <div v-for="feature in slide.features" :key="feature.textKey" class="feature-item">
                <span class="feature-icon-s">
                  <Icon :name="feature.icon"/>
                </span>
                <span v-html="$t(feature.textKey)"></span>
              </div>
            </div>
            <a href="#cta" @click.prevent="scrollTo('#cta')" rel="noopener noreferrer">
              <BaseButton variant="primary" class="content-button">{{ $t('common.read_more') }}</BaseButton>
            </a>

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
          :aria-label="`Go to slide ${index + 1}`"
      >
        <div v-if="activeIndex !== index" class="dot"></div>
        <template v-else>
          <svg class="progress-ring" viewBox="0 0 30 30">
            <circle class="progress-ring-track" r="14" cx="15" cy="15"></circle>
            <circle class="progress-ring-progress" r="14" cx="15" cy="15"
                    :style="{ strokeDashoffset: progressRingOffset }"></circle>
          </svg>
          <span class="pagination-number">{{ index + 1 }}</span>
        </template>
      </button>
    </div>

  </section>
</template>

<script setup>
// --- НОВАЯ ЛОГИКА ДЛЯ ПЛАВНОГО СКРОЛЛА ---
const { $lenis } = useNuxtApp();

const scrollTo = (target) => {
  if ($lenis) {
    // Встроенная в Lenis функция для плавной прокрутки к элементу
    $lenis.scrollTo(target, { offset: -96 }); // offset -96px, чтобы компенсировать высоту хедера
  }
};

const handleMobileLink = (target) => {
  isMobileMenuOpen.value = false;
  // Небольшая задержка, чтобы меню успело закрыться перед началом скролла
  setTimeout(() => {
    scrollTo(target);
  }, 300);
};
// Скрипт остается без изменений
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import {ref, computed} from 'vue';

const modules = [Autoplay, EffectFade];
const slides = ref([
  {
    id: 1,
    featuredTextKey: 'slider.slide1_featured',
    titleKey: 'slider.slide1_title',
    descriptionKey: 'slider.slide1_desc',
    backgroundImage: '/slide-1.jpg',
    features: [
      { icon: 'ph:swimming-pool-bold', textKey: 'slider.slide1_feat1' },
      { icon: 'ph:sparkle-bold', textKey: 'slider.slide1_feat2' },
      { icon: 'ph:paint-brush-broad-bold', textKey: 'slider.slide1_feat3' },
    ]
  },
  {
    id: 2,
    featuredTextKey: 'slider.slide2_featured',
    titleKey: 'slider.slide2_title',
    descriptionKey: 'slider.slide2_desc',
    backgroundImage: '/slide-2.jpg',
    features: [
      { icon: 'ph:house-line-bold', textKey: 'slider.slide2_feat1' },
      { icon: 'ph:wine-bold', textKey: 'slider.slide2_feat2' },
      { icon: 'ph:car-bold', textKey: 'slider.slide2_feat3' },
    ]
  },
  {
    id: 3,
    featuredTextKey: 'slider.slide3_featured',
    titleKey: 'slider.slide3_title',
    descriptionKey: 'slider.slide3_desc',
    backgroundImage: '/slide-3.jpg',
    features: [
      { icon: 'ph:waves-bold', textKey: 'slider.slide3_feat1' },
      { icon: 'ph:sailboat-bold', textKey: 'slider.slide3_feat2' },
      { icon: 'ph:tree-evergreen-bold', textKey: 'slider.slide3_feat3' },
    ]
  },
  {
    id: 4,
    featuredTextKey: 'slider.slide4_featured',
    titleKey: 'slider.slide4_title',
    descriptionKey: 'slider.slide4_desc',
    backgroundImage: '/slide-4.jpg',
    features: [
      { icon: 'ph:golf-bold', textKey: 'slider.slide4_feat1' },
      { icon: 'ph:heartbeat-bold', textKey: 'slider.slide4_feat2' },
      { icon: 'ph:fork-knife-bold', textKey: 'slider.slide4_feat3' },
    ]
  },
  {
    id: 5,
    featuredTextKey: 'slider.slide5_featured',
    titleKey: 'slider.slide5_title',
    descriptionKey: 'slider.slide5_desc',
    backgroundImage: '/slide-5.jpg',
    features: [
      { icon: 'ph:car-profile-bold', textKey: 'slider.slide5_feat1' },
      { icon: 'ph:medal-bold', textKey: 'slider.slide5_feat2' },
      { icon: 'ph:buildings-bold', textKey: 'slider.slide5_feat3' },
    ]
  },
  {
    id: 6,
    featuredTextKey: 'slider.slide6_featured',
    titleKey: 'slider.slide6_title',
    descriptionKey: 'slider.slide6_desc',
    backgroundImage: '/slide-6.jpg',
    features: [
      { icon: 'ph:users-three-bold', textKey: 'slider.slide6_feat1' },
      { icon: 'ph:flower-lotus-bold', textKey: 'slider.slide6_feat2' },
      { icon: 'ph:tennis-ball-bold', textKey: 'slider.slide6_feat3' },
    ]
  },
  {
    id: 7,
    featuredTextKey: 'slider.slide7_featured',
    titleKey: 'slider.slide7_title',
    descriptionKey: 'slider.slide7_desc',
    backgroundImage: '/slide-7.jpg',
    features: [
      { icon: 'ph:storefront-bold', textKey: 'slider.slide7_feat1' },
      { icon: 'ph:stack-bold', textKey: 'slider.slide7_feat2' },
      { icon: 'ph:cloud-sun-bold', textKey: 'slider.slide7_feat3' },
    ]
  },
  {
    id: 8,
    featuredTextKey: 'slider.slide8_featured',
    titleKey: 'slider.slide8_title',
    descriptionKey: 'slider.slide8_desc',
    backgroundImage: '/slide-8.jpg',
    features: [
      { icon: 'ph:binoculars-bold', textKey: 'slider.slide8_feat1' },
      { icon: 'ph:trophy-bold', textKey: 'slider.slide8_feat2' },
      { icon: 'ph:diamond-bold', textKey: 'slider.slide8_feat3' },
    ]
  }
]);
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
const progressRingOffset = computed(() => CIRCUMFERENCE * (1 - autoplayProgress.value));
</script>

<style scoped>
/* Стили для .hero-section, .hero-swiper, .slide-background и т.д. остаются без изменений */
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
  justify-content: center;
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
  width: 100%;
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-feature-text, .content-title, .content-description, .content-features, .content-button {
  opacity: 0;
  transform: translateY(20px);
}

.swiper-slide-active .content-feature-text {
  animation: fadeInUp 0.5s 0.3s ease forwards;
}

.swiper-slide-active .content-title {
  animation: fadeInUp 0.5s 0.5s ease forwards;
}

.swiper-slide-active .content-description {
  animation: fadeInUp 0.5s 0.7s ease forwards;
}

.swiper-slide-active .content-features {
  animation: fadeInUp 0.5s 0.9s ease forwards;
}

.swiper-slide-active .content-button {
  animation: fadeInUp 0.5s 1.1s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

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
  max-width: 600px;
}

.content-features {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px 0;
  justify-content: center;
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
  font-size: 48px;
}
.feature-icon-s {
  font-size: 36px;
}

.side-toolbar {
  display: none;
}

@media (min-width: 1024px) {
  .side-toolbar {
    display: flex;
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

/* --- ИЗМЕНЕННЫЕ СТИЛИ ДЛЯ ИНДИКАТОРА --- */
.hero-pagination {
  position: absolute;
  /* Позиционируем по центру внизу */
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  /* Меняем направление на горизонтальное */
  flex-direction: row;
  gap: 16px;
}

/* Остальные стили для буллитов и SVG остаются без изменений */
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

.progress-ring {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.progress-ring-track, .progress-ring-progress {
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
.content-feature-text {
  color: #fff !important;
}
</style>