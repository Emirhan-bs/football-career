import React, { useState } from 'react';
import { Player, TransferOffer } from '../types/Player';
import { MapPin, Star, Users, TrendingUp, CheckCircle, Home } from 'lucide-react';
import { getTeamLogo } from '../utils/gameUtils';

function getTeamInitials(teamName: string): string {
  const words = teamName.split(' ');
  if (words.length >= 2) {
    return words[0].charAt(0) + words[1].charAt(0);
  }
  return teamName.substring(0, 2).toUpperCase();
}

interface TransferSelectionProps {
  player: Player;
  offers: TransferOffer[];
  onTransferSelected: (selectedTeam: string) => void;
}

export function TransferSelection({ player, offers, onTransferSelected }: TransferSelectionProps) {
  const [selectedOffer, setSelectedOffer] = useState<TransferOffer | null>(null);

  const handleConfirmTransfer = () => {
    if (selectedOffer) {
      onTransferSelected(selectedOffer.team);
    }
  };

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'top':
        return <Star className="w-5 h-5 text-yellow-500" />;
      case 'mid':
        return <TrendingUp className="w-5 h-5 text-blue-500" />;
      case 'lower':
        return <Users className="w-5 h-5 text-green-500" />;
      default:
        return <Users className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'top':
        return 'from-yellow-50 to-yellow-100 border-yellow-200';
      case 'mid':
        return 'from-blue-50 to-blue-100 border-blue-200';
      case 'lower':
        return 'from-green-50 to-green-100 border-green-200';
      default:
        return 'from-gray-50 to-gray-100 border-gray-200';
    }
  };

  const getTierLabel = (tier: string) => {
    switch (tier) {
      case 'top':
        return 'Elite Club';
      case 'mid':
        return 'Established Club';
      case 'lower':
        return 'Developing Club';
      default:
        return 'Professional Club';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Transfer Window</h2>
          <p className="text-gray-600 mb-4">Choose your next destination</p>
          
          <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800">{player.name}</h3>
                <p className="text-gray-600">{player.position} • Age {player.age}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">{player.overallRating}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              onClick={() => setSelectedOffer(offer)}
              className={`cursor-pointer transition-all transform hover:scale-105 rounded-lg border-2 p-6 ${
                selectedOffer?.team === offer.team
                  ? 'border-indigo-500 bg-indigo-50 scale-105'
                  : `bg-gradient-to-br ${getTierColor(offer.tier)} hover:border-indigo-300`
              }`}
            >
              {/* Team Logo */}
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white border-2 border-gray-200 overflow-hidden">
                  {offer.team === player.currentTeam ? (
                    <Home className="w-8 h-8 text-gray-600" />
                  ) : (
                    <img 
                      src={getTeamLogo(offer.team)} 
                      alt={`${offer.team} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">${getTeamInitials(offer.team)}</div>`;
                        }
                      }}
                    />
                  )}
                </div>
              </div>
              
              <div className="text-center mb-4">
                {offer.team !== player.currentTeam && (
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    {getTierIcon(offer.tier)}
                    <span className="text-sm font-medium text-gray-600">
                      {getTierLabel(offer.tier)}
                    </span>
                  </div>
                )}
                {offer.team === player.currentTeam && (
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Home className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-600">
                      Current Club
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-800 mb-1">{offer.team}</h3>
                <div className="flex items-center justify-center space-x-1 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{offer.continent}</span>
                </div>
              </div>

              <p className="text-gray-700 text-sm text-center mb-4 leading-relaxed">
                {offer.description}
              </p>

              {selectedOffer?.team === offer.team && (
                <div className="flex items-center justify-center text-indigo-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Selected</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedOffer && (
          <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Transfer Details</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">New Club:</span> {selectedOffer.team}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Location:</span> {selectedOffer.continent}
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">Club Level:</span> {getTierLabel(selectedOffer.tier)}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Current Team:</span> {player.currentTeam}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <button
            onClick={handleConfirmTransfer}
            disabled={!selectedOffer}
            className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 px-8 rounded-lg font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-indigo-700 hover:to-indigo-800 transition-all flex items-center justify-center space-x-2 mx-auto"
          >
            <CheckCircle className="w-6 h-6" />
            <span>Confirm Transfer</span>
          </button>
        </div>
      </div>
    </div>
  );
}