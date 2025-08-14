import React, { useState, useEffect } from 'react';
import { TriviaQuestion } from '../types/Player';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

interface TriviaQuestionProps {
  question: TriviaQuestion;
  onAnswer: (timeLeft: number, correct: boolean) => void;
}

export function TriviaQuestionComponent({ question, onAnswer }: TriviaQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !answered) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !answered) {
      handleAnswer(null);
    }
  }, [timeLeft, answered]);

  const handleAnswer = (answerIndex: number | null) => {
    if (answered) return;
    
    setSelectedAnswer(answerIndex);
    setAnswered(true);
    
    const correct = answerIndex === question.correctAnswer;
    
    setTimeout(() => {
      onAnswer(timeLeft, correct);
    }, 1500);
  };

  const getButtonStyle = (index: number) => {
    if (!answered) {
      return 'bg-white border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50';
    }
    
    if (index === question.correctAnswer) {
      return 'bg-green-500 text-white border-green-500';
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return 'bg-red-500 text-white border-red-500';
    }
    
    return 'bg-gray-200 text-gray-500 border-gray-200';
  };

  const getIcon = (index: number) => {
    if (!answered) return null;
    
    if (index === question.correctAnswer) {
      return <CheckCircle className="w-5 h-5" />;
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return <XCircle className="w-5 h-5" />;
    }
    
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Knowledge Challenge</h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Clock className="w-6 h-6 text-blue-600" />
            <span className={`text-2xl font-bold ${timeLeft <= 10 ? 'text-red-600' : 'text-blue-600'}`}>
              {timeLeft}s
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
            <div 
              className={`h-3 rounded-full transition-all duration-1000 ${
                timeLeft <= 10 ? 'bg-red-500' : 'bg-blue-500'
              }`}
              style={{ width: `${(timeLeft / 30) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center leading-relaxed">
            {question.question}
          </h3>
          
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={answered}
                className={`w-full p-4 rounded-lg text-left font-medium transition-all flex items-center justify-between ${getButtonStyle(index)} ${
                  !answered ? 'hover:scale-105' : ''
                }`}
              >
                <span>{option}</span>
                {getIcon(index)}
              </button>
            ))}
          </div>
        </div>

        {answered && (
          <div className="text-center">
            {selectedAnswer === question.correctAnswer ? (
              <div className="text-green-600">
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <p className="text-lg font-semibold">Correct! Great job!</p>
              </div>
            ) : (
              <div className="text-red-600">
                <XCircle className="w-8 h-8 mx-auto mb-2" />
                <p className="text-lg font-semibold">
                  {selectedAnswer === null ? 'Time\'s up!' : 'Incorrect!'}
                </p>
                <p className="text-gray-600">
                  The correct answer was: {question.options[question.correctAnswer]}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}