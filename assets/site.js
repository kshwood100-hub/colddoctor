// 전화번호 복사 (PC용)
const copyBtn = document.querySelector('.copy');
const copyNote = document.querySelector('.copy-note');
copyBtn?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyBtn.dataset.copy);
    copyNote.textContent = '번호를 복사했습니다.';
  } catch {
    copyNote.textContent = '전화번호: ' + copyBtn.dataset.copy;
  }
});

// 사진 크게 보기
const lb = document.querySelector('.lb');
const items = [...document.querySelectorAll('.gallery a')];
const lbImg = lb.querySelector('img');
const lbCap = lb.querySelector('.lb-cap');
let cur = 0;

function show(i) {
  cur = (i + items.length) % items.length;
  lbImg.src = items[cur].getAttribute('href');
  lbImg.alt = items[cur].querySelector('img').alt;
  lbCap.textContent = items[cur].dataset.cap;
}

items.forEach((a, i) => a.addEventListener('click', (e) => {
  e.preventDefault();
  show(i);
  lb.showModal();
}));
lb.querySelector('.lb-close').addEventListener('click', () => lb.close());
lb.querySelector('.lb-prev').addEventListener('click', () => show(cur - 1));
lb.querySelector('.lb-next').addEventListener('click', () => show(cur + 1));
lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });
lb.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') show(cur - 1);
  if (e.key === 'ArrowRight') show(cur + 1);
});
