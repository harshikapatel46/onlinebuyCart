document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.card__swatches').forEach(group => {
    const label = group.querySelector('.swatch-label');
    group.querySelectorAll('.swatch').forEach(sw => {
      sw.addEventListener('click', () => {
        group.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
        sw.classList.add('active');
        if (label) label.textContent = sw.title;
      });
    });
  });
});