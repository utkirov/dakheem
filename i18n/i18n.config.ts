import en from '~/i18n/locales/en.json'
import ru from '~/i18n/locales/ru.json'
import uz from '~/i18n/locales/uz.json'
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en,
        ru,
        uz,

    }
}))