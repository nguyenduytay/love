// Tạo hiệu ứng lá rơi
function createFallingLeaves() {
  const fallingLeavesContainer = document.getElementById("fallingLeaves");
  const leafCount = 15;

  for (let i = 0; i < leafCount; i++) {
    const leaf = document.createElement("div");
    leaf.classList.add("leaf");

    // Random position and animation delay
    const left = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = 8 + Math.random() * 7;

    leaf.style.left = `${left}%`;
    leaf.style.animationDelay = `${delay}s`;
    leaf.style.animationDuration = `${duration}s`;

    // Random size
    const size = 20 + Math.random() * 20;
    leaf.style.width = `${size}px`;
    leaf.style.height = `${size}px`;

    // Random color
    const colors = [
      "linear-gradient(45deg, #ff8c00, #ff4500)",
      "linear-gradient(45deg, #ff4500, #8b4513)",
      "linear-gradient(45deg, #8b4513, #a0522d)",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    leaf.style.background = randomColor;

    fallingLeavesContainer.appendChild(leaf);
  }
}

// Tạo hiệu ứng bóng bay
function createBalloons() {
  const sky = document.getElementById("sky");

  sky.addEventListener("click", function (e) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    // Vị trí bóng bay
    const x = e.clientX - sky.getBoundingClientRect().left;
    balloon.style.left = `${x}px`;

    // Màu sắc ngẫu nhiên
    const colors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#6A0572", "#1A535C"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.background = randomColor;

    // Kích thước ngẫu nhiên
    const size = 30 + Math.random() * 40;
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.2}px`;

    // Thời gian bay lên ngẫu nhiên
    const duration = 10 + Math.random() * 10;
    balloon.style.animationDuration = `${duration}s`;

    sky.appendChild(balloon);

    // Xóa bóng bay sau khi hoàn thành animation
    setTimeout(() => {
      balloon.remove();
    }, duration * 1000);
  });
}

// Đếm ngược
function startCountdown() {
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  // Đặt ngày kết thúc (30 ngày từ hôm nay)
  const countDownDate = new Date();
  countDownDate.setDate(countDownDate.getDate() + 30);

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.textContent = days.toString().padStart(2, "0");
    hoursElement.textContent = hours.toString().padStart(2, "0");
    minutesElement.textContent = minutes.toString().padStart(2, "0");
    secondsElement.textContent = seconds.toString().padStart(2, "0");

    if (distance < 0) {
      clearInterval(countdownInterval);
      daysElement.textContent = "00";
      hoursElement.textContent = "00";
      minutesElement.textContent = "00";
      secondsElement.textContent = "00";
    }
  }

  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);
}

// Hiệu ứng confetti
function createConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiPieces = [];
  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#FFE66D",
    "#6A0572",
    "#1A535C",
    "#FF9A9E",
    "#FAD0C4",
  ];

  // Tạo các mảnh confetti
  for (let i = 0; i < 150; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 10 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 3 + 2,
      angle: Math.random() * 360,
      rotationSpeed: Math.random() * 10 - 5,
    });
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiPieces.forEach((confetti) => {
      ctx.save();
      ctx.translate(confetti.x, confetti.y);
      ctx.rotate((confetti.angle * Math.PI) / 180);

      ctx.fillStyle = confetti.color;
      ctx.fillRect(
        -confetti.size / 2,
        -confetti.size / 2,
        confetti.size,
        confetti.size
      );

      ctx.restore();

      // Cập nhật vị trí
      confetti.y += confetti.speed;
      confetti.angle += confetti.rotationSpeed;

      // Nếu confetti ra khỏi màn hình, đặt lại vị trí
      if (confetti.y > canvas.height) {
        confetti.y = -confetti.size;
        confetti.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(drawConfetti);
  }

  drawConfetti();
}

// Nút bất ngờ
function setupSurpriseButton() {
  const surpriseBtn = document.getElementById("surpriseBtn");

  surpriseBtn.addEventListener("click", function () {
    // Hiệu ứng confetti
    createConfetti();

    // Hiển thị thông điệp
    const messageBox = document.querySelector(".message-box");
    const newMessage = document.createElement("div");
    newMessage.innerHTML = `
            <h3 style="margin-top: 20px; color: #ff6b6b;">Bất ngờ dành cho cô!</h3>
            <p style="font-size: 1.2rem; margin-top: 10px;">Hãy luôn nhớ rằng cô xứng đáng với mọi điều tốt đẹp nhất. Tháng 10 này sẽ mang đến cho cô nhiều niềm vui và hạnh phúc!</p>
        `;
    messageBox.appendChild(newMessage);

    // Đổi màu nền
    document.body.style.background =
      "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)";

    // Vô hiệu hóa nút sau khi nhấn
    surpriseBtn.disabled = true;
    surpriseBtn.textContent = "Cảm ơn vì đã khám phá!";
  });
}

// Khởi tạo khi trang được tải
document.addEventListener("DOMContentLoaded", function () {
  createFallingLeaves();
  createBalloons();
  startCountdown();
  setupSurpriseButton();

  // Thêm hiệu ứng cho các phần tử khi cuộn
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeIn 1s ease-in-out forwards";
      }
    });
  }, observerOptions);

  // Quan sát các phần tử để thêm hiệu ứng
  const elementsToAnimate = document.querySelectorAll(
    ".hero, .message-box, .interactive-section, .countdown-section"
  );
  elementsToAnimate.forEach((el) => {
    observer.observe(el);
  });
});

// Xử lý thay đổi kích thước cửa sổ
window.addEventListener("resize", function () {
  const canvas = document.getElementById("confettiCanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ===== FORTUNE MODAL JAVASCRIPT =====
// Danh sách các quẻ bói
const fortuneMessages = [
  {
    title: "💘 Quẻ Được Yêu",
    image: "./images/fortune_0.jpg",
    message: "Tháng 10 này, bạn sẽ được một người cực kỳ lãng mạn để ý! Hãy chuẩn bị tinh thần cho những lời tỏ tình siêu ngọt ngào."
  },
  {
    title: "🌟 Quẻ Được Thương",
    image: "./images/fortune_1.jpg",
    message: "Một người đặc biệt sẽ 'fall in love' với bạn ngay từ cái nhìn đầu tiên. Tình yêu đẹp đang chờ đợi!"
  },
  {
    title: "💫 Quẻ Say Đắm",
    image: "./images/fortune_2.jpg",
    message: "Bạn sẽ khiến ai đó hoàn toàn say đắm bởi sự duyên dáng và thông minh. Họ sẽ không ngừng khen bạn 'so beautiful' và 'so amazing'!"
  },
  {
    title: "🌸 Quẻ Theo Đuổi",
    image: "./images/fortune_3.jpg",
    message: "Một người sẽ theo đuổi bạn nhiệt tình với những cử chỉ lãng mạn. Hãy sẵn sàng cho những bó hoa lớn và những lời khen ngợi!"
  },
  {
    title: "🎯 Quẻ Lãng Mạn",
    image: "./images/fortune_4.jpg",
    message: "Bạn sắp trải nghiệm sự lãng mạn đích thực! Từ những buổi hẹn hò candlelit dinner đến những lời thì thầm ngọt ngào."
  },
  {
    title: "🌈 Quẻ Tán Tỉnh",
    image: "./images/fortune_5.jpg",
    message: "Bạn sẽ nhận được sự tán tỉnh từ nhiều người khác nhau. Hãy chọn người khiến trái tim bạn rung động nhất!"
  },
  {
    title: "✨ Quẻ Yêu Thầm",
    image: "./images/fortune_6.jpg",
    message: "Một người đang yêu thầm bạn từ xa. Họ sẽ tìm cách tiếp cận và bày tỏ tình cảm vào tháng 10 này."
  },
  // {
  //   title: " Quẻ Paris",
  //   message: "Tình yêu của bạn tháng này sẽ lãng mạn như Paris! Đầy ắp những khoảnh khắc ngọt ngào và bất ngờ."
  // },
  // {
  //   title: " Quẻ Ý",
  //   message: "Một tình yêu đam mê và nồng nhiệt kiểu Ý đang chờ bạn. Sự lãng mạn sẽ khiến bạn không thể quên."
  // },
  // {
  //   title: "💃 Quẻ Nhiệt Huyết",
  //   message: "Một tình yêu đầy đam mê và nhiệt huyết đang chờ bạn! Hãy để trái tim nhảy theo điệu nhạc tình yêu."
  // },
  // {
  //   title: "🎭 Quẻ Bí Ẩn",
  //   message: "Một người bí ẩn sẽ bị cuốn hút bởi bạn. Họ sẽ tìm mọi cách để làm quen và khiến bạn đặc biệt chú ý."
  // },
  // {
  //   title: "🏰 Quẻ Cổ Tích",
  //   message: "Tình yêu của bạn sẽ như một câu chuyện cổ tích! Người ấy sẽ khiến bạn tin vào 'happily ever after'."
  // },
  // {
  //   title: "☕ Quẻ Café",
  //   message: "Một cuộc gặp gỡ tình cờ tại quán café sẽ dẫn đến tình yêu đẹp. Họ sẽ mời bạn đi uống coffee mỗi ngày!"
  // },
  // {
  //   title: "🎬 Quẻ Điện Ảnh",
  //   message: "Tình yêu của bạn sẽ như một bộ phim lãng mạn. Đầy kịch tính, lãng mạn và kết thúc có hậu!"
  // },
  // {
  //   title: "🌹 Quẻ Tặng Hoa",
  //   message: "Bạn sẽ nhận được những bó hoa hồng lớn từ người si tình. Họ không ngại thể hiện tình cảm công khai và lãng mạn."
  // },
  // {
  //   title: "🚲 Quẻ Xe Đạp",
  //   message: "Một người đặc biệt sẽ mời bạn đi xe đạp dạo quanh thành phố - khởi đầu cho một tình yêu đẹp."
  // },
  // {
  //   title: "🎵 Quẻ Âm Nhạc",
  //   message: "Một người đa tài sẽ hát tặng bạn những bài tình ca và khiến trái tim tan chảy."
  // },
  // {
  //   title: "🗽 Quẻ Tự Do",
  //   message: "Một tình yêu tự do, phóng khoáng đang chờ bạn. Họ sẽ tôn trọng và yêu thương bạn theo cách đặc biệt nhất."
  // },
  // {
  //   title: "🍷 Quẻ Rượu Vang",
  //   message: "Một buổi tối với rượu vang và người lãng mạn sẽ thay đổi cuộc đời bạn. Tình yêu đẹp như rượu vang hảo hạng!"
  // },
  // {
  //   title: "✈️ Quẻ Du Lịch",
  //   message: "Bạn sẽ gặp người đặc biệt trong một chuyến du lịch và tình yêu sẽ nảy nở bất ngờ. Một câu chuyện tình đẹp như mơ!"
  // },
  // {
  //   title: "🎓 Quẻ Trí Thức",
  //   message: "Một người trí thức sẽ bị thu hút bởi sự thông minh của bạn. Họ sẽ tìm mọi cơ hội để trò chuyện và tán tỉnh."
  // },
  // {
  //   title: "💌 Quẻ Thư Tình",
  //   message: "Bạn sẽ nhận được những bức thư tình ngọt ngào. Họ không ngại thể hiện tình cảm qua từng con chữ dành cho bạn."
  // },
  // {
  //   title: "🎁 Quẻ Bất Ngờ",
  //   message: "Một tình yêu bất ngờ sẽ đến với bạn khi ít ngờ nhất. Hãy mở lòng đón nhận điều kỳ diệu!"
  // },
  // {
  //   title: "💞 Quẻ Song Hành",
  //   message: "Bạn sẽ tìm thấy người bạn đời tri kỷ - người hiểu và yêu thương bạn vô điều kiện."
  // }
];

// Khởi tạo modal quẻ bói
document.addEventListener("DOMContentLoaded", function () {
  const surpriseBtn = document.getElementById("surpriseBtn");
  const fortuneModal = document.getElementById("fortuneModal");
  const closeFortune = document.getElementById("closeFortune");
  const closeFortuneBtn = document.getElementById("closeFortuneBtn");
  const drawFortune = document.getElementById("drawFortune");
  const fortuneResult = document.getElementById("fortuneResult");

  // Mở modal khi click nút "Khám phá điều bất ngờ"
  surpriseBtn.addEventListener("click", function () {
    fortuneModal.style.display = "block";
    document.body.style.overflow = "hidden";

    // Reset kết quả
    fortuneResult.innerHTML = `
            <h3>Đang rút quẻ...</h3>
            <p>Hãy tập trung và nghĩ về điều bạn muốn biết...</p>
        `;
  });

  // Đóng modal
  function closeModal() {
    fortuneModal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  closeFortune.addEventListener("click", closeModal);
  closeFortuneBtn.addEventListener("click", closeModal);

  // Đóng modal khi click ra ngoài
  fortuneModal.addEventListener("click", function (e) {
    if (e.target === fortuneModal) {
      closeModal();
    }
  });

  // Đóng modal khi nhấn Esc
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && fortuneModal.style.display === "block") {
      closeModal();
    }
  });

  // Rút quẻ
  drawFortune.addEventListener("click", function () {
    // Hiệu ứng loading
    fortuneResult.innerHTML = `
            <h3>🔮 Đang rút quẻ...</h3>
            <p>Hãy chờ một chút...</p>
        `;

    // Tạo hiệu ứng delay
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * fortuneMessages.length);
      const selectedFortune = fortuneMessages[randomIndex];

      fortuneResult.innerHTML = `
                <h3>${selectedFortune.title}</h3>
                <p>${selectedFortune.message}</p>
                <img src="${selectedFortune.image}"   alt="Fortune Image" />
                
            `;

      // Thêm hiệu ứng confetti
      createConfetti();
    }, 2000);
  });
});
