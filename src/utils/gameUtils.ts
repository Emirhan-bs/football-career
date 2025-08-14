import { Player, SeasonRecord, TriviaQuestion } from '../types/Player';
import { TransferOffer } from '../types/Player';

// Sample clubs by league (renamed from CLUBS_BY_CONTINENT)
export const CLUBS_BY_LEAGUE = {
  'Premier League': [
    { name: 'Manchester City', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Manchester-City-Logo.png' },
    { name: 'Arsenal', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Arsenal-Logo.png' },
    { name: 'Liverpool', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Liverpool-Logo.png' },
    { name: 'Chelsea', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Chelsea-Logo.png' },
    { name: 'Manchester United', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Manchester-United-Logo.png' },
    { name: 'Tottenham Hotspur', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Tottenham-Logo.png' },
    { name: 'Newcastle United', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Newcastle-United-Logo.png' },
    { name: 'Aston Villa', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Aston-Villa-Logo.png' },
    { name: 'Brighton', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Brighton-Logo.png' },
    { name: 'West Ham United', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/West-Ham-Logo.png' },
  ],
  'La Liga': [
    { name: 'Real Madrid', country: 'Spain', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png' },
    { name: 'Barcelona', country: 'Spain', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Barcelona-Logo.png' },
    { name: 'Atletico Madrid', country: 'Spain', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Atletico-Madrid-Logo.png' },
    { name: 'Sevilla', country: 'Spain', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Sevilla-Logo.png' },
    { name: 'Real Betis', country: 'Spain', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Real-Betis-Logo.png' },
    { name: 'Villarreal', country: 'Spain', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Villarreal-Logo.png' },
    { name: 'Real Sociedad', country: 'Spain', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Real-Sociedad-Logo.png' },
  ],
  'Serie A': [
    { name: 'Inter Milan', country: 'Italy', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Inter-Milan-Logo.png' },
    { name: 'AC Milan', country: 'Italy', logo: 'https://logos-world.net/wp-content/uploads/2020/06/AC-Milan-Logo.png' },
    { name: 'Juventus', country: 'Italy', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Juventus-Logo.png' },
    { name: 'AS Roma', country: 'Italy', logo: 'https://logos-world.net/wp-content/uploads/2020/06/AS-Roma-Logo.png' },
    { name: 'Napoli', country: 'Italy', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Napoli-Logo.png' },
    { name: 'Lazio', country: 'Italy', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Lazio-Logo.png' },
  ],
  'Süper Lig': [
    { name: 'Galatasaray', country: 'Turkey', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Galatasaray-Logo.png' },
    { name: 'Fenerbahçe', country: 'Turkey', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Fenerbahce-Logo.png' },
    { name: 'Beşiktaş', country: 'Turkey', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Besiktas-Logo.png' },
    { name: 'Trabzonspor', country: 'Turkey', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Trabzonspor-Logo.png' },
    { name: 'Başakşehir', country: 'Turkey', logo: 'https://upload.wikimedia.org/wikipedia/tr/thumb/3/3f/İstanbul_Başakşehir_FK_logo.svg/2048px-İstanbul_Başakşehir_FK_logo.svg.png' },
    { name: 'Adana Demirspor', country: 'Turkey', logo: 'https://upload.wikimedia.org/wikipedia/tr/thumb/3/30/Adana_Demirspor_logo.svg/1200px-Adana_Demirspor_logo.svg.png' },
  ],
  'Bundesliga': [
    { name: 'Bayern Munich', country: 'Germany', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Bayern-Munich-Logo.png' },
    { name: 'Borussia Dortmund', country: 'Germany', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Borussia-Dortmund-Logo.png' },
    { name: 'RB Leipzig', country: 'Germany', logo: 'https://logos-world.net/wp-content/uploads/2020/06/RB-Leipzig-Logo.png' },
    { name: 'Bayer Leverkusen', country: 'Germany', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Bayer-Leverkusen-Logo.png' },
    { name: 'Eintracht Frankfurt', country: 'Germany', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Eintracht-Frankfurt-Logo.png' },
    { name: 'VfL Wolfsburg', country: 'Germany', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Wolfsburg-Logo.png' },
    { name: 'SC Freiburg', country: 'Germany', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/81/SC_Freiburg_logo.svg/1200px-SC_Freiburg_logo.svg.png' },
    { name: 'Union Berlin', country: 'Germany', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/1._FC_Union_Berlin_logo.svg/1200px-1._FC_Union_Berlin_logo.svg.png' },
  ],
  'Ligue 1': [
    { name: 'Paris Saint-Germain', country: 'France', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Paris-Saint-Germain-Logo.png' },
    { name: 'Olympique Marseille', country: 'France', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Marseille-Logo.png' },
    { name: 'Olympique Lyonnais', country: 'France', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Lyon-Logo.png' },
    { name: 'AS Monaco', country: 'France', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Monaco-Logo.png' },
    { name: 'LOSC Lille', country: 'France', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Lille-Logo.png' },
  ],
  'Eredivisie': [
    { name: 'Ajax', country: 'Netherlands', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Ajax-Logo.png' },
    { name: 'PSV Eindhoven', country: 'Netherlands', logo: 'https://logos-world.net/wp-content/uploads/2020/06/PSV-Logo.png' },
    { name: 'Feyenoord', country: 'Netherlands', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Feyenoord-Logo.png' },
  ],
  'Primeira Liga': [
    { name: 'FC Porto', country: 'Portugal', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Porto-Logo.png' },
    { name: 'SL Benfica', country: 'Portugal', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Benfica-Logo.png' },
    { name: 'Sporting CP', country: 'Portugal', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Sporting-Logo.png' },
  ],
  'Brasileirão': [
    { name: 'Flamengo', country: 'Brazil', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Flamengo-Logo.png' },
    { name: 'Palmeiras', country: 'Brazil', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Palmeiras-Logo.png' },
    { name: 'Sao Paulo', country: 'Brazil', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Sao-Paulo-Logo.png' },
    { name: 'Corinthians', country: 'Brazil', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Corinthians-Logo.png' },
  ],
  'MLS': [
    { name: 'LA Galaxy', country: 'USA', logo: 'https://logos-world.net/wp-content/uploads/2020/06/LA-Galaxy-Logo.png' },
    { name: 'Inter Miami', country: 'USA', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Inter-Miami-Logo.png' },
  ],
  'Saudi Pro League': [
    { name: 'Al Hilal', country: 'Saudi Arabia', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Al-Hilal_FC_logo.svg/1200px-Al-Hilal_FC_logo.svg.png' },
    { name: 'Al Nassr', country: 'Saudi Arabia', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Al-Nassr_FC_logo.svg/1200px-Al-Nassr_FC_logo.svg.png' },
    { name: 'Al Ittihad', country: 'Saudi Arabia', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Al-Ittihad_Club_logo.svg/1200px-Al-Ittihad_Club_logo.svg.png' },
  ]
};

// Mapping continents to their leagues
export const CONTINENT_TO_LEAGUES = {
  'Europe': ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1', 'Eredivisie', 'Primeira Liga', 'Süper Lig'],
  'South America': ['Brasileirão'],
  'North America': ['MLS'],
  'Asia': ['Saudi Pro League'],
  'Africa': [],
  'Oceania': []
};

// Mapping countries to continents for transfer offers
export const COUNTRY_TO_CONTINENT = {
  'England': 'Europe',
  'Spain': 'Europe',
  'Italy': 'Europe',
  'Germany': 'Europe',
  'France': 'Europe',
  'Netherlands': 'Europe',
  'Portugal': 'Europe',
  'Turkey': 'Europe',
  'Brazil': 'South America',
  'USA': 'North America',
  'Saudi Arabia': 'Asia'
};

// Sample trivia questions
export const TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    category: "Science"
  },
  {
    id: 2,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    category: "Geography"
  },
  {
    id: 3,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    correctAnswer: 1,
    category: "Art"
  },
  {
    id: 4,
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: 3,
    category: "Geography"
  },
  {
    id: 5,
    question: "What is 15 × 8?",
    options: ["110", "120", "130", "140"],
    correctAnswer: 1,
    category: "Math"
  },
  {
    id: 6,
    question: "Which year did World War II end?",
    options: ["1944", "1945", "1946", "1947"],
    correctAnswer: 1,
    category: "History"
  },
  {
    id: 7,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    category: "Science"
  },
  {
    id: 8,
    question: "Which continent is the largest by area?",
    options: ["Africa", "Asia", "North America", "Europe"],
    correctAnswer: 1,
    category: "Geography"
  }
];

export function getRandomTeam(continent: string): string {
  const leagues = CONTINENT_TO_LEAGUES[continent as keyof typeof CONTINENT_TO_LEAGUES] || CONTINENT_TO_LEAGUES['Europe'];
  const randomLeague = leagues[Math.floor(Math.random() * leagues.length)];
  const teams = CLUBS_BY_LEAGUE[randomLeague as keyof typeof CLUBS_BY_LEAGUE] || CLUBS_BY_LEAGUE['Premier League'];
  const randomTeam = teams[Math.floor(Math.random() * teams.length)];
  return randomTeam.name; // Return only the name string, not the entire object
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function generateRandomStats(position: string): any {
  const baseStats = () => Math.floor(Math.random() * 20) + 60; // 60-79

  if (position === 'GK') {
    return {
      diving: baseStats(),
      handling: baseStats(),
      kicking: baseStats(),
      reflexes: baseStats(),
      speed: baseStats(),
      positioning: baseStats()
    };
  } else {
    return {
      pace: baseStats(),
      shooting: baseStats(),
      passing: baseStats(),
      dribbling: baseStats(),
      defense: baseStats(),
      physical: baseStats()
    };
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function calculateOverallRating(stats: any, position: string): number {
  if (position === 'GK') {
    const { diving, handling, kicking, reflexes, speed, positioning } = stats;
    return Math.round((diving + handling + kicking + reflexes + speed + positioning) / 6);
  } else {
    const { pace, shooting, passing, dribbling, defense, physical } = stats;
    return Math.round((pace + shooting + passing + dribbling + defense + physical) / 6);
  }
}

export function simulateSeasonStats(player: Player): Player {
  const updatedPlayer = { ...player };

  if (player.position === 'GK') {
    const saveRate = Math.max(60, Math.min(95, Math.round((player.stats.reflexes! + player.stats.diving! + player.stats.positioning!) / 3) + Math.floor(Math.random() * 10 - 5)));
    const goalsConceded = Math.max(15, Math.min(50, Math.round(45 - (saveRate * 0.4) + Math.floor(Math.random() * 10 - 5))));
    const cleanSheets = Math.max(5, Math.min(25, Math.round((saveRate * 0.25) + Math.floor(Math.random() * 8 - 4))));

    updatedPlayer.seasonStats = {
      saveRate,
      goalsConceded,
      cleanSheets
    };

    // Update career stats
    const totalSeasons = player.careerHistory.length + 1;
    const prevAvgSaveRate = player.careerStats.averageSaveRate || 0;

    updatedPlayer.careerStats = {
      averageSaveRate: Math.round(((prevAvgSaveRate * (totalSeasons - 1)) + saveRate) / totalSeasons),
      totalGoalsConceded: (player.careerStats.totalGoalsConceded || 0) + goalsConceded,
      totalCleanSheets: (player.careerStats.totalCleanSheets || 0) + cleanSheets
    };
  } else {
    // Generate goals and assists based on position and overall rating
    const positionMultiplier = ['ST'].includes(player.position) ? 0.8 :
      ['LW', 'RW'].includes(player.position) ? 0.6 :
      ['CM', 'LM', 'RM'].includes(player.position) ? 0.4 : 0.2;

    const baseGoals = (player.overallRating - 60) / 40; // Scale from 0 to ~1 for ratings 60-99
    const baseAssists = (player.overallRating - 60) / 50; // Scale from 0 to ~0.8 for ratings 60-99
    
    const goals = Math.max(0, Math.floor(baseGoals * positionMultiplier * 25 * (Math.random() * 0.6 + 0.7))); // 0-20 goals range
    const assists = Math.max(0, Math.floor(baseAssists * 15 * (Math.random() * 0.6 + 0.7))); // 0-12 assists range

    updatedPlayer.seasonStats = { goals, assists };

    updatedPlayer.careerStats = {
      totalGoals: (player.careerStats.totalGoals || 0) + goals,
      totalAssists: (player.careerStats.totalAssists || 0) + assists
    };
  }

  return updatedPlayer;
}

export function simulateTransfer(player: Player): string {
  const currentRating = player.overallRating;
  const age = player.age;

  // Better players get better teams, but age matters
  const ageMultiplier = age <= 25 ? 1.1 : age <= 30 ? 1.0 : 0.9;
  const adjustedRating = currentRating * ageMultiplier;

  const leagues = CONTINENT_TO_LEAGUES[player.continent as keyof typeof CONTINENT_TO_LEAGUES] || CONTINENT_TO_LEAGUES['Europe'];
  const randomLeague = leagues[Math.floor(Math.random() * leagues.length)];
  const teams = CLUBS_BY_LEAGUE[randomLeague as keyof typeof CLUBS_BY_LEAGUE] || CLUBS_BY_LEAGUE['Premier League'];

  // Filter teams based on player rating
  let availableTeams = teams;
  if (adjustedRating >= 85) {
    availableTeams = teams.slice(0, Math.min(8, teams.length)); // Top tier teams
  } else if (adjustedRating >= 75) {
    availableTeams = teams.slice(3, Math.min(18, teams.length)); // Mid tier teams
  } else {
    availableTeams = teams.slice(Math.min(8, teams.length)); // Lower tier teams
  }

  // Ensure we don't stay at the same team
  const filteredTeams = availableTeams.filter(team => team.name !== player.currentTeam);
  const selectedTeam = filteredTeams.length > 0 ? filteredTeams[Math.floor(Math.random() * filteredTeams.length)] : availableTeams[0];
  return selectedTeam.name; // Return only the name string
}

export function generateTransferOffers(player: Player, includeCurrentTeam: boolean = true): TransferOffer[] {
  const currentRating = player.overallRating;
  const age = player.age;

  // Better players get better teams, but age matters
  const ageMultiplier = age <= 25 ? 1.1 : age <= 30 ? 1.0 : 0.9;
  const adjustedRating = currentRating * ageMultiplier;

  // Get teams from all leagues for global transfers
  const allTeams = Object.values(CLUBS_BY_LEAGUE).flat();

  // Create different tiers of teams from all leagues
  const topTierTeams = [
    ...CLUBS_BY_LEAGUE['Premier League'].slice(0, 3),  // Premier League top clubs
    ...CLUBS_BY_LEAGUE['La Liga'].slice(0, 3),         // La Liga top clubs
    ...CLUBS_BY_LEAGUE['Serie A'].slice(0, 2),         // Serie A top clubs
  ];

  const midTierTeams = [
    ...CLUBS_BY_LEAGUE['Premier League'].slice(3, 6),  // Premier League mid clubs
    ...CLUBS_BY_LEAGUE['La Liga'].slice(3, 6),         // La Liga mid clubs
    ...CLUBS_BY_LEAGUE['Serie A'].slice(2, 5),         // Serie A mid clubs
    ...CLUBS_BY_LEAGUE['Bundesliga'].slice(0, 4),      // Bundesliga mid clubs
    ...CLUBS_BY_LEAGUE['Ligue 1'].slice(0, 3),         // Ligue 1 mid clubs
  ];

  const lowerTierTeams = [
    ...CLUBS_BY_LEAGUE['Premier League'].slice(6),     // Premier League lower clubs
    ...CLUBS_BY_LEAGUE['La Liga'].slice(6),            // La Liga lower clubs
    ...CLUBS_BY_LEAGUE['Serie A'].slice(5),            // Serie A lower clubs
    ...CLUBS_BY_LEAGUE['Bundesliga'].slice(4),         // Bundesliga lower clubs
    ...CLUBS_BY_LEAGUE['Ligue 1'].slice(3),            // Ligue 1 lower clubs
    ...CLUBS_BY_LEAGUE['Eredivisie'],                  // Eredivisie clubs
    ...CLUBS_BY_LEAGUE['MLS'],                         // MLS clubs
  ];

  const offers: TransferOffer[] = [];

  // Add option to stay at current team
  if (includeCurrentTeam) {
    // Find current team's continent
    let currentTeamContinent = player.continent;
    for (const [league, teams] of Object.entries(CLUBS_BY_LEAGUE)) {
      const teamObj = teams.find(team => team.name === player.currentTeam);
      if (teamObj) {
        currentTeamContinent = COUNTRY_TO_CONTINENT[teamObj.country as keyof typeof COUNTRY_TO_CONTINENT] || player.continent;
        break;
      }
    }

    offers.push({
      team: player.currentTeam,
      continent: currentTeamContinent,
      tier: 'mid',
      description: 'Stay with your current club and continue building your legacy'
    });
  }

  // Generate 3-5 offers based on player rating
  const numOffers = Math.floor(Math.random() * 3) + (includeCurrentTeam ? 2 : 3); // 3-5 total offers

  for (let i = 0; i < numOffers; i++) {
    let selectedTeamObj: { name: string; country: string; logo: string };
    let tier: 'top' | 'mid' | 'lower';
    let description: string;
    let continent: string;

    // Determine team tier based on player rating and some randomness
    const random = Math.random();

    if (adjustedRating >= 85 && random < 0.6) {
      // High-rated players get more top tier offers
      selectedTeamObj = topTierTeams[Math.floor(Math.random() * topTierTeams.length)];
      tier = 'top';
      description = 'A prestigious club competing at the highest level';
    } else if (adjustedRating >= 75 && random < 0.7) {
      // Mid-rated players get more mid tier offers
      selectedTeamObj = midTierTeams[Math.floor(Math.random() * midTierTeams.length)];
      tier = 'mid';
      description = 'A solid club with good development opportunities';
    } else {
      // Lower-rated or older players get more lower tier offers
      selectedTeamObj = lowerTierTeams[Math.floor(Math.random() * lowerTierTeams.length)];
      tier = 'lower';
      description = 'A developing club looking to build for the future';
    }

    // Get continent from country
    continent = COUNTRY_TO_CONTINENT[selectedTeamObj.country as keyof typeof COUNTRY_TO_CONTINENT] || 'Europe';

    // Ensure we don't get duplicate teams or current team
    if (!offers.find(offer => offer.team === selectedTeamObj.name)) {
      offers.push({
        team: selectedTeamObj.name, // Use only the name string
        continent,
        tier,
        description
      });
    }
  }

  // If we don't have enough unique offers, fill with random teams from all leagues
  while (offers.length < (includeCurrentTeam ? 4 : 3)) {
    const randomTeamObj = allTeams[Math.floor(Math.random() * allTeams.length)];
    const teamContinent = COUNTRY_TO_CONTINENT[randomTeamObj.country as keyof typeof COUNTRY_TO_CONTINENT] || 'Europe';

    if (!offers.find(offer => offer.team === randomTeamObj.name)) {
      offers.push({
        team: randomTeamObj.name, // Use only the name string
        continent: teamContinent,
        tier: 'mid',
        description: 'An interesting opportunity for your career'
      });
    }
  }

  return offers.slice(0, 5); // Maximum 5 offers
}

export function getTeamLogo(teamName: string): string {
  // Team logo mappings to logo URLs
  const logoMap: { [key: string]: string } = {
    // Premier League
    'Manchester City': 'https://logos-world.net/wp-content/uploads/2020/06/Manchester-City-Logo.png',
    'Arsenal': 'https://logos-world.net/wp-content/uploads/2020/06/Arsenal-Logo.png',
    'Liverpool': 'https://logos-world.net/wp-content/uploads/2020/06/Liverpool-Logo.png',
    'Chelsea': 'https://logos-world.net/wp-content/uploads/2020/06/Chelsea-Logo.png',
    'Manchester United': 'https://logos-world.net/wp-content/uploads/2020/06/Manchester-United-Logo.png',
    'Tottenham Hotspur': 'https://logos-world.net/wp-content/uploads/2020/06/Tottenham-Logo.png',
    'Newcastle United': 'https://logos-world.net/wp-content/uploads/2020/06/Newcastle-United-Logo.png',
    'Aston Villa': 'https://logos-world.net/wp-content/uploads/2020/06/Aston-Villa-Logo.png',
    'Brighton': 'https://logos-world.net/wp-content/uploads/2020/06/Brighton-Hove-Albion-Logo.png',
    'West Ham United': 'https://logos-world.net/wp-content/uploads/2020/06/West-Ham-Logo.png',

    // La Liga
    'Real Madrid': 'https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png',
    'Barcelona': 'https://logos-world.net/wp-content/uploads/2020/06/Barcelona-Logo.png',
    'Atletico Madrid': 'https://logos-world.net/wp-content/uploads/2020/06/Atletico-Madrid-Logo.png',
    'Sevilla': 'https://logos-world.net/wp-content/uploads/2020/06/Sevilla-Logo.png',
    'Real Betis': 'https://logos-world.net/wp-content/uploads/2020/06/Real-Betis-Logo.png',
    'Villarreal': 'https://logos-world.net/wp-content/uploads/2020/06/Villarreal-Logo.png',
    'Real Sociedad': 'https://logos-world.net/wp-content/uploads/2020/06/Real-Sociedad-Logo.png',

    // Bundesliga
    'Bayern Munich': 'https://logos-world.net/wp-content/uploads/2020/06/Bayern-Munich-Logo.png',
    'Borussia Dortmund': 'https://logos-world.net/wp-content/uploads/2020/06/Borussia-Dortmund-Logo.png',
    'RB Leipzig': 'https://logos-world.net/wp-content/uploads/2020/06/RB-Leipzig-Logo.png',
    'Bayer Leverkusen': 'https://logos-world.net/wp-content/uploads/2020/06/Bayer-Leverkusen-Logo.png',
    'Eintracht Frankfurt': 'https://logos-world.net/wp-content/uploads/2020/06/Eintracht-Frankfurt-Logo.png',
    'VfL Wolfsburg': 'https://logos-world.net/wp-content/uploads/2020/06/Wolfsburg-Logo.png',
    'SC Freiburg': 'https://upload.wikimedia.org/wikipedia/en/thumb/8/81/SC_Freiburg_logo.svg/1200px-SC_Freiburg_logo.svg.png',
    'Union Berlin': 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/1._FC_Union_Berlin_logo.svg/1200px-1._FC_Union_Berlin_logo.svg.png',

    // Serie A
    'Juventus': 'https://logos-world.net/wp-content/uploads/2020/06/Juventus-Logo.png',
    'AC Milan': 'https://logos-world.net/wp-content/uploads/2020/06/AC-Milan-Logo.png',
    'Inter Milan': 'https://logos-world.net/wp-content/uploads/2020/06/Inter-Milan-Logo.png',
    'AS Roma': 'https://logos-world.net/wp-content/uploads/2020/06/AS-Roma-Logo.png',
    'Napoli': 'https://logos-world.net/wp-content/uploads/2020/06/Napoli-Logo.png',
    'Lazio': 'https://logos-world.net/wp-content/uploads/2020/06/Lazio-Logo.png',

    // Ligue 1
    'Paris Saint-Germain': 'https://logos-world.net/wp-content/uploads/2020/06/Paris-Saint-Germain-Logo.png',
    'Olympique Marseille': 'https://logos-world.net/wp-content/uploads/2020/06/Marseille-Logo.png',
    'Olympique Lyonnais': 'https://logos-world.net/wp-content/uploads/2020/06/Lyon-Logo.png',
    'AS Monaco': 'https://logos-world.net/wp-content/uploads/2020/06/Monaco-Logo.png',
    'LOSC Lille': 'https://logos-world.net/wp-content/uploads/2020/06/Lille-Logo.png',

    // Eredivisie
    'Ajax': 'https://logos-world.net/wp-content/uploads/2020/06/Ajax-Logo.png',
    'PSV Eindhoven': 'https://logos-world.net/wp-content/uploads/2020/06/PSV-Logo.png',
    'Feyenoord': 'https://logos-world.net/wp-content/uploads/2020/06/Feyenoord-Logo.png',

    // Primeira Liga
    'FC Porto': 'https://logos-world.net/wp-content/uploads/2020/06/Porto-Logo.png',
    'SL Benfica': 'https://logos-world.net/wp-content/uploads/2020/06/Benfica-Logo.png',
    'Sporting CP': 'https://logos-world.net/wp-content/uploads/2020/06/Sporting-Logo.png',

    // Süper Lig
    'Galatasaray': 'https://logos-world.net/wp-content/uploads/2020/06/Galatasaray-Logo.png',
    'Fenerbahçe': 'https://logos-world.net/wp-content/uploads/2020/06/Fenerbahce-Logo.png',
    'Beşiktaş': 'https://logos-world.net/wp-content/uploads/2020/06/Besiktas-Logo.png',
    'Trabzonspor': 'https://logos-world.net/wp-content/uploads/2020/06/Trabzonspor-Logo.png',
    'Başakşehir': 'https://upload.wikimedia.org/wikipedia/tr/thumb/3/3f/İstanbul_Başakşehir_FK_logo.svg/2048px-İstanbul_Başakşehir_FK_logo.svg.png',
    'Adana Demirspor': 'https://upload.wikimedia.org/wikipedia/tr/thumb/3/30/Adana_Demirspor_logo.svg/1200px-Adana_Demirspor_logo.svg.png',

    // Brasileirão
    'Flamengo': 'https://logos-world.net/wp-content/uploads/2020/06/Flamengo-Logo.png',
    'Palmeiras': 'https://logos-world.net/wp-content/uploads/2020/06/Palmeiras-Logo.png',
    'Sao Paulo': 'https://logos-world.net/wp-content/uploads/2020/06/Sao-Paulo-Logo.png',
    'Corinthians': 'https://logos-world.net/wp-content/uploads/2020/06/Corinthians-Logo.png',

    // MLS
    'LA Galaxy': 'https://logos-world.net/wp-content/uploads/2020/06/LA-Galaxy-Logo.png',
    'Inter Miami': 'https://logos-world.net/wp-content/uploads/2020/06/Inter-Miami-Logo.png',

    // Saudi Pro League
    'Al Hilal': 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Al-Hilal_FC_logo.svg/1200px-Al-Hilal_FC_logo.svg.png',
    'Al Nassr': 'https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Al-Nassr_FC_logo.svg/1200px-Al-Nassr_FC_logo.svg.png',
    'Al Ittihad': 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Al-Ittihad_Club_logo.svg/1200px-Al-Ittihad_Club_logo.svg.png'
  };

  // Return the logo URL if available, otherwise return a fallback
  return logoMap[teamName] || `https://via.placeholder.com/64x64/3B82F6/FFFFFF?text=${getTeamInitials(teamName)}`;
}

function getTeamInitials(teamName: string): string {
  const words = teamName.split(' ');
  if (words.length >= 2) {
    return words[0].charAt(0) + words[1].charAt(0);
  }
  return teamName.substring(0, 2).toUpperCase();
}

export function checkRetirement(player: Player): boolean {
  return player.age >= 35;
}

export function generateRetirementStats(player: Player) {
  const totalSeasons = player.careerHistory.length;
  const peakRating = Math.max(...player.careerHistory.map(season => season.overallRating));
  const averageRating = Math.round(
    player.careerHistory.reduce((sum, season) => sum + season.overallRating, 0) / totalSeasons
  );

  // Calculate career highlights
  const teamsPlayedFor = [...new Set(player.careerHistory.map(season => season.team))];

  let bestSeason;
  if (player.position === 'GK') {
    bestSeason = player.careerHistory.reduce((best, season) =>
      (season.cleanSheets || 0) > (best.cleanSheets || 0) ? season : best
    );
  } else {
    bestSeason = player.careerHistory.reduce((best, season) =>
      ((season.goals || 0) + (season.assists || 0)) > ((best.goals || 0) + (best.assists || 0)) ? season : best
    );
  }

  return {
    totalSeasons,
    peakRating,
    averageRating,
    teamsPlayedFor,
    bestSeason,
    retirementAge: player.age
  };
}

export function updatePlayerAfterSeason(player: Player): Player {
  const updatedPlayer = simulateSeasonStats(player);

  // Add season to history
  const seasonRecord: SeasonRecord = {
    season: player.careerHistory.length + 1,
    team: player.currentTeam,
    age: player.age,
    overallRating: player.overallRating,
    ...(player.position === 'GK'
      ? {
        saveRate: updatedPlayer.seasonStats.saveRate,
        goalsConceded: updatedPlayer.seasonStats.goalsConceded,
        cleanSheets: updatedPlayer.seasonStats.cleanSheets
      }
      : {
        goals: updatedPlayer.seasonStats.goals,
        assists: updatedPlayer.seasonStats.assists
      }
    )
  };

  updatedPlayer.careerHistory = [...player.careerHistory, seasonRecord];

  // Age progression and transfer
  updatedPlayer.age += 1;
  // Note: Team transfer is now handled separately in the transfer selection phase

  return updatedPlayer;
}

export function getRandomTriviaQuestion(): TriviaQuestion {
  return TRIVIA_QUESTIONS[Math.floor(Math.random() * TRIVIA_QUESTIONS.length)];
}

export function calculateQuizScore(timeLeft: number, maxTime: number, correct: boolean): number {
  if (!correct) return -15;

  const timeBonus = (timeLeft / maxTime) * 10;

  if (timeBonus >= 8) return 15; // Very fast
  if (timeBonus >= 5) return 10; // Medium speed
  return 5; // Slow but correct
}