import { Player } from "../types/Player";
import { User, Award, Target, Calendar, Trophy } from "lucide-react";

interface PlayerStatsProps {
  player: Player;
  onStartSeason: () => void;
}

export function PlayerStats({ player, onStartSeason }: PlayerStatsProps) {
  const getAvailableStats = () => {
    if (player.position === "GK") {
      return [
        { key: "diving", label: "Diving" },
        { key: "handling", label: "Handling" },
        { key: "kicking", label: "Kicking" },
        { key: "reflexes", label: "Reflexes" },
        { key: "speed", label: "Speed" },
        { key: "positioning", label: "Positioning" },
      ];
    } else {
      return [
        { key: "pace", label: "Pace" },
        { key: "shooting", label: "Shooting" },
        { key: "passing", label: "Passing" },
        { key: "dribbling", label: "Dribbling" },
        { key: "defense", label: "Defense" },
        { key: "physical", label: "Physical" },
      ];
    }
  };

  const getStatValue = (statKey: string) => {
    return player.stats[statKey as keyof typeof player.stats] as number;
  };

  const getStatBar = (value: number) => {
    const percentage = (value / 99) * 100;
    let colorClass = "bg-red-500";

    if (value >= 85) colorClass = "bg-green-500";
    else if (value >= 75) colorClass = "bg-yellow-500";
    else if (value >= 65) colorClass = "bg-orange-500";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Player Dashboard
          </h2>
          <p className="text-gray-600">
            Manage your career and track your progress
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Player Info */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 mb-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  {player.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  {player.position} • Age {player.age}
                </p>
                <p className="text-lg font-semibold text-blue-600 mb-4">
                  {player.currentTeam}
                </p>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold">
                    {player.overallRating}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Overall Rating</p>
              </div>
            </div>

            {/* Season Stats */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Current Season
              </h4>
              <div className="space-y-3">
                {player.position === "GK" ? (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Save Rate</span>
                      <span className="font-semibold">
                        {player.seasonStats.saveRate || 0}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Goals Conceded</span>
                      <span className="font-semibold">
                        {player.seasonStats.goalsConceded || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Clean Sheets</span>
                      <span className="font-semibold">
                        {player.seasonStats.cleanSheets || 0}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Goals</span>
                      <span className="font-semibold">
                        {player.seasonStats.goals || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Assists</span>
                      <span className="font-semibold">
                        {player.seasonStats.assists || 0}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Player Attributes
            </h3>
            <div className="space-y-4">
              {getAvailableStats().map(({ key, label }) => (
                <div key={key} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">{label}</span>
                    <span className="text-lg font-bold text-gray-800">
                      {getStatValue(key)}
                    </span>
                  </div>
                  {getStatBar(getStatValue(key))}
                </div>
              ))}
            </div>
          </div>

          {/* Career Info */}
          <div className="lg:col-span-1">
            {/* Career Stats */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2" />
                Career Totals
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Seasons</span>
                  <span className="font-semibold">
                    {player.careerHistory.length}
                  </span>
                </div>
                {player.position === "GK" ? (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Avg Save Rate</span>
                      <span className="font-semibold">
                        {player.careerStats.averageSaveRate || 0}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">
                        Total Goals Conceded
                      </span>
                      <span className="font-semibold">
                        {player.careerStats.totalGoalsConceded || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Total Clean Sheets</span>
                      <span className="font-semibold">
                        {player.careerStats.totalCleanSheets || 0}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Career Goals</span>
                      <span className="font-semibold">
                        {player.careerStats.totalGoals || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Career Assists</span>
                      <span className="font-semibold">
                        {player.careerStats.totalAssists || 0}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Career History */}
            {player.careerHistory.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Career History
                </h4>
                <div className="max-h-60 overflow-y-auto space-y-2">
                  {[...player.careerHistory].reverse().map((season, index) => (
                    <div key={index} className="bg-white rounded p-3 border">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-semibold text-sm">
                            Season {season.season}
                          </span>
                          <p className="text-xs text-gray-600">{season.team}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold">
                            OVR: {season.overallRating}
                          </div>
                          <div className="text-xs text-gray-600">
                            {player.position === "GK"
                              ? `${season.cleanSheets} CS`
                              : `${season.goals}G ${season.assists}A`}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onStartSeason}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center space-x-2 mx-auto"
          >
            <Calendar className="w-6 h-6" />
            <span>Start New Season</span>
          </button>
        </div>
      </div>
    </div>
  );
}
