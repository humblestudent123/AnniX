// const video = document.getElementById('video');
// const playBtn = document.getElementById('play');
// const pauseBtn = document.getElementById('pause');
// const progress = document.getElementById('progress');
// const currentTimeSpan = document.getElementById('currentTime');
// const durationSpan = document.getElementById('duration');

// // Воспроизведение
// playBtn.addEventListener('click', () => {
//   video.play();
// });

// // Пауза
// pauseBtn.addEventListener('click', () => {
//   video.pause();
// });

// // Обновление прогресс-бара
// video.addEventListener('timeupdate', () => {
//   progress.value = video.currentTime;
//   progress.max = video.duration;
// });

// // Перемотка
// progress.addEventListener('input', () => {
//   video.currentTime = progress.value;
// });



// //fullscreen
// const fullscreenBtn = document.getElementById('fullscreen');
// const videoContainer = document.querySelector('.video-container');

// fullscreenBtn.addEventListener('click', () => {
//   if (!document.fullscreenElement) {
//     videoContainer.requestFullscreen().catch(err => {
//       alert(`Ошибка при переходе в полноэкранный режим: ${err.message}`);
//     });
//   } else {
//     document.exitFullscreen();
//   }
// });


// const KeyFFulscreen = document.getElementById('KeyFFulscreen')


// KeyFFulscreen.addEventListener('click', () => {
//   if (!document.fullscreenElement) {
//     videoContainer.requestFullscreen().catch(err1 => {
//       alert(`Ошибка при переходе в полноэкранный режим: ${err1.message1}`);
//     });
//   } else {
//     document.exitFullscreen();
//   }
// });


















// // Функция форматирования секунд в ММ:СС
// function formatTime(seconds) {
//   const mins = Math.floor(seconds / 60);
//   const secs = Math.floor(seconds % 60);
//   return `${mins}:${secs.toString().padStart(2, '0')}`;
// }

// // Обновляем прогресс и текущее время
// video.addEventListener('timeupdate', () => {
//   progress.value = video.currentTime;
//   currentTimeSpan.textContent = formatTime(video.currentTime);
// });

// // Устанавливаем максимальное значение и полную длительность при загрузке
// video.addEventListener('loadedmetadata', () => {
//   progress.max = video.duration;
//   durationSpan.textContent = formatTime(video.duration);
// });

// // Перемотка
// progress.addEventListener('input', () => {
//   video.currentTime = progress.value;
// });

// // Управление воспроизведением
// playBtn.addEventListener('click', () => video.play());
// pauseBtn.addEventListener('click', () => video.pause());





// //остановка пробелом и перематывание стрелками на 5 сек вперёд и назад
// document.addEventListener('keydown', (e) => {
//   const tag = document.activeElement.tagName;

//   // Игнорируем, если пользователь набирает текст в input/textarea
//   if (['INPUT', 'TEXTAREA'].includes(tag)) return;

//   switch (e.code) {
//     case 'Space':
//       e.preventDefault(); // Отключаем прокрутку
//       if (video.paused) {
//         video.play();
//       } else {
//         video.pause();
//       }
//       break;

//     case 'ArrowRight':
//       video.currentTime = Math.min(video.currentTime + 5, video.duration);
//       break;

//     case 'ArrowLeft':
//       video.currentTime = Math.max(video.currentTime - 5, 0);
//       break;
//   }
// });



const video = document.getElementById("video");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");
const fullscreen = document.getElementById("fullscreen");

// Обновляем продолжительность
video.addEventListener("loadedmetadata", () => {
  progress.max = Math.floor(video.duration);
  duration.textContent = formatTime(video.duration);
});

// Воспроизведение
playBtn.addEventListener("click", () => {
  video.play();
});

// Пауза
pauseBtn.addEventListener("click", () => {
  video.pause();
});

// Обновление времени
video.addEventListener("timeupdate", () => {
  progress.value = Math.floor(video.currentTime);
  currentTime.textContent = formatTime(video.currentTime);
});

// Перемотка
progress.addEventListener("input", () => {
  video.currentTime = progress.value;
});

// Полноэкранный режим
fullscreen.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});

// Форматирование времени
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${min}:${sec}`;
}



