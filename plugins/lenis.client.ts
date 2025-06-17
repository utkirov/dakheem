import Lenis from '@studio-freight/lenis'

export default defineNuxtPlugin((nuxtApp) => {
    // Инициализируем Lenis с настройками для плавности
    const lenis = new Lenis({
        lerp: 0.05, // Коэффициент "вязкости". Чем меньше, тем плавнее.
        duration: 1.2,
        smoothTouch: true,
    })

    // Запускаем цикл обновления анимации
    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Делаем экземпляр lenis доступным во всем приложении,
    // чтобы управлять им из компонентов (например, для якорных ссылок)
    nuxtApp.provide('lenis', lenis)
})