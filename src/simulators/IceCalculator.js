import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

const IceCalculator = ({ onViewCaseStudies }) => {
  const [inputs, setInputs] = useState({
    impact: '',
    confidence: '',
    ease: ''
  });

  const calculateICE = () => {
    const { impact, confidence, ease } = inputs;
    if (!impact || !confidence || !ease) return 0;
    return Math.round(parseFloat(impact) * parseFloat(confidence) * parseFloat(ease));
  };

  const getScoreInterpretation = (score) => {
    if (score >= 700) return { 
      text: 'Excellent - High impact, confident, and easy to implement', 
      color: 'text-purple-600', 
      bg: 'bg-purple-100' 
    };
    if (score >= 500) return { 
      text: 'Good - Worth pursuing with some trade-offs', 
      color: 'text-purple-600', 
      bg: 'bg-purple-100' 
    };
    if (score >= 300) return { 
      text: 'Moderate - Consider against other priorities', 
      color: 'text-purple-700', 
      bg: 'bg-purple-50' 
    };
    return { 
      text: 'Low priority - Look for better opportunities', 
      color: 'text-gray-600', 
      bg: 'bg-gray-100' 
    };
  };

  const score = calculateICE();
  const interpretation = getScoreInterpretation(score);

  return (
    <div className="bg-purple-50 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-purple-900 mb-6">ICE Scoring Framework</h2>
      
      <div className="bg-purple-100 p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-purple-900 mb-2">About ICE Framework</h3>
        <p className="text-purple-800 text-sm mb-3">
          ICE is a simplified prioritization framework that evaluates features based on Impact, Confidence, and Ease. 
          It's a streamlined alternative to RICE that focuses on the three most important factors for quick decision-making 
          in fast-paced product development environments.
        </p>
        <div className="flex items-center justify-between">
          <a 
            href="https://www.productplan.com/glossary/ice-scoring-model/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 text-sm font-medium underline"
          >
            Learn more about ICE →
          </a>
          {onViewCaseStudies && (
            <button
              onClick={() => onViewCaseStudies('ice')}
              className="flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors"
            >
              <Building2 className="h-4 w-4 mr-1" />
              View Case Studies
            </button>
          )}
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-purple-800 mb-2">
            Impact (1-10)
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={inputs.impact}
            onChange={(e) => setInputs(prev => ({...prev, impact: e.target.value}))}
            placeholder="e.g., 8"
            className="w-full p-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <p className="text-xs text-purple-600 mt-1">How much will this move the needle?</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-purple-800 mb-2">
            Confidence (1-10)
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={inputs.confidence}
            onChange={(e) => setInputs(prev => ({...prev, confidence: e.target.value}))}
            placeholder="e.g., 7"
            className="w-full p-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <p className="text-xs text-purple-600 mt-1">How sure are we about this?</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-purple-800 mb-2">
            Ease (1-10)
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={inputs.ease}
            onChange={(e) => setInputs(prev => ({...prev, ease: e.target.value}))}
            placeholder="e.g., 6"
            className="w-full p-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <p className="text-xs text-purple-600 mt-1">How easy is it to implement?</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-purple-200">
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-600 mb-2">
            {score}
          </div>
          <div className="text-purple-800 text-lg">ICE Score</div>
          <div className="text-sm text-purple-600 mt-2">
            Formula: {inputs.impact} × {inputs.confidence} × {inputs.ease}
          </div>
        </div>
        
        {score > 0 && (
          <div className="mt-4 p-4 rounded-lg border border-purple-200">
            <div className={`text-center ${interpretation.bg} p-3 rounded-lg`}>
              <div className={`text-lg font-semibold ${interpretation.color}`}>
                {interpretation.text}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IceCalculator;
