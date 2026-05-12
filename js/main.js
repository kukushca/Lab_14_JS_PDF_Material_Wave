import '../css/style.css';

const editableElements = document.querySelectorAll('[contenteditable="true"]');

editableElements.forEach(el => {

  const savedValue = localStorage.getItem(el.id);
  if (savedValue) el.innerText = savedValue;

  el.addEventListener('input', () => {
    localStorage.setItem(el.id, el.innerText);
  });
});


const downloadBtn = document.getElementById('download-btn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    window.print();
  });
}


document.addEventListener('mousedown', (e) => {
  const target = e.target.closest('.resume-container');
  if (!target) return;

  const circle = document.createElement('span');
  const diameter = Math.max(target.clientWidth, target.clientHeight);
  const radius = diameter / 2;
  const rect = target.getBoundingClientRect();

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - rect.left - radius}px`;
  circle.style.top = `${e.clientY - rect.top - radius}px`;
  circle.classList.add('ripple');

  const oldRipple = target.querySelector('.ripple');
  if (oldRipple) oldRipple.remove();

  target.appendChild(circle);
  setTimeout(() => circle.remove(), 600);
});
