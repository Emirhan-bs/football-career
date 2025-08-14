import React, { useState } from 'react';
import { Player, GamePhase, TriviaQuestion, TransferOffer } from './types/Player';
import { GameSetup } from './components/GameSetup';
import { PlayerStats } from './components/PlayerStats';
import { TriviaQuestionComponent } from './components/TriviaQuestion';
import { TransferSelection } from './components/TransferSelection';
import { StatImprovement } from './components/StatImprovement';
import { SeasonSummary } from './components/SeasonSummary';
import { RetirementCard } from './components/RetirementCard';
import { getRandomTriviaQuestion, calculateQuizScore, updatePlayerAfterSeason, generateTransferOffers, checkRetirement, generateRetirementStats } from './utils/gameUtils';
import { RetirementStats } from './types/Player';

function App() {
  const [player, setPlayer] = useState<Player | null>(null);
  const [gamePhase, setGamePhase] = useState<GamePhase>('setup');
  const [currentQuestion, setCurrentQuestion] = useState<TriviaQuestion | null>(null);
  const [transferOffers, setTransferOffers] = useState<TransferOffer[]>([]);
  const [pointsEarned, setPointsEarned] = useState(0);
  const [seasonNumber, setSeasonNumber] = useState(1);
  const [retirementStats, setRetirementStats] = useState<RetirementStats | null>(null);

  const handlePlayerCreated = (newPlayer: Player) => {
    setPlayer(newPlayer);
    setGamePhase('playing');
  };

  const handleStartSeason = () => {
    const question = getRandomTriviaQuestion();
    setCurrentQuestion(question);
    setGamePhase('trivia');
  };

  const handleTriviaAnswer = (timeLeft: number, correct: boolean) => {
    const points = calculateQuizScore(timeLeft, 30, correct);
    setPointsEarned(points);
    setGamePhase('stats');
  };

  const handleTransferSelected = (selectedTeam: string) => {
    if (player) {
      let updatedPlayer = { ...player, currentTeam: selectedTeam };
      updatedPlayer = updatePlayerAfterSeason(updatedPlayer);
      
      // Check for retirement
      if (checkRetirement(updatedPlayer)) {
        const stats = generateRetirementStats(updatedPlayer);
        setRetirementStats(stats);
        setPlayer(updatedPlayer);
        setGamePhase('retirement');
      } else {
        setPlayer(updatedPlayer);
        setGamePhase('summary');
      }
    }
  };

  const handleStatsUpdated = (updatedPlayer: Player) => {
    setPlayer(updatedPlayer);
    
    // Generate transfer offers after stats are updated
    const offers = generateTransferOffers(updatedPlayer);
    setTransferOffers(offers);
    setGamePhase('transfer');
  };

  const handleSeasonComplete = () => {
    setSeasonNumber(prev => prev + 1);
    setGamePhase('playing');
  };

  const handleNewCareer = () => {
    setPlayer(null);
    setGamePhase('setup');
    setSeasonNumber(1);
    setRetirementStats(null);
    setPointsEarned(0);
    setTransferOffers([]);
  };

  if (!player) {
    return <GameSetup onPlayerCreated={handlePlayerCreated} />;
  }

  switch (gamePhase) {
    case 'playing':
      return <PlayerStats player={player} onStartSeason={handleStartSeason} />;
    
    case 'trivia':
      return currentQuestion ? (
        <TriviaQuestionComponent 
          question={currentQuestion} 
          onAnswer={handleTriviaAnswer} 
        />
      ) : null;
    
    case 'stats':
      return (
        <StatImprovement 
          player={player} 
          pointsEarned={pointsEarned} 
          onStatsUpdated={handleStatsUpdated} 
        />
      );
    
    case 'transfer':
      return (
        <TransferSelection 
          player={player} 
          offers={transferOffers} 
          onTransferSelected={handleTransferSelected} 
        />
      );
    
    case 'summary':
      return (
        <SeasonSummary 
          player={player} 
          seasonNumber={seasonNumber} 
          onContinue={handleSeasonComplete} 
        />
      );
    
    case 'retirement':
      return retirementStats ? (
        <RetirementCard 
          player={player} 
          retirementStats={retirementStats} 
          onNewCareer={handleNewCareer} 
        />
      ) : null;
    
    default:
      return <GameSetup onPlayerCreated={handlePlayerCreated} />;
  }
}

export default App;