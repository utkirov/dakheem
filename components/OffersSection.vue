<template>
  <section id="offers" class="container offers-section">
    <div class="content-wrapper">
      <div class="heading-block" data-aos="fade-right">
        <SectionTitle>{{ $t('offers.section_title') }}</SectionTitle>
        <h3 class="heading">{{ $t('offers.heading') }}</h3>
      </div>

      <div class="list-wrapper">
        <div
            v-for="(offer, index) in offers"
            :key="offer.titleKey"
            data-aos="fade-up"
            :data-aos-delay="100 * index"
        >
          <OfferCard
              :icon="offer.icon"
              :title="$t(`offers.${offer.titleKey}`)"
              :description="$t(`offers.${offer.descKey}`)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const offers = ref([
  { icon: 'ph:buildings-bold', titleKey: 'card1_title', descKey: 'card1_desc' },
  { icon: 'ph:file-text-bold', titleKey: 'card2_title', descKey: 'card2_desc' },
  { icon: 'ph:handshake-bold', titleKey: 'card3_title', descKey: 'card3_desc' },
  { icon: 'ph:presentation-chart-bold', titleKey: 'card4_title', descKey: 'card4_desc' }
]);
</script>

<style scoped>
.offers-section {
  padding: 96px 20px;
  overflow-x: hidden;
}
.content-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}
.heading {
  font-size: 36px;
  font-weight: 500;
  color: var(--foreground);
}
.list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (min-width: 1024px) {
  .content-wrapper {
    grid-template-columns: 1fr 1.2fr;
    gap: 80px;
  }
}
</style>