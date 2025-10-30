function spinWheel() {
    const wheel = document.getElementById('wheel');
    const result = document.getElementById('result');
    const button = document.getElementById('spinButton');

    const prizes = ['Quà 1', 'Quà 2', 'Quà 3', 'Quà 4', 'Quà 5', 'Quà 6'];
    let isSpinning = false;
    let currentRotation = 0;
    button.addEventListener('click', () => {
        if (isSpinning) return;
        isSpinning = true;
        result.textContent = '';

        // quay ngẫu nhiên 
        const randomSpin = 360 * (3 + Math.floor(Math.random() * 3)) + Math.floor(Math.random() * 360);
        currentRotation += randomSpin;

        wheel.style.transform = `rotate(${currentRotation}deg)`;

        setTimeOut(() => {
            const degree = currentRotation % 360;
            const index = Math.floor((360 - degree) / 60) % 6;
            result.textContent = `Chúc mừng bạn nhận được: ${prizes[index]}!`;
            isSpinning = false;
        }, 4200);
    });
}