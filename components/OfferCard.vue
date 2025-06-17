<template>
  <a href="#cta" @click.prevent="scrollTo('#cta')" class="list-item">
    <div class="icon-wrapper">
      <Icon :name="icon" class="icon" />
    </div>
    <div class="text-content">
      <h4 class="title">{{ title }}</h4>
      <p class="description">{{ description }}</p>
    </div>
    <div class="arrow-wrapper">
      <Icon name="ph:arrow-right-bold" />
    </div>
  </a>
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
defineProps({
  icon: String,
  title: String,
  description: String
});
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 12px;
  text-decoration: none;
  /* Плавный переход для всех эффектов */
  transition: all 0.3s ease-in-out;
}

/* --- НОВЫЙ ЭФФЕКТ СВЕЧЕНИЯ ПРИ НАВЕДЕНИИ --- */
.list-item:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
  /* Создаем тень цвета --primary, что и дает эффект свечения */
  box-shadow: 0 10px 20px -5px var(--primary);
  /* Для тёмной темы, чтобы свечение было заметнее */
  filter: brightness(1.1);
}

.icon-wrapper {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background-color: var(--border);
  border-radius: 12px;
  transition: all 0.3s ease;
}
.icon {
  font-size: 32px;
  color: var(--primary);
}
.text-content {
  flex-grow: 1;
}
.title {
  font-size: 20px;
  font-weight: 700;
  color: var(--foreground);
  margin: 0 0 8px 0;
}
.description {
  font-size: 16px;
  color: var(--muted);
  line-height: 1.6;
  margin: 0;
}
.arrow-wrapper {
  font-size: 24px;
  color: var(--muted);
  transition: transform 0.3s ease, color 0.3s ease;
}
.list-item:hover .arrow-wrapper {
  transform: translateX(5px);
  color: var(--primary);
}
</style>