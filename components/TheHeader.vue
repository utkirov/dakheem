<template>
  <header class="header">
    <div class="container header-container">

      <div class="header-left">
        <button @click="isMobileMenuOpen = true" class="icon-button mobile-hamburger" aria-label="Open menu">
          <Icon name="ph:list-bold" size="28" />
        </button>
        <nav class="desktop-nav">
          <a href="#about">{{ $t('header.about') }}</a>
          <a href="#offers">{{ $t('header.offers') }}</a>
          <a href="#contacts">{{ $t('header.contacts') }}</a>
        </nav>
      </div>

      <div class="header-center">
        <a href="/" class="logo">
          <img :src="logoSrc" alt="DAKHEEM Logo" class="logo-image" />
        </a>
      </div>

      <div class="header-right">
        <div class="desktop-actions">
          <div class="language-switcher" ref="langSwitcherNode">
            <button @click="isLangDropdownOpen = !isLangDropdownOpen" class="icon-button language-button">
              <Icon :name="`circle-flags:${currentLocale.flag}`" />
              <span class="current-locale">{{ currentLocale.code.toUpperCase() }}</span>
            </button>
            <Transition name="dropdown-fade">
              <div v-if="isLangDropdownOpen" class="language-dropdown">
                <NuxtLink v-for="lang in availableLocales" :key="lang.code" :to="switchLocalePath(lang.code)" @click="isLangDropdownOpen = false" class="dropdown-item">
                  <Icon :name="`circle-flags:${lang.flag}`" />
                  <span>{{ lang.name }}</span>
                </NuxtLink>
              </div>
            </Transition>
          </div>
          <button @click="toggleTheme" class="icon-button" aria-label="Toggle theme">
            <Icon v-if="colorMode.value === 'dark'" name="ph:sun-bold" />
            <Icon v-else name="ph:moon-bold" />
          </button>
          <BaseButton variant="primary">{{ $t('header.cta') }}</BaseButton>
        </div>
        <div class="mobile-cta">
          <BaseButton variant="primary">{{ $t('header.cta') }}</BaseButton>
        </div>
      </div>
    </div>

    <Transition name="mobile-menu-fade">
      <div v-if="isMobileMenuOpen" class="mobile-menu-overlay">
        <div class="mobile-menu-header">
          <a href="/" class="logo" @click="isMobileMenuOpen = false">
            <img :src="logoSrc" alt="DAKHEEM Logo" class="logo-image" />
          </a>
          <button @click="isMobileMenuOpen = false" class="icon-button" aria-label="Close menu">
            <Icon name="ph:x-bold" size="28" />
          </button>
        </div>
        <div class="mobile-menu-content">
          <nav class="mobile-nav-links">
            <a href="#about" @click="isMobileMenuOpen = false">{{ $t('header.about') }}</a>
            <a href="#offers" @click="isMobileMenuOpen = false">{{ $t('header.offers') }}</a>
            <a href="#contacts" @click="isMobileMenuOpen = false">{{ $t('header.contacts') }}</a>
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
              <Icon :name="`circle-flags:${lang.flag}`" class="footer-icon" />
              <span class="language-name">{{ lang.name }}</span>
            </NuxtLink>
          </div>
          <button @click="toggleTheme" class="theme-toggle-mobile">
            <Icon v-if="colorMode.value === 'dark'" name="ph:sun-bold" class="footer-icon" />
            <Icon v-else name="ph:moon-bold" class="footer-icon" />
            <span>{{ colorMode.value === 'dark' ? 'Light' : 'Dark' }} Theme</span>
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const currentLocale = computed(() => locales.value.find(l => l.code === locale.value) || locales.value[0]);
const availableLocales = computed(() => locales.value.filter(l => l.code !== locale.value));
const isMobileMenuOpen = ref(false);
const colorMode = useColorMode();
const isLangDropdownOpen = ref(false);
const langSwitcherNode = ref(null);
const toggleTheme = () => { colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'; };
onClickOutside(langSwitcherNode, () => { isLangDropdownOpen.value = false; });
const logoSrc = computed(() => colorMode.value === 'dark' ? '/logo-light.svg' : '/logo-dark.svg');
</script>

<style scoped>
/* Стили хедера, десктопа и мобильной версии остаются без изменений */
.header { position: sticky; top: 0; width: 100%; z-index: 100; background-color: var(--background); border-bottom: 1px solid var(--border); transition: all 0.3s ease; }
.header-container { display: grid; grid-template-columns: 1fr auto 1fr; height: 96px; align-items: center; }
.header-left, .header-right { flex: 1; display: flex; align-items: center; }
.header-left { justify-self: start; }
.header-center { justify-self: center; }
.header-right { justify-self: end; }
.logo { text-decoration: none; display: inline-block; line-height: 1; }
.logo-image { height: 32px; width: auto; display: block; }

/* Desktop Styles */
.desktop-nav, .desktop-actions { display: none; }
@media (min-width: 1024px) {
  .header-left, .header-right { display: block; }
  .desktop-nav { display: flex; align-items: center; gap: 32px; font-size: 16px; font-weight: 500; }
  .desktop-nav a { color: var(--foreground); text-decoration: none; transition: color 0.2s; }
  .desktop-nav a:hover { color: var(--muted); }
  .desktop-actions { display: flex; align-items: center; gap: 16px; }
  .mobile-hamburger, .mobile-cta { display: none; }
}

/* Mobile Styles */
.mobile-hamburger, .mobile-cta { display: flex; }
@media (min-width: 1024px) {
  .mobile-hamburger, .mobile-cta { display: none !important; }
}

/* Общие стили кнопок */
.icon-button { display: flex; align-items: center; justify-content: center; width: auto; height: 40px; padding: 0 10px; background: none; border: 1px solid transparent; border-radius: 50%; color: var(--foreground); font-size: 20px; cursor: pointer; transition: all 0.2s; }
.icon-button:hover { background-color: var(--border); }

/* Переключатель языков (десктоп) */
.language-switcher { position: relative; }
.language-button { border-color: var(--border); gap: 8px; border-radius: 20px; padding: 0 12px 0 10px; }
.language-button :deep(.icon) { font-size: 18px; border-radius: 50%; }
.current-locale { font-weight: bold; font-size: 14px; }
.language-dropdown { position: absolute; top: calc(100% + 10px); right: 0; background-color: var(--background); border: 1px solid var(--border); border-radius: 8px; padding: 8px; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); z-index: 120; }
.dropdown-item { display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 4px; text-decoration: none; color: var(--foreground); font-size: 14px; white-space: nowrap; }
.dropdown-item:hover { background-color: var(--border); }
.dropdown-fade-enter-active, .dropdown-fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.dropdown-fade-enter-from, .dropdown-fade-leave-to { opacity: 0; transform: translateY(-10px); }

/* --- Стили для полноэкранного мобильного меню --- */
.mobile-menu-overlay { position: fixed; inset: 0; background-color: var(--background); z-index: 110; display: flex; flex-direction: column; padding: 0 20px; box-sizing: border-box; }
.mobile-menu-header { display: flex; justify-content: space-between; align-items: center; height: 96px; flex-shrink: 0; }
.mobile-menu-content { flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; }
.mobile-nav-links { display: flex; flex-direction: column; align-items: center; gap: 32px; font-size: 28px; font-weight: 500; }
.mobile-nav-links a { color: var(--foreground); text-decoration: none; }
.mobile-menu-fade-enter-active, .mobile-menu-fade-leave-active { transition: opacity 0.3s ease; }
.mobile-menu-fade-enter-from, .mobile-menu-fade-leave-to { opacity: 0; }

/* --- ИСПРАВЛЕННЫЕ СТИЛИ ДЛЯ НИЖНЕГО БЛОКА В МОБИЛЬНОМ МЕНЮ --- */
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
  flex-wrap: wrap; /* Позволяет переносить элементы, если не хватает места */
  gap: 8px;
}
.language-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  /* Убираем фиксированную ширину, добавляем отступы */
  padding: 8px 12px;
  height: 44px;
  border: 2px solid var(--border);
  border-radius: 22px; /* Делаем овальную форму */
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
  font-size: 24px; /* Размер иконок в кнопках */
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
  white-space: nowrap; /* Запрещаем перенос текста */
}
</style>