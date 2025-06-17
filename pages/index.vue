<template>
  <div>
    <TheHeader/>
    <main>
      <HeroSection/>
      <div data-aos="fade-up">
        <AboutSection/>
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <OffersSection/>
      </div>
      <div data-aos="zoom-in">
        <AttentionSection/>
      </div>
      <EventTimerSection/>
      <div data-aos="fade-up">
        <LocationSection/>
      </div>
      <div data-aos="fade-up">
        <CTA/>
      </div>
    </main>
    <div data-aos="fade-up" data-aos-offset="0">
      <TheFooter/>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const siteUrl = 'https://dakheem.uz'; // Замените на ваш реальный домен

// Управляем мета-тегами для SEO и соцсетей
useHead({
  title: t('seo.title'),
  meta: [
    { name: 'description', content: t('seo.description') },
    // Open Graph (для Facebook, Telegram, etc.)
    { property: 'og:title', content: t('seo.title') },
    { property: 'og:description', content: t('seo.description') },
    { property: 'og:image', content: `${siteUrl}/social-sharing-image.jpg` }, // Создайте и положите картинку в /public
    { property: 'og:url', content: siteUrl },
    { property: 'og:type', content: 'website' },
    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('seo.title') },
    { name: 'twitter:description', content: t('seo.description') },
    { name: 'twitter:image', content: `${siteUrl}/social-sharing-image.jpg` },
  ],
  link: [
    { rel: 'canonical', href: siteUrl }
  ],
  htmlAttrs: {
    lang: 'x-default' // Укажите основной язык или оставьте так
  },
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: `Dakheem Real Estate Roadshow - ${t('about.heading')}`,
        startDate: '2025-06-27T09:00', // Укажите точную дату и время начала
        endDate: '2025-06-28T18:00',   // Укажите точную дату и время окончания
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: {
          '@type': 'Place',
          name: 'Hilton Tashkent City', // Название места
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1 Ukchi Street',
            addressLocality: 'Tashkent',
            postalCode: '100027',
            addressCountry: 'UZ'
          }
        },
        image: [
          `${siteUrl}/social-sharing-image.jpg`
        ],
        description: t('about.text'),
        offers: {
          '@type': 'Offer',
          url: siteUrl,
          price: '0',
          priceCurrency: 'AED',
          availability: 'https://schema.org/InStock',
          validFrom: '2025-06-17',
        },
        organizer: {
          '@type': 'Organization',
          name: 'Dakheem Real Estate',
          url: siteUrl
        }
      })
    }
  ]
});
</script>