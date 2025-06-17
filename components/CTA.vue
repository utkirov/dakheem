<template>
  <footer class="footer">
    <div class="container content">
      <h3 class="heading">Want to be the first to know about the best Dubai real estate deals?</h3>
      <BaseButton>Yes, I want to!</BaseButton>
    </div>
  </footer>
</template>
<style scoped>
.footer { padding: 64px 20px; }
.content { display: flex; flex-direction: column; align-items: center; text-align: center; }
.heading { margin-bottom: 32px; max-width: 48rem; font-size: 24px; font-weight: 500; color: var(--foreground); }
@media (min-width: 768px) { .heading { font-size: 30px; } }
@media (min-width: 1024px) { .footer { padding: 96px 20px; } }
</style>
<script setup lang="ts">
</script>