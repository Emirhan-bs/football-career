import React from 'react';
import { Player } from '../types/Player';
import { Trophy, Target, Shield, TrendingUp, Calendar } from 'lucide-react';

interface SeasonSummaryProps {
  player: Player;
  seasonNumber: number;
  onContinue: () => void;
}

export function SeasonSummary({ player, seasonNumber, onContinue }: SeasonSummaryProps) {
  const currentSeason = player.careerHistory[player.careerHistory.length - 1];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Trophy className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl font-bold text-gray-800">Season {seasonNumber} Complete</h2>
          </div>
          <p className="text-gray-600">Your journey continues...</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Season Performance */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Season Performance
            </h3>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6">
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-gray-800">{currentSeason?.team}</h4>
                <p className="text-gray-600">Age {currentSeason?.age}</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Overall Rating</span>
                  <span className="font-bold text-lg text-orange-600">{currentSeason?.overallRating}</span>
                </div>
                
                {player.position === 'GK' ? (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Save Rate</span>
                      <span className="font-semibold">{currentSeason?.saveRate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Goals Conceded</span>
                      <span className="font-semibold">{currentSeason?.goalsConceded}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Clean Sheets</span>
                      <span className="font-semibold">{currentSeason?.cleanSheets}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Goals</span>
                      <span className="font-semibold">{currentSeason?.goals}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Assists</span>
                      <span className="font-semibold">{currentSeason?.assists}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Career Stats */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Career Totals
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-gray-800">{player.name}</h4>
                <p className="text-gray-600">{player.position} • {player.age} years old</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Seasons Played</span>
                  <span className="font-bold text-lg text-blue-600">{player.careerHistory.length}</span>
                </div>
                
                {player.position === 'GK' ? (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Career Save Rate</span>
                      <span className="font-semibold">{player.careerStats.averageSaveRate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Total Goals Conceded</span>
                      <span className="font-semibold">{player.careerStats.totalGoalsConceded}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Total Clean Sheets</span>
                      <span className="font-semibold">{player.careerStats.totalCleanSheets}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Career Goals</span>
                      <span className="font-semibold">{player.careerStats.totalGoals}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Career Assists</span>
                      <span className="font-semibold">{player.careerStats.totalAssists}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Transfer News */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Transfer News
          </h3>
          <p className="text-gray-700">
            <span className="font-semibold">{player.name}</span> has signed with{' '}
            <span className="font-semibold text-green-600">{player.currentTeam}</span> for the upcoming season!
          </p>
        </div>

        {/* Career History */}
        {player.careerHistory.length > 1 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Career History
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 max-h-60 overflow-y-auto">
              <div className="space-y-2">
                {[...player.careerHistory].reverse().map((season, index) => (
                  <div key={index} className="flex justify-between items-center py-2 px-3 bg-white rounded border">
                    <div>
                      <span className="font-semibold">Season {season.season}</span>
                      <span className="text-gray-600 ml-2">{season.team}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">OVR: {season.overallRating}</div>
                      <div className="text-sm">
                        {player.position === 'GK' 
                          ? `${season.cleanSheets} CS` 
                          : `${season.goals}G ${season.assists}A`
                        }
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <button
            onClick={onContinue}
            className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 px-8 rounded-lg font-bold text-lg hover:from-orange-700 hover:to-orange-800 transition-all"
          >
            Continue to Next Season
          </button>
        </div>
      </div>
    </div>
  );
}