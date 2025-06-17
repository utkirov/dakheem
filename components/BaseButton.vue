<template>
  <button :class="variant">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  // 'primary' - основная кнопка с заливкой, теперь всегда инвертирует цвета фона/текста
  // 'secondary' - кнопка с обводкой
  variant: {
    type: String,
    default: 'primary'
  }
});
</script>

<style scoped>
button {
  padding: 12px 28px;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 0px; /* Убираем скругление, как на макете */
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

/* Основная кнопка с заливкой.
  Эта логика теперь работает для ОБЕИХ тем автоматически.
  В светлой теме: фон --foreground (черный), текст --background (белый).
  В темной теме: фон --foreground (белый), текст --background (черный).
*/
.primary {
  background-color: var(--foreground);
  border-color: var(--foreground);
  color: var(--background);
}
.primary:hover {
  opacity: 0.85;
}

/* Второстепенная кнопка с обводкой */
.secondary {
  background-color: transparent;
  border-color: var(--border);
  color: var(--background);
}
.secondary:hover {
  border-color: var(--foreground);
  color: var(--foreground);
  background-color: var(--placeholder);
}
</style>