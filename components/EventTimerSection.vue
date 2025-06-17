<template>
  <section class="container event-section">
    <div class="wrapper">
      <div class="timer-block" data-aos="fade-up" data-aos-duration="600">
        <SectionTitle>Time of event</SectionTitle>
        <div class="timer-items">
          <div
              v-for="(item, index) in timerItems"
              :key="item.label"
              class="item"
              :data-aos="item.animation"
              data-aos-duration="600"
              :data-aos-delay="150 * index"
          >
            <span class="number">{{ item.value.value }}</span>
            <span class="label">{{ item.label }}</span>
          </div>
        </div>
      </div>

      <div class="calendar-wrapper">
        <div class="calendar-header" data-aos="fade" data-aos-duration="500">
          June 2025
        </div>
        <div class="calendar-grid">
          <div
              v-for="(dayName, index) in dayNames"
              :key="dayName"
              class="day-name"
              data-aos="fade"
              data-aos-duration="500"
              :data-aos-delay="50 * index"
          >
            {{ dayName }}
          </div>

          <div
              class="day"
              v-for="day in 30"
              :key="day"
              :class="{ 'active': day === 27 || day === 28 }"
              data-aos="zoom-in"
              data-aos-duration="300"
              :data-aos-delay="200 + (day * 30)"
          >
            {{ day }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Скрипт таймера
const days = ref('00');
const hours = ref('00');
const minutes = ref('00');
const seconds = ref('00');
// Добавляем разные типы анимации для каждого блока таймера
const timerItems = [
  { label: 'Days', value: days, animation: 'fade-right' },
  { label: 'Hours', value: hours, animation: 'fade-up' },
  { label: 'Minutes', value: minutes, animation: 'fade-up' },
  { label: 'Seconds', value: seconds, animation: 'fade-left' }
];

// Названия дней недели для удобной анимации
const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const targetDate = new Date('2025-06-27T18:00:00');
let intervalId = null;

function updateCountdown() {
  const diff = targetDate.getTime() - new Date().getTime();
  if (diff <= 0) {
    clearInterval(intervalId);
    days.value = '00'; hours.value = '00'; minutes.value = '00'; seconds.value = '00';
    return;
  }
  days.value = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
  hours.value = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  minutes.value = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, '0');
  seconds.value = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
}

onMounted(() => {
  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.event-section {
  overflow-x: hidden;
  padding: 64px 20px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
}
.timer-block {
  width: 100%;
}
.timer-items {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;
}
.item {
  text-align: left;
}
.number {
  display: block;
  font-weight: 500;
  line-height: 1;
  font-size: clamp(3rem, 15vw, 6rem);
  color: var(--foreground);
}
.label {
  display: block;
  font-size: 14px;
  text-transform: uppercase;
  color: var(--muted);
}
.calendar-wrapper {
  width: 100%;
  max-width: 320px;
  border: 1px solid var(--border);
  padding: 16px;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}
.calendar-header {
  text-align: center;
  margin-bottom: 16px;
  font-weight: 500;
  color: var(--foreground);
}
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  justify-items: center;
}
.day-name {
  color: var(--muted);
  font-size: 14px;
  font-weight: 500;
}
.day {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 50%;
  color: var(--foreground);
  transition: background-color 0.2s, color 0.2s;
}
.day.active {
  background-color: var(--foreground);
  color: var(--background);
  font-weight: 700;
}
@media (min-width: 1024px) {
  .event-section { padding: 96px 20px; }
  .wrapper { flex-direction: row; justify-content: space-between; align-items: center; }
  .number { font-size: clamp(5rem, 10vw, 8rem); }
  .timer-items { gap: 32px; }
}
</style>