// PoGORaids Event Calendar Data Store
// Edit events here or use the admin panel at /admin-events.html

const POGORAIDS_EVENTS = [

  // ── MAX MONDAYS ──────────────────────────────────────────
  {
    id: "mm-2026-04-07",
    type: "max_monday",
    title: "Max Monday",
    subtitle: "Charmander",
    date: "2026-04-07",
    timeStart: "18:00",
    timeEnd: "21:00",
    recurring: "weekly",
    description: "Charmander appears more frequently in Max Battles. Complete Max Battles at Power Spots for rare rewards.",
    bonuses: ["Increased Charmander spawns", "Bonus Max Particles"],
    featured: "Charmander",
    color: "#ff6b35"
  },
  {
    id: "mm-2026-04-14",
    type: "max_monday",
    title: "Max Monday",
    subtitle: "Squirtle",
    date: "2026-04-14",
    timeStart: "18:00",
    timeEnd: "21:00",
    recurring: "weekly",
    description: "Squirtle takes centre stage in Max Battles this Monday evening.",
    bonuses: ["Increased Squirtle spawns", "Bonus Max Particles"],
    featured: "Squirtle",
    color: "#ff6b35"
  },
  {
    id: "mm-2026-04-21",
    type: "max_monday",
    title: "Max Monday",
    subtitle: "Bulbasaur",
    date: "2026-04-21",
    timeStart: "18:00",
    timeEnd: "21:00",
    recurring: "weekly",
    description: "Bulbasaur featured in Max Battles at all Power Spots.",
    bonuses: ["Increased Bulbasaur spawns", "Bonus Max Particles"],
    featured: "Bulbasaur",
    color: "#ff6b35"
  },

  // ── RAID HOURS ────────────────────────────────────────────
  {
    id: "rh-2026-04-02",
    type: "raid_hour",
    title: "Raid Hour",
    subtitle: "Rayquaza",
    date: "2026-04-02",
    timeStart: "18:00",
    timeEnd: "19:00",
    recurring: "weekly",
    description: "Gyms across the world fill with Rayquaza raids for a full hour. Perfect time to team up and catch a shiny.",
    bonuses: ["Near-constant 5★ raids", "Increased shiny chance"],
    featured: "Rayquaza",
    color: "#3be8ff"
  },
  {
    id: "rh-2026-04-09",
    type: "raid_hour",
    title: "Raid Hour",
    subtitle: "Dialga",
    date: "2026-04-09",
    timeStart: "18:00",
    timeEnd: "19:00",
    recurring: "weekly",
    description: "Dialga dominates raids for one hour. Bring your best Fighting and Ground-types.",
    bonuses: ["Near-constant 5★ raids"],
    featured: "Dialga",
    color: "#3be8ff"
  },
  {
    id: "rh-2026-04-16",
    type: "raid_hour",
    title: "Raid Hour",
    subtitle: "Palkia",
    date: "2026-04-16",
    timeStart: "18:00",
    timeEnd: "19:00",
    recurring: "weekly",
    description: "Palkia appears in 5-star raids worldwide during this power hour.",
    bonuses: ["Near-constant 5★ raids"],
    featured: "Palkia",
    color: "#3be8ff"
  },
  {
    id: "rh-2026-04-23",
    type: "raid_hour",
    title: "Raid Hour",
    subtitle: "Giratina (Altered)",
    date: "2026-04-23",
    timeStart: "18:00",
    timeEnd: "19:00",
    recurring: "weekly",
    description: "Giratina Altered Forme takes over raids for 60 minutes.",
    bonuses: ["Near-constant 5★ raids"],
    featured: "Giratina",
    color: "#3be8ff"
  },

  // ── SPOTLIGHT HOURS ────────────────────────────────────────
  {
    id: "sh-2026-04-01",
    type: "spotlight_hour",
    title: "Spotlight Hour",
    subtitle: "Swinub",
    date: "2026-04-01",
    timeStart: "18:00",
    timeEnd: "19:00",
    recurring: "weekly",
    description: "Swinub floods the map for one hour. Great for candy and a shiny chance.",
    bonuses: ["2× Catch XP", "Increased Swinub spawns"],
    featured: "Swinub",
    color: "#b020ff"
  },
  {
    id: "sh-2026-04-08",
    type: "spotlight_hour",
    title: "Spotlight Hour",
    subtitle: "Gothita",
    date: "2026-04-08",
    timeStart: "18:00",
    timeEnd: "19:00",
    recurring: "weekly",
    description: "Gothita is in the spotlight — catch as many as you can for candy.",
    bonuses: ["2× Transfer Candy", "Increased Gothita spawns"],
    featured: "Gothita",
    color: "#b020ff"
  },
  {
    id: "sh-2026-04-15",
    type: "spotlight_hour",
    title: "Spotlight Hour",
    subtitle: "Magikarp",
    date: "2026-04-15",
    timeStart: "18:00",
    timeEnd: "19:00",
    recurring: "weekly",
    description: "Magikarp everywhere — grind that Gyarados candy.",
    bonuses: ["2× Catch Stardust", "Increased Magikarp spawns"],
    featured: "Magikarp",
    color: "#b020ff"
  },
  {
    id: "sh-2026-04-22",
    type: "spotlight_hour",
    title: "Spotlight Hour",
    subtitle: "Stufful",
    date: "2026-04-22",
    timeStart: "18:00",
    timeEnd: "19:00",
    recurring: "weekly",
    description: "Stufful takes over the map — stock up on candy for Bewear.",
    bonuses: ["2× Catch XP", "Increased Stufful spawns"],
    featured: "Stufful",
    color: "#b020ff"
  },

  // ── SHOWCASE TUESDAYS ──────────────────────────────────────
  {
    id: "sc-2026-04-07",
    type: "showcase",
    title: "Showcase Tuesday",
    subtitle: "Biggest Venusaur",
    date: "2026-04-07",
    timeStart: "10:00",
    timeEnd: "20:00",
    recurring: "weekly",
    description: "Enter your largest Venusaur in the weekly Pokémon Showcase for prizes and prestige.",
    bonuses: ["Top 3 earn rare items", "Stardust rewards"],
    featured: "Venusaur",
    color: "#7b3fff"
  },
  {
    id: "sc-2026-04-14",
    type: "showcase",
    title: "Showcase Tuesday",
    subtitle: "Tallest Wailmer",
    date: "2026-04-14",
    timeStart: "10:00",
    timeEnd: "20:00",
    recurring: "weekly",
    description: "Show off your tallest Wailmer in Tuesday's Showcase competition.",
    bonuses: ["Top 3 earn rare items", "Stardust rewards"],
    featured: "Wailmer",
    color: "#7b3fff"
  },
  {
    id: "sc-2026-04-21",
    type: "showcase",
    title: "Showcase Tuesday",
    subtitle: "Heaviest Snorlax",
    date: "2026-04-21",
    timeStart: "10:00",
    timeEnd: "20:00",
    recurring: "weekly",
    description: "Can your Snorlax tip the scales? Enter this week's weight showcase.",
    bonuses: ["Top 3 earn rare items", "Stardust rewards"],
    featured: "Snorlax",
    color: "#7b3fff"
  },

  // ── REGULAR EVENTS ─────────────────────────────────────────
  {
    id: "ev-cd-apr",
    type: "community_day",
    title: "Community Day",
    subtitle: "Larvitar",
    date: "2026-04-19",
    timeStart: "14:00",
    timeEnd: "17:00",
    description: "Larvitar Community Day! Shiny Larvitar available, exclusive Tyranitar move on evolution.",
    bonuses: ["3× Catch XP", "3-hour Lures", "1/4 Egg Hatch Distance", "Shiny Larvitar"],
    featured: "Larvitar",
    color: "#3be8ff"
  },
  {
    id: "ev-go-fest",
    type: "special",
    title: "GO Fest 2026",
    subtitle: "Global",
    date: "2026-07-18",
    timeEnd_date: "2026-07-19",
    timeStart: "10:00",
    timeEnd: "18:00",
    description: "The biggest Pokémon GO event of the year returns. Rare spawns, global raids, and special research.",
    bonuses: ["Rare & Regional spawns", "Global 5★ raids", "Special Research", "New Pokémon debut"],
    featured: "Unknown",
    color: "#f5c842"
  },
  {
    id: "ev-spring",
    type: "seasonal",
    title: "Spring into Spring",
    subtitle: "Seasonal Event",
    date: "2026-04-04",
    timeEnd_date: "2026-04-10",
    timeStart: "10:00",
    timeEnd: "20:00",
    description: "Springtime spawns, floral-themed Pokémon, and bonus Egg hatching rewards.",
    bonuses: ["Floral-themed spawns", "2× Hatch Candy", "Spring Eevee encounters"],
    featured: "Flabébé",
    color: "#ff6b9d"
  },
  {
    id: "ev-raid-day-apr",
    type: "raid_day",
    title: "Raid Day",
    subtitle: "Mega Garchomp",
    date: "2026-04-12",
    timeStart: "11:00",
    timeEnd: "14:00",
    description: "Mega Garchomp takes over gyms for 3 hours. Up to 5 extra daily raid passes.",
    bonuses: ["5 extra Raid Passes", "Increased shiny rate", "Bonus Stardust"],
    featured: "Mega Garchomp",
    color: "#ff6b35"
  },
  {
    id: "ev-research-day",
    type: "research",
    title: "Research Day",
    subtitle: "Water Types",
    date: "2026-04-26",
    timeStart: "11:00",
    timeEnd: "14:00",
    description: "Complete Field Research for Water-type Pokémon encounters and exclusive items.",
    bonuses: ["Unique Water-type encounters", "Bonus Stardust", "Exclusive research tasks"],
    featured: "Vaporeon",
    color: "#1ab8d4"
  }
];

// Event type metadata
const EVENT_TYPES = {
  max_monday:     { label: "Max Monday",       icon: "fa-bolt",          color: "#ff6b35" },
  raid_hour:      { label: "Raid Hour",         icon: "fa-shield-halved", color: "#3be8ff" },
  spotlight_hour: { label: "Spotlight Hour",    icon: "fa-star",          color: "#b020ff" },
  showcase:       { label: "Showcase Tuesday",  icon: "fa-award",         color: "#7b3fff" },
  community_day:  { label: "Community Day",     icon: "fa-users",         color: "#3be8ff" },
  special:        { label: "Special Event",     icon: "fa-fire",          color: "#f5c842" },
  seasonal:       { label: "Seasonal Event",    icon: "fa-leaf",          color: "#ff6b9d" },
  raid_day:       { label: "Raid Day",          icon: "fa-dragon",        color: "#ff6b35" },
  research:       { label: "Research Day",      icon: "fa-flask",         color: "#1ab8d4" }
};

if (typeof module !== 'undefined') module.exports = { POGORAIDS_EVENTS, EVENT_TYPES };
