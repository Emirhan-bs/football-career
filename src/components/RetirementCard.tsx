import React from 'react';
import { Player, RetirementStats } from '../types/Player';
import { Trophy, Award, Calendar, Users, Star, TrendingUp, Target } from 'lucide-react';

interface RetirementCardProps {
  player: Player;
  retirementStats: RetirementStats;
  onNewCareer: () => void;
}

export function RetirementCard({ player, retirementStats, onNewCareer }: RetirementCardProps) {
  const getStatBar = (value: number, maxValue: number = 99) => {
    const percentage = (value / maxValue) * 100;
    let colorClass = 'bg-red-500';
    
    if (value >= 85) colorClass = 'bg-green-500';
    else if (value >= 75) colorClass = 'bg-yellow-500';
    else if (value >= 65) colorClass = 'bg-orange-500';
    
    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-500 ${colorClass}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };

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

  const getStatValue = (statKey: string) => {
    return player.stats[statKey as keyof typeof player.stats] as number;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-6xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Trophy className="w-10 h-10 text-yellow-500" />
            <h1 className="text-4xl font-bold text-gray-800">Career Complete</h1>
          </div>
          <p className="text-xl text-gray-600">Congratulations on an incredible football journey!</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Player Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">{player.overallRating}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{player.name}</h2>
              <p className="text-gray-600 mb-2">{player.position} • Retired at {retirementStats.retirementAge}</p>
              <p className="text-lg font-semibold text-purple-600">{player.currentTeam}</p>
              
              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Peak Rating</span>
                  <span className="font-bold text-lg text-green-600">{retirementStats.peakRating}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Career Average</span>
                  <span className="font-bold text-lg text-blue-600">{retirementStats.averageRating}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Seasons Played</span>
                  <span className="font-bold text-lg text-purple-600">{retirementStats.totalSeasons}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Final Stats */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Final Attributes
            </h3>
            <div className="space-y-3">
              {getAvailableStats().map(({ key, label }) => (
                <div key={key} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-700 text-sm">{label}</span>
                    <span className="text-lg font-bold text-gray-800">{getStatValue(key)}</span>
                  </div>
                  {getStatBar(getStatValue(key))}
                </div>
              ))}
            </div>
          </div>

          {/* Career Highlights */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2" />
              Career Highlights
            </h3>
            
            {/* Career Stats */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-800 mb-3">Career Totals</h4>
              <div className="space-y-2">
                {player.position === 'GK' ? (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Career Save Rate</span>
                      <span className="font-semibold">{player.careerStats.averageSaveRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Clean Sheets</span>
                      <span className="font-semibold">{player.careerStats.totalCleanSheets}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Goals Conceded</span>
                      <span className="font-semibold">{player.careerStats.totalGoalsConceded}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Career Goals</span>
                      <span className="font-semibold">{player.careerStats.totalGoals}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Career Assists</span>
                      <span className="font-semibold">{player.careerStats.totalAssists}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Best Season */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Best Season
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">Season {retirementStats.bestSeason.season}</span>
                  <span className="font-semibold">{retirementStats.bestSeason.team}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Rating</span>
                  <span className="font-semibold">{retirementStats.bestSeason.overallRating}</span>
                </div>
                {player.position === 'GK' ? (
                  <div className="flex justify-between">
                    <span className="text-gray-700">Clean Sheets</span>
                    <span className="font-semibold">{retirementStats.bestSeason.cleanSheets}</span>
                  </div>
                ) : (
                  <div className="flex justify-between">
                    <span className="text-gray-700">Goals + Assists</span>
                    <span className="font-semibold">
                      {(retirementStats.bestSeason.goals || 0) + (retirementStats.bestSeason.assists || 0)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Teams */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Clubs Played For
              </h4>
              <div className="flex flex-wrap gap-2">
                {retirementStats.teamsPlayedFor.map((team, index) => (
                  <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                    {team}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Career History */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Complete Career History
          </h3>
          <div className="bg-gray-50 rounded-lg p-4 max-h-80 overflow-y-auto">
            <div className="grid gap-2">
              {player.careerHistory.map((season, index) => (
                <div key={index} className="flex justify-between items-center py-3 px-4 bg-white rounded border">
                  <div>
                    <span className="font-semibold">Season {season.season}</span>
                    <span className="text-gray-600 ml-3">{season.team}</span>
                    <span className="text-gray-500 ml-2 text-sm">(Age {season.age})</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">OVR: {season.overallRating}</div>
                    <div className="text-sm text-gray-600">
                      {player.position === 'GK' 
                        ? `${season.cleanSheets} CS, ${season.goalsConceded} GA` 
                        : `${season.goals}G ${season.assists}A`
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onNewCareer}
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition-all flex items-center justify-center space-x-2 mx-auto"
          >
            <TrendingUp className="w-6 h-6" />
            <span>Start New Career</span>
          </button>
        </div>
      </div>
    </div>
  );
}