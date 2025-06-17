<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">

        <div class="footer-column" data-aos="fade-up" data-aos-delay="100">
          <a href="/" class="logo-link">
            <img :src="logoSrc" alt="DAKHEEM Logo" class="logo-image"/>
          </a>
          <p class="description">{{ $t('footer.description') }}</p>
          <div class="social-links">
            <a href="#" aria-label="Instagram" class="social-link">
              <Icon name="ph:instagram-logo-bold"/>
            </a>
            <a href="#" aria-label="Facebook" class="social-link">
              <Icon name="ph:facebook-logo-bold"/>
            </a>
            <a href="#" aria-label="LinkedIn" class="social-link">
              <Icon name="ph:linkedin-logo-bold"/>
            </a>
            <a href="#" aria-label="X (Twitter)" class="social-link">
              <Icon name="ph:x-logo-bold"/>
            </a>
          </div>
        </div>

        <div class="footer-column" data-aos="fade-up" data-aos-delay="200">
          <h4 class="column-title">{{ $t('footer.quick_links') }}</h4>
          <ul class="link-list">
            <li><a href="#about">{{ $t('header.about') }}</a></li>
            <li><a href="#offers">{{ $t('header.offers') }}</a></li>
            <li><a href="#contacts">{{ $t('header.contacts') }}</a></li>
            <li><a href="#">{{ $t('footer.link_roadshow') }}</a></li>
          </ul>
        </div>

        <div class="footer-column" data-aos="fade-up" data-aos-delay="300">
          <h4 class="column-title">{{ $t('footer.contact_us') }}</h4>
          <ul class="link-list contact-list">
            <li>
              <Icon name="ph:map-pin-bold"/>
              <span>Dubai, UAE</span></li>
            <li>
              <Icon name="ph:phone-bold"/>
              <span>+971 56 284 0101</span></li>
            <li>
              <Icon name="ph:phone-bold"/>
              <span>+971 50 411 3900</span></li>
            <li>
              <Icon name="ph:phone-bold"/>
              <span>+998 97 025 4774</span></li>
          </ul>
        </div>

        <div class="footer-column" data-aos="fade-up" data-aos-delay="400">
          <h4 class="column-title">{{ $t('footer.stay_updated') }}</h4>
          <p class="description">{{ $t('footer.newsletter_desc') }}</p>
          <div class="subscribe-form">
            <a href="https://t.me/dakheem_bot" target="_blank" rel="noopener noreferrer">
              <BaseButton variant="primary" class="subscribe-button">{{ $t('common.subscribe') }}</BaseButton>
            </a>
          </div>
        </div>

      </div>

      <div class="footer-bottom" data-aos="fade-up" data-aos-delay="500">
        <p class="copyright">© {{ new Date().getFullYear() }} DAKHEEM. {{ $t('footer.copyright') }}</p>
        <div class="legal-links">
          <a href="#">{{ $t('footer.privacy_policy') }}</a>
          <a href="#">{{ $t('footer.terms_of_service') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import {computed} from 'vue';

// Логика для динамической смены логотипа
const colorMode = useColorMode();
const logoSrc = computed(() => {
  return colorMode.value === 'dark' ? '/logo-light.svg' : '/logo-dark.svg';
});

// Добавляем locale для корректной работы ссылок
const {locale} = useI18n();
</script>
<style scoped>
.footer {
  background-color: var(--placeholder);
  padding: 80px 20px 40px;
  color: var(--muted);
  overflow: hidden; /* Для корректной работы AOS */
  transition: background-color 0.3s ease;
}

.footer-grid {
  display: grid;
  /* 1 колонка на мобильных, 2 на планшетах, 4 на десктопах */
  grid-template-columns: repeat(1, 1fr);
  gap: 48px;
  padding-bottom: 48px;
}

.footer-column .logo {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--foreground);
  margin-bottom: 16px;
}

.footer-column .column-title {
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--foreground);
  margin-bottom: 24px;
}

.footer-column .description {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 24px;
}

/* Социальные сети */
.social-links {
  display: flex;
  gap: 16px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--foreground);
  background-color: var(--border);
  border-radius: 50%;
  font-size: 20px;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.social-link:hover {
  background-color: var(--primary);
  transform: translateY(-2px);
}

/* Списки ссылок */
.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.link-list a {
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
}

.link-list a:hover {
  color: var(--foreground);
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Форма подписки */
.subscribe-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.subscribe-input {
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid var(--border);
  background-color: var(--background);
  color: var(--foreground);
  font-size: 14px;
  box-sizing: border-box;
}

.subscribe-button {
  width: 100%;
}


/* Нижняя часть футера */
.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-size: 12px;
}

.copyright {
  margin: 0;
}

.legal-links {
  display: flex;
  gap: 24px;
}

.legal-links a {
  color: var(--muted);
  text-decoration: none;
}

.legal-links a:hover {
  text-decoration: underline;
}

/* Адаптивность */
@media (min-width: 640px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .subscribe-form {
    flex-direction: row;
  }

  .subscribe-button {
    width: auto;
  }

  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
<script setup lang="ts">
</script>