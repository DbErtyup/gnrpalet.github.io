const glass = document.getElementById('glass');

// Cihazın mobil olup olmadığını kontrol et
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (!isMobile) {
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = glass.getBoundingClientRect();

        // Hafif ve performanslı eğilme (Açıları düşürdük: /25)
        const rotateX = (height / 2 - (clientY - top)) / 25;
        const rotateY = ((clientX - left) - width / 2) / 25;

        // requestAnimationFrame kullanarak tarayıcıyı yormadan güncelleme yapabiliriz
        requestAnimationFrame(() => {
            glass.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    });

    document.addEventListener('mouseleave', () => {
        glass.style.transform = 'rotateX(0deg) rotateY(0deg)';
        glass.style.transition = 'transform 0.5s ease';
    });
}
