/* Shared search and filter behaviour for the Ember and Tide folder shelves. */
(function () {
  var shelf = document.querySelector('[data-shelf]');
  if (!shelf) return;

  var search = shelf.querySelector('[data-search-input]');
  var chips = Array.prototype.slice.call(shelf.querySelectorAll('[data-filter]'));
  var groups = Array.prototype.slice.call(shelf.querySelectorAll('[data-shelf-group]'));
  var cards = Array.prototype.slice.call(shelf.querySelectorAll('[data-shelf-card]'));
  var count = shelf.querySelector('[data-result-count]');
  var empty = shelf.querySelector('[data-empty-state]');
  var clear = shelf.querySelector('[data-clear]');
  var activeGroup = 'all';

  cards.forEach(function (card) {
    card.dataset.haystack = (card.textContent + ' ' + (card.dataset.search || '')).toLowerCase();
  });

  function apply() {
    var query = search.value.trim().toLowerCase();
    var shown = 0;

    cards.forEach(function (card) {
      var group = card.closest('[data-shelf-group]').dataset.shelfGroup;
      var inGroup = activeGroup === 'all' || group === activeGroup;
      var inQuery = !query || card.dataset.haystack.indexOf(query) !== -1;
      card.hidden = !(inGroup && inQuery);
      if (!card.hidden) shown += 1;
    });

    groups.forEach(function (group) {
      group.hidden = group.querySelectorAll('[data-shelf-card]:not([hidden])').length === 0;
    });

    count.textContent = 'Showing ' + shown + ' of ' + cards.length + ' tools';
    empty.hidden = shown !== 0;
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      activeGroup = chip.dataset.filter;
      chips.forEach(function (other) {
        var active = other === chip;
        other.classList.toggle('is-active', active);
        other.setAttribute('aria-pressed', String(active));
      });
      apply();
    });
  });

  search.addEventListener('input', apply);
  if (clear) clear.addEventListener('click', function () {
    search.value = '';
    chips[0].click();
    search.focus();
  });

  document.addEventListener('keydown', function (event) {
    var target = event.target;
    var typing = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
    if (event.key === '/' && !typing && !event.metaKey && !event.ctrlKey && !event.altKey) {
      event.preventDefault();
      search.focus();
    } else if (event.key === 'Escape' && typing) {
      if (search.value) {
        search.value = '';
        apply();
      } else {
        search.blur();
      }
    }
  });

  apply();
})();
