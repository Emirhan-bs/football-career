import React, { useState } from 'react';
import { Player } from '../types/Player';
import { calculateOverallRating } from '../utils/gameUtils';
import { TrendingUp, Award } from 'lucide-react';

interface StatImprovementProps {
  player: Player;
  pointsEarned: number;
  onStatsUpdated: (updatedPlayer: Player) => void;
}

export function StatImprovement({ player, pointsEarned, onStatsUpdated }: StatImprovementProps) {
  const [selectedStat, setSelectedStat] = useState<string>('');
  const [tempPlayer, setTempPlayer] = useState<Player>(player);

  const getAvailableStats = () => {
    if (player.position === 'GK') {
      return [
        { key: 'diving', label: 'Diving' },
        { key: 'handling', label: 'Handling' },
        { key: 'kicking', label: 'Kicking' },
        { key: 'reflexes', label: 'Reflexes' },
        { key: 'speed', label: 'Speed' },
        { key: 'positioning', label: 'Positioning' }
      ];
    } else {
      return [
        { key: 'pace', label: 'Pace' },
        { key: 'shooting', label: 'Shooting' },
        { key: 'passing', label: 'Passing' },
        { key: 'dribbling', label: 'Dribbling' },
        { key: 'defense', label: 'Defense' },
        { key: 'physical', label: 'Physical' }
      ];
    }
  };

  const handleStatImprovement = () => {
    if (!selectedStat) {
      alert('Please select a stat to improve');
      return;
    }

    const updatedPlayer = { ...tempPlayer };
    const currentValue = updatedPlayer.stats[selectedStat as keyof typeof updatedPlayer.stats] as number;
    const newValue = Math.min(99, Math.max(60, currentValue + pointsEarned)); // Ensure stats don't go below 60
    
    updatedPlayer.stats = {
      ...updatedPlayer.stats,
      [selectedStat]: newValue
    };

    updatedPlayer.overallRating = calculateOverallRating(updatedPlayer.stats, updatedPlayer.position);
    
    onStatsUpdated(updatedPlayer);
  };

  const getStatValue = (statKey: string) => {
    return tempPlayer.stats[statKey as keyof typeof tempPlayer.stats] as number;
  };

  const getStatBar = (value: number) => {
    const percentage = (value / 99) * 100;
    let colorClass = 'bg-red-500';
    
    if (value >= 85) colorClass = 'bg-green-500';
    else if (value >= 75) colorClass = 'bg-yellow-500';
    else if (value >= 65) colorClass = 'bg-orange-500';
    
    return (
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className={`h-3 rounded-full transition-all duration-500 ${colorClass}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Award className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-800">Stat Improvement</h2>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-4 mb-6">
            <p className="text-lg font-semibold text-purple-800">
              You earned {pointsEarned > 0 ? `+${pointsEarned}` : pointsEarned} improvement points!
            </p>
            <p className="text-purple-600">
              {pointsEarned > 0 ? 'Choose one stat to improve' : 'Choose one stat to adjust (negative points will decrease stats)'}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Current Stats */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Current Stats
            </h3>
            <div className="space-y-4">
              {getAvailableStats().map(({ key, label }) => (
                <div 
                  key={key}
                  className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    selectedStat === key 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                  onClick={() => setSelectedStat(key)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">{label}</span>
                    <span className="text-lg font-bold text-gray-800">
                      {getStatValue(key)}
                      {selectedStat === key && (
                        <span className={`ml-2 ${pointsEarned >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          → {Math.min(99, Math.max(60, getStatValue(key) + pointsEarned))}
                        </span>
                      )}
                    </span>
                  </div>
                  {getStatBar(getStatValue(key))}
                </div>
              ))}
            </div>
          </div>

          {/* Player Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Player Info</h3>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-800">{player.name}</h4>
                <p className="text-gray-600">{player.position} • Age {player.age}</p>
                <p className="text-lg font-semibold text-blue-600">{player.currentTeam}</p>
              </div>
              
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center">
                  <span className="text-2xl font-bold">{player.overallRating}</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Overall Rating</p>
                {selectedStat && (
                  <p className="text-purple-600 font-semibold">
                    New Rating: {calculateOverallRating({
                      ...player.stats,
                      [selectedStat]: Math.min(99, Math.max(60, getStatValue(selectedStat) + pointsEarned))
                    }, player.position)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleStatImprovement}
            disabled={!selectedStat}
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-8 rounded-lg font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-700 hover:to-purple-800 transition-all"
          >
            Improve {selectedStat ? getAvailableStats().find(s => s.key === selectedStat)?.label : 'Stat'}
          </button>
        </div>
      </div>
    </div>
  );
}