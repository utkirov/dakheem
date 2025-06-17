<template>
  <header class="header">
    <div class="container header-container">

      <div class="header-left">
        <button @click="isMobileMenuOpen = true" class="icon-button mobile-hamburger"
                :aria-label="$t('header.open_menu_aria')">
          <Icon name="ph:list-bold" size="28"/>
        </button>
        <nav class="desktop-nav">
          <a href="#about" @click.prevent="scrollTo('#about')">{{ $t('header.about') }}</a>
          <a href="#offers" @click.prevent="scrollTo('#offers')">{{ $t('header.offers') }}</a>
          <a href="#contacts" @click.prevent="scrollTo('#contacts')">{{ $t('header.contacts') }}</a>
        </nav>
      </div>

      <div class="header-center">
        <a href="#" @click.prevent="scrollTo('#main')" class="logo">
          <img :src="logoSrc" alt="DAKHEEM Logo" class="logo-image"/>
        </a>
      </div>

      <div class="header-right">
        <div class="desktop-actions">
          <div class="language-switcher" ref="langSwitcherNode">
            <button @click="isLangDropdownOpen = !isLangDropdownOpen" class="icon-button language-button"
                    :aria-label="$t('header.change_language_aria')">
              <Icon :name="`circle-flags:${currentLocale.flag}`"/>
              <span class="current-locale">{{ currentLocale.code.toUpperCase() }}</span>
            </button>
            <Transition name="dropdown-fade">
              <div v-if="isLangDropdownOpen" class="language-dropdown">
                <NuxtLink v-for="lang in availableLocales" :key="lang.code" :to="switchLocalePath(lang.code)"
                          @click="isLangDropdownOpen = false" class="dropdown-item">
                  <Icon :name="`circle-flags:${lang.flag}`"/>
                  <span>{{ lang.name }}</span>
                </NuxtLink>
              </div>
            </Transition>
          </div>
          <button @click="toggleTheme" class="icon-button" :aria-label="$t('header.toggle_theme_aria')">
            <Icon v-if="colorMode.value === 'dark'" name="ph:sun-bold"/>
            <Icon v-else name="ph:moon-bold"/>
          </button>
          <a href="https://t.me/dakheem_bot" target="_blank" rel="noopener noreferrer">
            <BaseButton variant="primary" class="cta-button-mobile">{{ $t('header.cta') }}</BaseButton>
          </a>
        </div>
        <div class="mobile-cta">
          <a href="https://t.me/dakheem_bot" target="_blank" rel="noopener noreferrer">
            <BaseButton variant="primary" class="cta-button-mobile">{{ $t('header.cta') }}</BaseButton>
          </a>
        </div>
      </div>
    </div>

    <Transition name="mobile-menu-fade">
      <div v-if="isMobileMenuOpen" class="mobile-menu-overlay">
        <div class="mobile-menu-header">
          <a href="#" @click.prevent="scrollTo('#main')" class="logo" @click="isMobileMenuOpen = false">
            <img :src="logoSrc" alt="DAKHEEM Logo" class="logo-image"/>
          </a>
          <button @click="isMobileMenuOpen = false" class="icon-button" :aria-label="$t('header.close_menu_aria')">
            <Icon name="ph:x-bold" size="28"/>
          </button>
        </div>
        <div class="mobile-menu-content">
          <nav class="mobile-nav-links">
            <a href="#about" @click.prevent="scrollTo('#about')" @click="isMobileMenuOpen = false">{{ $t('header.about') }}</a>
            <a href="#offers" @click.prevent="scrollTo('#offers')" @click="isMobileMenuOpen = false">{{ $t('header.offers') }}</a>
            <a href="#contacts" @click.prevent="scrollTo('#contacts')" @click="isMobileMenuOpen = false">{{ $t('header.contacts') }}</a>
          </nav>
        </div>
        <div class="mobile-menu-footer">
          <div class="language-list-mobile">
            <NuxtLink
                v-for="lang in locales"
                :key="lang.code"
                :to="switchLocalePath(lang.code)"
                class="language-item"
                :class="{ 'active': lang.code === locale }"
                @click="isMobileMenuOpen = false"
            >
              <Icon :name="`circle-flags:${lang.flag}`" class="footer-icon"/>
              <span class="language-name">{{ lang.name }}</span>
            </NuxtLink>
          </div>
          <button @click="toggleTheme" class="theme-toggle-mobile">
            <Icon v-if="colorMode.value === 'dark'" name="ph:sun-bold" class="footer-icon"/>
            <Icon v-else name="ph:moon-bold" class="footer-icon"/>
            <span>{{ colorMode.value === 'dark' ? 'Light' : 'Dark' }} Theme</span>
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import {ref, computed} from 'vue';
import {onClickOutside} from '@vueuse/core';

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
// Логика для i18n
const {locale, locales} = useI18n();
const switchLocalePath = useSwitchLocalePath();
const currentLocale = computed(() => locales.value.find(l => l.code === locale.value) || locales.value[0]);
const availableLocales = computed(() => locales.value.filter(l => l.code !== locale.value));

// Логика для UI и Темы
const isMobileMenuOpen = ref(false); // <--- ВОЗВРАЩЕНА ЭТА СТРОКА
const colorMode = useColorMode();
const isLangDropdownOpen = ref(false);
const langSwitcherNode = ref(null);

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

onClickOutside(langSwitcherNode, () => {
  isLangDropdownOpen.value = false;
});

// Логика для динамического логотипа
const logoSrc = computed(() => {
  return colorMode.value === 'dark' ? '/logo-light.svg' : '/logo-dark.svg';
});
</script>

<style scoped>
/* Все стили остаются без изменений */
.header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: var(--background);
  border-bottom: 1px solid var(--border);
  transition: all 0.3s ease;
}

.header-container {
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: 96px;
  align-items: center;
  gap: 16px;
}

.header-left {
  justify-self: start;
}

.header-center {
  justify-self: center;
}

.header-right {
  justify-self: end;
}

.logo {
  line-height: 1;
}

.logo-image {
  height: 28px;
  width: auto;
  display: block;
}

/* Desktop Styles */
.desktop-nav, .desktop-actions {
  display: none;
}

.mobile-hamburger {
  display: flex;
}

.mobile-cta {
  display: flex;
}

@media (min-width: 1024px) {
  .header-container {
    grid-template-columns: 1fr auto 1fr;
  }

  .header-left {
    display: block;
  }

  .header-right {
    display: block;
  }

  .desktop-nav {
    display: flex;
    align-items: center;
    gap: 32px;
    font-size: 16px;
    font-weight: 500;
  }

  .desktop-nav a {
    color: var(--foreground);
    text-decoration: none;
    transition: color 0.2s;
  }

  .desktop-nav a:hover {
    color: var(--muted);
  }

  .desktop-actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .mobile-hamburger, .mobile-cta {
    display: none !important;
  }

  .logo-image {
    height: 32px;
  }
}

/* Общие стили кнопок */
.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 40px;
  padding: 0 10px;
  background: none;
  border: 1px solid transparent;
  border-radius: 50%;
  color: var(--foreground);
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s;
}

.icon-button:hover {
  background-color: var(--border);
}

.cta-button-mobile :deep(button) {
  padding: 10px 16px;
  font-size: 12px;
}

/* Переключатель языков (десктоп) */
.language-switcher {
  position: relative;
}

.language-button {
  border-color: var(--border);
  gap: 8px;
  border-radius: 20px;
  padding: 0 12px 0 10px;
}

.language-button :deep(.icon) {
  font-size: 18px;
  border-radius: 50%;
}

.current-locale {
  font-weight: bold;
  font-size: 14px;
}

.language-dropdown {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  z-index: 120;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: var(--foreground);
  font-size: 14px;
  white-space: nowrap;
}

.dropdown-item:hover {
  background-color: var(--border);
}

.dropdown-fade-enter-active, .dropdown-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-fade-enter-from, .dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Полноэкранное мобильное меню */
.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  background-color: var(--background);
  z-index: 110;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  box-sizing: border-box;
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  flex-shrink: 0;
}

.mobile-menu-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  font-size: 28px;
  font-weight: 500;
}

.mobile-nav-links a {
  color: var(--foreground);
  text-decoration: none;
}

.mobile-menu-fade-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.mobile-menu-fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.mobile-menu-fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

/* Футер мобильного меню */
.mobile-menu-footer {
  flex-shrink: 0;
  width: 100%;
  padding: 24px 0;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.language-list-mobile {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.language-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  height: 44px;
  border: 2px solid var(--border);
  border-radius: 22px;
  text-decoration: none;
  color: var(--muted);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.language-item.active {
  border-color: var(--primary);
  color: var(--foreground);
  background-color: var(--border);
}

.footer-icon {
  font-size: 24px;
}

.theme-toggle-mobile {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 500;
  color: var(--muted);
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  white-space: nowrap;
}
</style>