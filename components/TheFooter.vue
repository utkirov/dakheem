<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">

        <div class="footer-column" data-aos="fade-up" data-aos-delay="100">
          <h3 class="logo">DAKHEEM</h3>
          <p class="description">
            Your key to unlocking Dubai's most exclusive real estate opportunities.
          </p>
          <div class="social-links">
            <a href="#" aria-label="Instagram" class="social-link">
              <Icon name="ph:instagram-logo-bold" />
            </a>
            <a href="#" aria-label="Facebook" class="social-link">
              <Icon name="ph:facebook-logo-bold" />
            </a>
            <a href="#" aria-label="LinkedIn" class="social-link">
              <Icon name="ph:linkedin-logo-bold" />
            </a>
            <a href="#" aria-label="X (Twitter)" class="social-link">
              <Icon name="ph:x-logo-bold" />
            </a>
          </div>
        </div>

        <div class="footer-column" data-aos="fade-up" data-aos-delay="200">
          <h4 class="column-title">Quick Links</h4>
          <ul class="link-list">
            <li><a href="#about">About Us</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#contacts">Location</a></li>
            <li><a href="#">Roadshow</a></li>
          </ul>
        </div>

        <div class="footer-column" data-aos="fade-up" data-aos-delay="300">
          <h4 class="column-title">Contact Us</h4>
          <ul class="link-list contact-list">
            <li>
              <Icon name="ph:map-pin-bold" />
              <span>Dubai, UAE</span>
            </li>
            <li>
              <Icon name="ph:phone-bold" />
              <span>+971 (4) 123 4567</span>
            </li>
            <li>
              <Icon name="ph:envelope-simple-bold" />
              <span>contact@dakheem.ae</span>
            </li>
          </ul>
        </div>

        <div class="footer-column" data-aos="fade-up" data-aos-delay="400">
          <h4 class="column-title">Stay Updated</h4>
          <p class="description">Get the latest news and offers straight to your inbox.</p>
          <form class="subscribe-form">
            <input type="email" placeholder="Your email address" class="subscribe-input" />
            <BaseButton variant="primary" class="subscribe-button">Subscribe</BaseButton>
          </form>
        </div>

      </div>

      <div class="footer-bottom" data-aos="fade-up" data-aos-delay="500">
        <p class="copyright">© {{ new Date().getFullYear() }} DAKHEEM. All Rights Reserved.</p>
        <div class="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

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