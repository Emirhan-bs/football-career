import React, { useState } from "react";
import { Player, POSITIONS, CONTINENTS } from "../types/Player";
import {
  generateRandomStats,
  calculateOverallRating,
  getRandomTeam,
} from "../utils/gameUtils";
import { User, MapPin, Play } from "lucide-react";
import fieldImage from "../field-new.png";

interface GameSetupProps {
  onPlayerCreated: (player: Player) => void;
}

export function GameSetup({ onPlayerCreated }: GameSetupProps) {
  const [name, setName] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("");

  // Pozisyon açıklamaları
  const positionDescriptions: { [key: string]: string } = {
    GK: "Goalkeeper (GK)",
    LB: "Left Back (LB)",
    CB: "Center Back (CB)",
    RB: "Right Back (RB)",
    LM: "Left Midfielder (LM)",
    CM: "Center Midfielder (CM)",
    RM: "Right Midfielder (RM)",
    LW: "Left Wing (LW)",
    ST: "Striker (ST)",
    RW: "Right Wing (RW)",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !selectedPosition || !selectedContinent) {
      alert("Please fill in all fields");
      return;
    }

    const stats = generateRandomStats(selectedPosition);
    const overallRating = calculateOverallRating(stats, selectedPosition);
    const team = getRandomTeam(selectedContinent);

    const newPlayer: Player = {
      id: Math.random().toString(36).substr(2, 9),
      name: name.trim(),
      age: 18,
      position: selectedPosition,
      continent: selectedContinent,
      currentTeam: team,
      overallRating,
      stats,
      seasonStats:
        selectedPosition === "GK"
          ? { saveRate: 0, goalsConceded: 0, cleanSheets: 0 }
          : { goals: 0, assists: 0 },
      careerStats:
        selectedPosition === "GK"
          ? { averageSaveRate: 0, totalGoalsConceded: 0, totalCleanSheets: 0 }
          : { totalGoals: 0, totalAssists: 0 },
      careerHistory: [],
    };

    onPlayerCreated(newPlayer);
  };

  const getPositionStyle = (pos: string) => {
    const positions: { [key: string]: string } = {
      GK: "left-1/2 top-4 -translate-x-1/2",
      LB: "left-[150px] top-[120px]",
      CB: "left-1/2 top-[120px] -translate-x-1/2",
      RB: "right-[150px] top-[120px]",
      LM: "left-20 top-1/2 -translate-y-1/2",
      CM: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
      RM: "right-20 top-1/2 -translate-y-1/2",
      LW: "left-20 top-[450px]",
      ST: "left-1/2 top-[500px] -translate-x-1/2",
      RW: "right-20 top-[450px]",
    };
    return positions[pos] || "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Football Career Simulator
          </h1>
          <p className="text-gray-600">
            Create your player and begin your journey to stardom
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Input */}
          <div className="space-y-2">
            <label className="flex items-center text-lg font-semibold text-gray-700">
              <User className="w-5 h-5 mr-2" />
              Player Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors text-lg"
              placeholder="Enter your player's name"
              maxLength={30}
            />
          </div>

          {/* Position Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Choose Your Position
            </h3>
            <div className="relative bg-gradient-to-b from-green-400 to-green-600 rounded-lg p-6 h-[600px]">
              <img
                src={fieldImage}
                alt="Football Field"
                className="absolute inset-0 w-full h-full rounded-lg"
              />

              {/* Position Buttons */}
              {[...POSITIONS.outfield, ...POSITIONS.goalkeeper].map(
                (position) => (
                  <button
                    key={position}
                    type="button"
                    onClick={() => setSelectedPosition(position)}
                    className={`absolute w-12 h-12 rounded-full font-bold text-sm transition-all transform hover:scale-110 ${getPositionStyle(
                      position
                    )} ${
                      selectedPosition === position
                        ? "bg-orange-500 text-white shadow-lg scale-110"
                        : "bg-white text-gray-800 hover:bg-orange-100"
                    }`}
                  >
                    {position}
                  </button>
                )
              )}
            </div>
            {selectedPosition && (
              <p className="text-center text-green-700 font-medium">
                Selected: {positionDescriptions[selectedPosition]}
              </p>
            )}
          </div>

          {/* Continent Selection */}
          <div className="space-y-4">
            <label className="flex items-center text-lg font-semibold text-gray-700">
              <MapPin className="w-5 h-5 mr-2" />
              Choose Your Continent
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {CONTINENTS.map((continent) => (
                <button
                  key={continent}
                  type="button"
                  onClick={() => setSelectedContinent(continent)}
                  className={`p-3 rounded-lg font-medium transition-all ${
                    selectedContinent === continent
                      ? "bg-green-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {continent}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!name.trim() || !selectedPosition || !selectedContinent}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center space-x-2"
          >
            <Play className="w-6 h-6" />
            <span>Start Career</span>
          </button>
        </form>
      </div>
    </div>
  );
}
