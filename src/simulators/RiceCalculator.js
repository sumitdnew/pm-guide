import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

const RiceCalculator = ({ onViewCaseStudies }) => {
  const [inputs, setInputs] = useState({
    reach: '',
    impact: '',
    confidence: '',
    effort: ''
  });

  const calculateRICE = () => {
    const { reach, impact, confidence, effort } = inputs;
    if (!reach || !impact || !confidence || !effort) return 0;
    return Math.round((parseFloat(reach) * parseFloat(impact) * parseFloat(confidence)) / parseFloat(effort));
  };

  return (
    <div className="bg-blue-50 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">RICE Prioritization Calculator</h2>
      
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-blue-900 mb-2">About RICE Framework</h3>
        <p className="text-blue-800 text-sm mb-3">
          RICE is a prioritization framework that scores features based on Reach, Impact, Confidence, and Effort. 
          It helps product teams make data-driven decisions about what to build next by quantifying the potential value 
          of each feature relative to the effort required.
        </p>
        <div className="flex items-center justify-between">
          <a 
            href="https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium underline"
          >
            Learn more about RICE →
          </a>
          {onViewCaseStudies && (
            <button
              onClick={() => onViewCaseStudies('rice')}
              className="flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors"
            >
              <Building2 className="h-4 w-4 mr-1" />
              View Case Studies
            </button>
          )}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-blue-800 mb-2">
            Reach (users affected per quarter)
          </label>
          <input
            type="number"
            value={inputs.reach}
            onChange={(e) => setInputs(prev => ({...prev, reach: e.target.value}))}
            placeholder="e.g., 10000"
            className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-blue-800 mb-2">
            Impact (0.25 = minimal, 3.0 = massive)
          </label>
          <input
            type="number"
            step="0.25"
            min="0.25"
            max="3"
            value={inputs.impact}
            onChange={(e) => setInputs(prev => ({...prev, impact: e.target.value}))}
            placeholder="e.g., 2.0"
            className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-blue-800 mb-2">
            Confidence (percentage)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={inputs.confidence}
            onChange={(e) => setInputs(prev => ({...prev, confidence: e.target.value}))}
            placeholder="e.g., 80"
            className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-blue-800 mb-2">
            Effort (person-months)
          </label>
          <input
            type="number"
            step="0.5"
            value={inputs.effort}
            onChange={(e) => setInputs(prev => ({...prev, effort: e.target.value}))}
            placeholder="e.g., 3"
            className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-blue-200">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {calculateRICE()}
          </div>
          <div className="text-blue-800 text-lg">RICE Score</div>
          <div className="text-sm text-blue-600 mt-2">
            Formula: ({inputs.reach} × {inputs.impact} × {inputs.confidence}%) / {inputs.effort}
          </div>
        </div>
        
        {calculateRICE() > 0 && (
          <div className="mt-4 p-3 bg-blue-100 rounded-lg">
            <div className="text-sm text-blue-800">
              <strong>Interpretation:</strong> {
                calculateRICE() > 1000 ? 'High priority - should be considered for immediate development' :
                calculateRICE() > 500 ? 'Medium priority - good candidate for next quarter' :
                calculateRICE() > 100 ? 'Low priority - consider for future roadmap' :
                'Very low priority - likely not worth pursuing'
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RiceCalculator;