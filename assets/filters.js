const filters = document.querySelector('.filters');
const projectCards = Array.from(document.querySelectorAll('[data-category]'));
const status = document.querySelector('#project-status');

if (filters && status) {
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const selected = event.target.closest('button[data-filter]');
    if (!selected) return;

    filters.querySelectorAll('button[data-filter]').forEach(button => {
      button.setAttribute('aria-pressed', String(button === selected));
    });

    const category = selected.dataset.filter;
    let visibleCount = 0;
    projectCards.forEach(card => {
      card.hidden = category !== 'All' && card.dataset.category !== category;
      if (!card.hidden) visibleCount += 1;
    });
    status.textContent = `${visibleCount} projects shown`;
  });
}
