const translations = {
  en: {
    lang_label: '🌐 Language:',
    nav_tools: 'Tools', nav_news: 'News', nav_discord: 'Discord',
    hero_title: 'Your Pokémon GO Hub',
    hero_sub: 'Tools, news, and community — all in one place for trainers worldwide.',
    tools_title: 'Trainer Tools',
    tool_leaderboards: 'Leaderboards', tool_community_map: 'Community Map',
    tool_vivillon: 'Vivillon Gift Exchange', tool_nest_map: 'Nest Map',
    tool_events: 'Event Calendar', tool_infographics: 'Infographics',
    tool_news: 'News', tool_discord: 'Discord',
    news_title: 'Latest News', news_more: 'View All News',
    discord_title: 'Join Our Community',
    discord_sub: 'Connect with thousands of Pokémon GO trainers, share raids, and stay up to date.',
    discord_btn: 'Join Discord',
    footer_text: '© 2026 PoGORaids.net — Not affiliated with Niantic or Pokémon GO.',
  },
  es: {
    lang_label: '🌐 Idioma:',
    nav_tools: 'Herramientas', nav_news: 'Noticias', nav_discord: 'Discord',
    hero_title: 'Tu centro de Pokémon GO',
    hero_sub: 'Herramientas, noticias y comunidad — todo en un lugar para entrenadores de todo el mundo.',
    tools_title: 'Herramientas para Entrenadores',
    tool_leaderboards: 'Clasificaciones', tool_community_map: 'Mapa Comunitario',
    tool_vivillon: 'Intercambio de Regalos Vivillon', tool_nest_map: 'Mapa de Nidos',
    tool_events: 'Calendario de Eventos', tool_infographics: 'Infografías',
    tool_news: 'Noticias', tool_discord: 'Discord',
    news_title: 'Últimas Noticias', news_more: 'Ver Todas las Noticias',
    discord_title: 'Únete a Nuestra Comunidad',
    discord_sub: 'Conéctate con miles de entrenadores de Pokémon GO, comparte incursiones y mantente al día.',
    discord_btn: 'Unirse a Discord',
    footer_text: '© 2026 PoGORaids.net — No afiliado con Niantic ni Pokémon GO.',
  },
  pt: {
    lang_label: '🌐 Idioma:',
    nav_tools: 'Ferramentas', nav_news: 'Notícias', nav_discord: 'Discord',
    hero_title: 'O seu hub de Pokémon GO',
    hero_sub: 'Ferramentas, notícias e comunidade — tudo num só lugar para treinadores de todo o mundo.',
    tools_title: 'Ferramentas para Treinadores',
    tool_leaderboards: 'Classificações', tool_community_map: 'Mapa da Comunidade',
    tool_vivillon: 'Troca de Presentes Vivillon', tool_nest_map: 'Mapa de Ninhos',
    tool_events: 'Calendário de Eventos', tool_infographics: 'Infográficos',
    tool_news: 'Notícias', tool_discord: 'Discord',
    news_title: 'Últimas Notícias', news_more: 'Ver Todas as Notícias',
    discord_title: 'Junte-se à Nossa Comunidade',
    discord_sub: 'Conecte-se com milhares de treinadores de Pokémon GO, partilhe raids e fique a par das novidades.',
    discord_btn: 'Entrar no Discord',
    footer_text: '© 2026 PoGORaids.net — Não afiliado à Niantic ou Pokémon GO.',
  },
  nl: {
    lang_label: '🌐 Taal:',
    nav_tools: 'Tools', nav_news: 'Nieuws', nav_discord: 'Discord',
    hero_title: 'Jouw Pokémon GO Hub',
    hero_sub: 'Tools, nieuws en community — alles op één plek voor trainers wereldwijd.',
    tools_title: 'Trainer Tools',
    tool_leaderboards: 'Ranglijsten', tool_community_map: 'Community Kaart',
    tool_vivillon: 'Vivillon Cadeau Ruil', tool_nest_map: 'Nestenkaart',
    tool_events: 'Evenementenkalender', tool_infographics: 'Infographics',
    tool_news: 'Nieuws', tool_discord: 'Discord',
    news_title: 'Laatste Nieuws', news_more: 'Bekijk Al het Nieuws',
    discord_title: 'Word Lid van Onze Community',
    discord_sub: 'Verbind met duizenden Pokémon GO-trainers, deel raids en blijf op de hoogte.',
    discord_btn: 'Discord Joinen',
    footer_text: '© 2026 PoGORaids.net — Niet gelieerd aan Niantic of Pokémon GO.',
  },
  de: {
    lang_label: '🌐 Sprache:',
    nav_tools: 'Tools', nav_news: 'Neuigkeiten', nav_discord: 'Discord',
    hero_title: 'Dein Pokémon GO Hub',
    hero_sub: 'Tools, Neuigkeiten und Community — alles an einem Ort für Trainer weltweit.',
    tools_title: 'Trainer-Tools',
    tool_leaderboards: 'Bestenlisten', tool_community_map: 'Community-Karte',
    tool_vivillon: 'Vivillon Geschenkaustausch', tool_nest_map: 'Nesterkarte',
    tool_events: 'Eventkalender', tool_infographics: 'Infografiken',
    tool_news: 'Neuigkeiten', tool_discord: 'Discord',
    news_title: 'Aktuelle Neuigkeiten', news_more: 'Alle Neuigkeiten anzeigen',
    discord_title: 'Tritt unserer Community bei',
    discord_sub: 'Verbinde dich mit tausenden Pokémon GO-Trainern, teile Raids und bleib auf dem Laufenden.',
    discord_btn: 'Discord beitreten',
    footer_text: '© 2026 PoGORaids.net — Nicht mit Niantic oder Pokémon GO verbunden.',
  },
};

let currentLang = localStorage.getItem('pogoraids_lang') || 'en';

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
  localStorage.setItem('pogoraids_lang', lang);
  currentLang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyTranslations(btn.dataset.lang));
});

applyTranslations(currentLang);
