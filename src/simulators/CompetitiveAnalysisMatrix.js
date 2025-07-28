import React, { useState } from 'react';

const CompetitiveAnalysisMatrix = () => {
  const [inputs, setInputs] = useState({
    competitors: ['', '', '', ''],
    features: ['', '', '', '', ''],
    yourProduct: '',
    yourFeatures: ['', '', '', '', '']
  });

  const updateCompetitor = (index, value) => {
    const newCompetitors = [...inputs.competitors];
    newCompetitors[index] = value;
    setInputs(prev => ({...prev, competitors: newCompetitors}));
  };

  const updateFeature = (index, value) => {
    const newFeatures = [...inputs.features];
    newFeatures[index] = value;
    setInputs(prev => ({...prev, features: newFeatures}));
  };

  const updateYourFeature = (index, value) => {
    const newYourFeatures = [...inputs.yourFeatures];
    newYourFeatures[index] = value;
    setInputs(prev => ({...prev, yourFeatures: newYourFeatures}));
  };

  const generateMatrix = () => {
    const { competitors, features, yourProduct, yourFeatures } = inputs;
    const validCompetitors = competitors.filter(c => c.trim() !== '');
    const validFeatures = features.filter(f => f.trim() !== '');
    const validYourFeatures = yourFeatures.filter(f => f.trim() !== '');
    
    if (!yourProduct || validCompetitors.length === 0 || validFeatures.length === 0) return null;
    
    return {
      competitors: validCompetitors,
      features: validFeatures,
      yourFeatures: validYourFeatures
    };
  };

  const getDifferentiationOpportunities = (matrix) => {
    if (!matrix) return [];
    
    const opportunities = [];
    const { features, yourFeatures } = matrix;
    
    // Find features that competitors have but you don't
    features.forEach(feature => {
      if (!yourFeatures.includes(feature)) {
        opportunities.push({
          type: 'gap',
          feature,
          description: `Add ${feature} to match competitors`
        });
      }
    });
    
    // Find your unique features
    yourFeatures.forEach(feature => {
      if (!features.includes(feature)) {
        opportunities.push({
          type: 'advantage',
          feature,
          description: `Leverage ${feature} as competitive advantage`
        });
      }
    });
    
    return opportunities;
  };

  const matrix = generateMatrix();
  const opportunities = getDifferentiationOpportunities(matrix);

  return (
    <div className="bg-slate-50 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Competitive Analysis Matrix</h2>
      
      <div className="bg-slate-100 p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-slate-900 mb-2">About Competitive Analysis Framework</h3>
        <p className="text-slate-800 text-sm mb-3">
          Competitive analysis helps you understand your market position relative to competitors. It identifies gaps, 
          opportunities, and unique advantages that can inform product strategy, positioning, and differentiation efforts.
        </p>
        <a 
          href="https://blog.hubspot.com/marketing/competitive-analysis" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-600 hover:text-slate-800 text-sm font-medium underline"
        >
          Learn more about Competitive Analysis →
        </a>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-800 mb-2">
            Your Product Name
          </label>
          <input
            type="text"
            value={inputs.yourProduct}
            onChange={(e) => setInputs(prev => ({...prev, yourProduct: e.target.value}))}
            placeholder="e.g., MyProduct"
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-800 mb-2">
            Key Features to Compare
          </label>
          <div className="space-y-2">
            {inputs.features.map((feature, index) => (
              <input
                key={index}
                type="text"
                value={feature}
                onChange={(e) => updateFeature(index, e.target.value)}
                placeholder={`Feature ${index + 1} (e.g., Mobile app, API, Analytics)`}
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 text-sm"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-slate-200 mb-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Competitor Information</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Competitors
            </label>
            <div className="space-y-2">
              {inputs.competitors.map((competitor, index) => (
                <input
                  key={index}
                  type="text"
                  value={competitor}
                  onChange={(e) => updateCompetitor(index, e.target.value)}
                  placeholder={`Competitor ${index + 1} name`}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 text-sm"
                />
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Your Product Features
            </label>
            <div className="space-y-2">
              {inputs.yourFeatures.map((feature, index) => (
                <input
                  key={index}
                  type="text"
                  value={feature}
                  onChange={(e) => updateYourFeature(index, e.target.value)}
                  placeholder={`Your feature ${index + 1}`}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 text-sm"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Competitive Analysis Results</h3>
        
        {matrix ? (
          <div className="space-y-6">
            <div className="bg-slate-100 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-3">Analysis Summary</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-600 mb-1">
                    {matrix.competitors.length}
                  </div>
                  <div className="text-slate-700">Competitors Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-600 mb-1">
                    {matrix.features.length}
                  </div>
                  <div className="text-slate-700">Features Compared</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-600 mb-1">
                    {opportunities.length}
                  </div>
                  <div className="text-slate-700">Opportunities Found</div>
                </div>
              </div>
            </div>

            {opportunities.length > 0 && (
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-3">Differentiation Opportunities</h4>
                <div className="space-y-3">
                  {opportunities.map((opportunity, index) => (
                    <div key={index} className={`p-3 rounded-lg ${
                      opportunity.type === 'advantage' 
                        ? 'bg-green-100 border border-green-200' 
                        : 'bg-yellow-100 border border-yellow-200'
                    }`}>
                      <div className="flex items-center mb-1">
                        <span className={`text-sm font-medium ${
                          opportunity.type === 'advantage' 
                            ? 'text-green-800' 
                            : 'text-yellow-800'
                        }`}>
                          {opportunity.type === 'advantage' ? '✅ Advantage' : '⚠️ Gap'}
                        </span>
                      </div>
                      <div className={`text-sm ${
                        opportunity.type === 'advantage' 
                          ? 'text-green-700' 
                          : 'text-yellow-700'
                      }`}>
                        <strong>{opportunity.feature}:</strong> {opportunity.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-slate-100 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-3">Strategic Recommendations</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-800">
                <div>
                  <strong className="text-slate-900">Feature Gaps:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Prioritize must-have features</li>
                    <li>• Consider development timeline</li>
                    <li>• Evaluate market demand</li>
                    <li>• Assess resource requirements</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-slate-900">Competitive Advantages:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Amplify unique features</li>
                    <li>• Build marketing around them</li>
                    <li>• Create switching barriers</li>
                    <li>• Develop ecosystem around them</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-3">Next Steps</h4>
              <ul className="space-y-2 text-sm text-slate-800">
                <li className="flex items-start">
                  <span className="text-slate-600 mr-2">•</span>
                  <span><strong>Conduct deeper research:</strong> Analyze pricing, positioning, and customer reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 mr-2">•</span>
                  <span><strong>Validate assumptions:</strong> Talk to customers about feature importance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 mr-2">•</span>
                  <span><strong>Monitor changes:</strong> Track competitor feature releases and updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 mr-2">•</span>
                  <span><strong>Update regularly:</strong> Revisit analysis quarterly or when launching new features</span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="text-center text-slate-600 py-8">
            Enter your product name, competitors, and features to generate the competitive analysis matrix
          </div>
        )}
      </div>
    </div>
  );
};

export default CompetitiveAnalysisMatrix; 