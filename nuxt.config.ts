// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxtjs/color-mode', 'nuxt-aos', '@nuxtjs/i18n', '@vueuse/nuxt'],
  colorMode: {
    preference: 'dark', // Тема по умолчанию - тёмная
    classSuffix: ''     // Для генерации классов .light и .dark на <html>
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        flag: 'us' // Флаг Великобритании для английского
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'Русский',
        flag: 'ru'
      },
      {
        code: 'uz',
        iso: 'uz-UZ',
        name: 'O‘zbekcha',
        flag: 'uz'
      }
    ],
    defaultLocale: 'en', // Язык по умолчанию
    strategy: 'prefix_except_default', // /ru/about, но /about для языка по умолчанию
  },
  // Глобальные настройки для AOS (опционально)
  aos: {
    // вы можете отключить глобальные настройки с помощью false
    disable: false,

    // Настройки, которые будут применены глобально:
    startEvent: 'DOMContentLoaded', // имя события, которое AOS должен прослушивать для инициализации
    initClassName: 'aos-init', // класс, применяемый к анимации
    animatedClassName: 'aos-animate', // класс, применяемый к анимационным элементам
    useClassNames: false, // если true, добавит содержимое `data-aos` в качестве классов в` HTML-элемент
    disableMutationObserver: false, // отключает автоматическое обнаружение мутаций (расширенное)
    debounceDelay: 50, // задержка на debounce, используемая при изменении размера окна (расширенное)
    throttleDelay: 99, // задержка на throttle, используемая при прокрутке страницы (расширенное)

    // Настройки, которые могут быть переопределены для каждого элемента с помощью атрибутов `data-aos-*`:
    offset: 120, // смещение (в пикселях) от исходной точки срабатывания
    delay: 0, // значения от 0 до 3000 с шагом 50 мс
    duration: 1200, // значения от 0 до 3000 с шагом 50 мс
    easing: 'ease-in-out', // функция сглаживания по умолчанию для анимаций AOS
    once: true, // должна ли анимация происходить только один раз - при прокрутке вниз
    mirror: false, // должны ли элементы анимироваться при прокрутке мимо них
    anchorPlacement: 'top-bottom', // определяет, какая позиция элемента относительно окна должна вызывать анимацию
  },

  css: ['~/assets/css/main.css'],
})