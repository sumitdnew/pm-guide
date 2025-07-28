import React, { useState } from 'react';

const AbTestSampleSizeCalculator = () => {
  const [inputs, setInputs] = useState({
    baselineConversion: '',
    minimumDetectableEffect: '',
    confidenceLevel: '95',
    statisticalPower: '80',
    trafficSplit: '50'
  });

  const calculateSampleSize = () => {
    const { baselineConversion, minimumDetectableEffect, confidenceLevel, statisticalPower, trafficSplit } = inputs;
    
    if (!baselineConversion || !minimumDetectableEffect) return null;

    const p1 = parseFloat(baselineConversion) / 100;
    const p2 = p1 + (parseFloat(minimumDetectableEffect) / 100);
    const alpha = (100 - parseFloat(confidenceLevel)) / 100;
    const beta = (100 - parseFloat(statisticalPower)) / 100;
    const split = parseFloat(trafficSplit) / 100;

    // Z-scores for common confidence levels
    const zAlpha = {
      '90': 1.645,
      '95': 1.96,
      '99': 2.576
    }[confidenceLevel] || 1.96;

    const zBeta = {
      '80': 0.84,
      '85': 1.04,
      '90': 1.28,
      '95': 1.645
    }[statisticalPower] || 0.84;

    // Sample size calculation using normal approximation
    const pooledP = (p1 + p2) / 2;
    const numerator = Math.pow(zAlpha * Math.sqrt(2 * pooledP * (1 - pooledP)) + zBeta * Math.sqrt(p1 * (1 - p1) + p2 * (1 - p2)), 2);
    const denominator = Math.pow(p2 - p1, 2);
    
    const sampleSizePerGroup = Math.ceil(numerator / denominator);
    const totalSampleSize = Math.ceil(sampleSizePerGroup / split);

    return {
      sampleSizePerGroup,
      totalSampleSize,
      p1,
      p2,
      alpha,
      beta
    };
  };

  const getTestDuration = (totalSampleSize) => {
    const dailyTraffic = 1000; // Default assumption
    const days = Math.ceil(totalSampleSize / dailyTraffic);
    
    if (days <= 7) return `${days} days`;
    if (days <= 30) return `${Math.ceil(days / 7)} weeks`;
    return `${Math.ceil(days / 30)} months`;
  };

  const getSignificanceLevel = (confidenceLevel) => {
    const levels = {
      '90': '10% (90% confidence)',
      '95': '5% (95% confidence)',
      '99': '1% (99% confidence)'
    };
    return levels[confidenceLevel] || '5% (95% confidence)';
  };

  const results = calculateSampleSize();

  return (
    <div className="bg-lime-50 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-lime-900 mb-6">A/B Test Sample Size Calculator</h2>
      
      <div className="bg-lime-100 p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-lime-900 mb-2">About A/B Testing Sample Size Framework</h3>
        <p className="text-lime-800 text-sm mb-3">
          A/B testing sample size calculation ensures your experiments have enough statistical power to detect meaningful 
          differences between variants. Proper sample sizing prevents false positives, false negatives, and ensures 
          reliable, data-driven decisions.
        </p>
        <a 
          href="https://www.optimizely.com/optimization-glossary/sample-size/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lime-600 hover:text-lime-800 text-sm font-medium underline"
        >
          Learn more about A/B Testing Sample Size →
        </a>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-lime-800 mb-2">
            Baseline Conversion Rate (%)
          </label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            max="100"
            value={inputs.baselineConversion}
            onChange={(e) => setInputs(prev => ({...prev, baselineConversion: e.target.value}))}
            placeholder="e.g., 2.5"
            className="w-full p-3 border border-lime-300 rounded-lg focus:ring-2 focus:ring-lime-500"
          />
          <p className="text-xs text-lime-600 mt-1">Current conversion rate of your control variant</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-lime-800 mb-2">
            Minimum Detectable Effect (%)
          </label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            max="100"
            value={inputs.minimumDetectableEffect}
            onChange={(e) => setInputs(prev => ({...prev, minimumDetectableEffect: e.target.value}))}
            placeholder="e.g., 0.5"
            className="w-full p-3 border border-lime-300 rounded-lg focus:ring-2 focus:ring-lime-500"
          />
          <p className="text-xs text-lime-600 mt-1">Smallest improvement you want to detect</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-lime-800 mb-2">
            Confidence Level
          </label>
          <select
            value={inputs.confidenceLevel}
            onChange={(e) => setInputs(prev => ({...prev, confidenceLevel: e.target.value}))}
            className="w-full p-3 border border-lime-300 rounded-lg focus:ring-2 focus:ring-lime-500"
          >
            <option value="90">90% (Less strict)</option>
            <option value="95">95% (Standard)</option>
            <option value="99">99% (Very strict)</option>
          </select>
          <p className="text-xs text-lime-600 mt-1">Probability of not making a Type I error</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-lime-800 mb-2">
            Statistical Power
          </label>
          <select
            value={inputs.statisticalPower}
            onChange={(e) => setInputs(prev => ({...prev, statisticalPower: e.target.value}))}
            className="w-full p-3 border border-lime-300 rounded-lg focus:ring-2 focus:ring-lime-500"
          >
            <option value="80">80% (Standard)</option>
            <option value="85">85% (Higher power)</option>
            <option value="90">90% (Very high power)</option>
            <option value="95">95% (Maximum power)</option>
          </select>
          <p className="text-xs text-lime-600 mt-1">Probability of detecting a real effect</p>
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-lime-800 mb-2">
            Traffic Split (%)
          </label>
          <select
            value={inputs.trafficSplit}
            onChange={(e) => setInputs(prev => ({...prev, trafficSplit: e.target.value}))}
            className="w-full p-3 border border-lime-300 rounded-lg focus:ring-2 focus:ring-lime-500"
          >
            <option value="50">50/50 (Equal split)</option>
            <option value="25">25/75 (Unequal split)</option>
            <option value="33">33/67 (Unequal split)</option>
            <option value="10">10/90 (Heavy control)</option>
          </select>
          <p className="text-xs text-lime-600 mt-1">How traffic is divided between variants</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-lime-200">
        <h3 className="text-lg font-semibold text-lime-900 mb-4">Sample Size Results</h3>
        
        {results ? (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-lime-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-lime-600 mb-1">
                  {results.sampleSizePerGroup.toLocaleString()}
                </div>
                <div className="text-sm text-lime-700">Per Group</div>
              </div>
              
              <div className="bg-lime-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-lime-600 mb-1">
                  {results.totalSampleSize.toLocaleString()}
                </div>
                <div className="text-sm text-lime-700">Total Sample</div>
              </div>
              
              <div className="bg-lime-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-lime-600 mb-1">
                  {getTestDuration(results.totalSampleSize)}
                </div>
                <div className="text-sm text-lime-700">Estimated Duration</div>
              </div>
              
              <div className="bg-lime-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-lime-600 mb-1">
                  {getSignificanceLevel(inputs.confidenceLevel)}
                </div>
                <div className="text-sm text-lime-700">Significance Level</div>
              </div>
            </div>

            <div className="bg-lime-100 p-4 rounded-lg">
              <h4 className="font-semibold text-lime-900 mb-3">Test Parameters</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-lime-800">Baseline Conversion:</strong>
                  <p className="text-lime-700">{(results.p1 * 100).toFixed(2)}%</p>
                </div>
                <div>
                  <strong className="text-lime-800">Target Conversion:</strong>
                  <p className="text-lime-700">{(results.p2 * 100).toFixed(2)}%</p>
                </div>
                <div>
                  <strong className="text-lime-800">Alpha (Type I Error):</strong>
                  <p className="text-lime-700">{(results.alpha * 100).toFixed(1)}%</p>
                </div>
                <div>
                  <strong className="text-lime-800">Beta (Type II Error):</strong>
                  <p className="text-lime-700">{(results.beta * 100).toFixed(1)}%</p>
                </div>
              </div>
            </div>

            <div className="bg-lime-50 p-4 rounded-lg">
              <h4 className="font-semibold text-lime-900 mb-3">Best Practices</h4>
              <ul className="space-y-2 text-sm text-lime-800">
                <li className="flex items-start">
                  <span className="text-lime-600 mr-2">•</span>
                  <span><strong>Run Full Duration:</strong> Don't stop early, even if results look promising</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-600 mr-2">•</span>
                  <span><strong>Monitor Traffic:</strong> Ensure consistent traffic distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-600 mr-2">•</span>
                  <span><strong>Avoid Peeking:</strong> Don't check results until the test is complete</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-600 mr-2">•</span>
                  <span><strong>Statistical Significance:</strong> Wait for p-value &lt; 0.05 before concluding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-600 mr-2">•</span>
                  <span><strong>Practical Significance:</strong> Consider business impact, not just statistical significance</span>
                </li>
              </ul>
            </div>

            <div className="bg-lime-100 p-4 rounded-lg">
              <h4 className="font-semibold text-lime-900 mb-3">Interpretation Guide</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-lime-800">
                <div>
                  <strong className="text-lime-900">Sample Size Too Large?</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Increase minimum detectable effect</li>
                    <li>• Lower confidence level</li>
                    <li>• Reduce statistical power</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-lime-900">Sample Size Too Small?</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Decrease minimum detectable effect</li>
                    <li>• Increase confidence level</li>
                    <li>• Raise statistical power</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-lime-600 py-8">
            Enter baseline conversion rate and minimum detectable effect to calculate sample size
          </div>
        )}
      </div>
    </div>
  );
};

export default AbTestSampleSizeCalculator; 