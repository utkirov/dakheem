<template>
  <footer class="footer-cta-block" data-aos="fade-up" data-aos-offset="0" id="cta">
    <div class="container cta-content">
      <h2 class="cta-heading">{{ $t('footer.heading') }}</h2>
      <a href="https://t.me/dakheem_bot" target="_blank" rel="noopener noreferrer">
        <BaseButton variant="secondary">{{ $t('footer.cta') }}</BaseButton>
      </a>
    </div>
  </footer>
</template>
<style scoped>
.footer-cta-block {
  background-color: var(--foreground);
  color: var(--background);
  padding: 80px 20px;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.cta-content {
  max-width: 48rem;
  margin: 0 auto;
}
.cta-heading {
  font-size: clamp(1.5rem, 5vw, 2.25rem);
  font-weight: 700;
  margin-bottom: 32px;
  line-height: 1.3;
}
</style>