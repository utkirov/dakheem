<template>
  <section class="attention-section">
    <div class="container content-wrapper">

      <div class="text-block" data-aos="fade-right" data-aos-duration="800">
        <SectionTitle>{{ $t('attention.section_title') }}</SectionTitle>
        <p class="text">
          {{ $t('attention.text') }}
        </p>
        <div data-aos="fade-up" data-aos-delay="300">
          <a href="https://t.me/dakheem_bot" target="_blank" rel="noopener noreferrer">
            <BaseButton variant="primary" class="cta-button">
              {{ $t('attention.cta_button') }}
            </BaseButton>
          </a>
        </div>
      </div>

      <div class="image-block" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
        <img
            src="/gift-card-gold.png"
            alt="DAKHEEM Gift Card"
            class="gift-card-image"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
// Скрипт остается без изменений
</script>

<style scoped>
.attention-section {
  padding: 80px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  transition: border-color 0.3s ease;
  overflow-x: hidden;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

.text-block {
  max-width: 500px;
  text-align: center;
}

.text {
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--foreground);
  margin-bottom: 32px;
}

.image-block {
  flex-shrink: 0;
}

.gift-card-image {
  max-width: 350px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  /* Применяем нашу новую, более плавную анимацию */
  animation: smooth-pulse-glow 5s infinite ease-in-out;
}

.dark .gift-card-image {
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.4);
}

@media (min-width: 1024px) {
  .content-wrapper {
    flex-direction: row;
    justify-content: space-around;
    gap: 64px;
  }
  .text-block {
    text-align: left;
  }
}

/* --- ОБНОВЛЕННАЯ АНИМАЦИЯ СВЕЧЕНИЯ --- */
@keyframes smooth-pulse-glow {
  0%, 100% {
    /* В начале и конце анимации тень и масштаб стандартные */
    box-shadow: 0 0 20px -10px transparent;
    transform: scale(1.0);
  }
  50% {
    /* В середине анимации тень становится больше и мягче */
    /* Увеличиваем размытие (blur) до 50px и спред (spread) до -5px */
    box-shadow: 0 0 50px -5px var(--primary);
    transform: scale(1.03); /* Немного увеличиваем карту для эффекта "дыхания" */
  }
}
</style>