// Tạo hiệu ứng hoa nền
const background = document.getElementById('background');
for (let i = 0; i < 15; i++) {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.animationDelay = `${Math.random() * 15}s`;
    background.appendChild(flower);
}

// Xử lý mở thiệp
const envelope = document.getElementById('envelope');
const card = document.getElementById('card');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
const heartsContainer = document.getElementById('hearts');

envelope.addEventListener('click', function () {
    envelope.classList.add('open');
    setTimeout(() => {
        card.classList.add('show');
        overlay.classList.add('show');
        createHearts();
    }, 800);
});

closeBtn.addEventListener('click', closeCard);
overlay.addEventListener('click', closeCard);

function closeCard() {
    card.classList.remove('show');
    overlay.classList.remove('show');
    envelope.classList.remove('open');
}

// Tạo hiệu ứng trái tim
function createHearts() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animation = `heartFloat ${2 + Math.random() * 2}s ease-in-out forwards`;
            heartsContainer.appendChild(heart);
            setTimeout(() => heart.remove(), 4000);
        }, i * 200);
    }
}

// Xử lý phát nhạc
const playBtn = document.getElementById('playMusic');
const bgMusic = document.getElementById('bgMusic');
const musicPlayer = document.querySelector('.music-player');
let isPlaying = false;

playBtn.addEventListener('click', function () {
    if (!isPlaying) {
        bgMusic.play();
        playBtn.textContent = "⏸ Tạm dừng";
        musicPlayer.classList.add('active');
        isPlaying = true;
    } else {
        bgMusic.pause();
        playBtn.textContent = "🎵 Phát nhạc";
        musicPlayer.classList.remove('active');
        isPlaying = false;
    }
});
