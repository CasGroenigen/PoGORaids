// Placeholder news — replace with real API/CMS feed
const newsArticles = [
  {
    tag: 'Event',
    headline: 'Pokémon GO Fest 2026 Dates Announced — Here\'s What We Know',
    date: 'March 25, 2026',
    icon: '🎪',
    href: '/news/go-fest-2026',
  },
  {
    tag: 'Raids',
    headline: 'Mega Rayquaza Returns to Raids Starting Next Week',
    date: 'March 24, 2026',
    icon: '⚔️',
    href: '/news/mega-rayquaza-raids',
  },
  {
    tag: 'Update',
    headline: 'Season of Legends: Full Details and New Pokémon Revealed',
    date: 'March 22, 2026',
    icon: '✨',
    href: '/news/season-of-legends',
  },
  {
    tag: 'Community',
    headline: 'Community Day Voting Results — Trainers Have Spoken!',
    date: 'March 20, 2026',
    icon: '🗳️',
    href: '/news/community-day-vote',
  },
];

function renderNews() {
  const grid = document.getElementById('news-grid');
  if (!grid) return;
  grid.innerHTML = newsArticles.map(article => `
    <a href="${article.href}" class="news-card">
      <div class="news-card-img">${article.icon}</div>
      <div class="news-card-body">
        <span class="news-tag">${article.tag}</span>
        <h3 class="news-headline">${article.headline}</h3>
        <span class="news-date">${article.date}</span>
      </div>
    </a>
  `).join('');
}

renderNews();
