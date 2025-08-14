export interface Player {
  id: string;
  name: string;
  age: number;
  position: string;
  continent: string;
  currentTeam: string;
  overallRating: number;
  
  // Core stats (different for outfield vs GK)
  stats: {
    // Outfield player stats
    pace?: number;
    shooting?: number;
    passing?: number;
    dribbling?: number;
    defense?: number;
    physical?: number;
    
    // Goalkeeper stats
    diving?: number;
    handling?: number;
    kicking?: number;
    reflexes?: number;
    speed?: number;
    positioning?: number;
  };
  
  // Season stats
  seasonStats: {
    // Outfield
    goals?: number;
    assists?: number;
    
    // Goalkeeper
    saveRate?: number;
    goalsConceded?: number;
    cleanSheets?: number;
  };
  
  // Career stats
  careerStats: {
    // Outfield
    totalGoals?: number;
    totalAssists?: number;
    
    // Goalkeeper
    averageSaveRate?: number;
    totalGoalsConceded?: number;
    totalCleanSheets?: number;
  };
  
  // Career history
  careerHistory: SeasonRecord[];
}

export interface SeasonRecord {
  season: number;
  team: string;
  age: number;
  overallRating: number;
  goals?: number;
  assists?: number;
  saveRate?: number;
  goalsConceded?: number;
  cleanSheets?: number;
}

export interface TriviaQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

export interface TransferOffer {
  team: string;
  continent: string;
  tier: 'top' | 'mid' | 'lower';
  description: string;
}

export type GamePhase = 'setup' | 'trivia' | 'transfer' | 'stats' | 'summary' | 'playing' | 'retirement';

export interface RetirementStats {
  totalSeasons: number;
  peakRating: number;
  averageRating: number;
  teamsPlayedFor: string[];
  bestSeason: SeasonRecord;
  retirementAge: number;
}

export const POSITIONS = {
  outfield: ['LW', 'ST', 'RW', 'LM', 'CM', 'RM', 'LB', 'CB', 'RB'],
  goalkeeper: ['GK']
};

export const CONTINENTS = [
  'Europe',
  'South America',
  'North America',
  'Africa',
  'Asia',
  'Oceania'
];