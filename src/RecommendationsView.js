import React from 'react';
import { Target, AlertCircle, Lightbulb, CheckCircle, Rocket, Zap, Calculator, ChevronRight, ExternalLink, BookOpen, FileText, Settings, Code, Users } from 'lucide-react';

// Mapping between framework names in database and simulator IDs
const frameworkToSimulatorMap = {
  'RICE Prioritization': 'rice',
  'ICE Scoring': 'ice',
  'Jobs-to-be-Done (JTBD)': 'jtbd',
  '4 Forces of Progress': 'forces',
  'Kano Model': 'kano',
  'Sean Ellis PMF Survey': 'pmf',
  'SWOT Analysis': 'swot',
  'AARRR Metrics': 'aarrr',
  'OKRs': 'okr',
  'North Star Metrics': 'northstar',
  'MoSCoW Method': 'moscow',
  'Cohort Analysis': 'cohort',
  'Customer Lifetime Value': 'clv',
  'A/B Testing Framework': 'abtest',
  'User Personas': 'persona',
  'Competitive Analysis': 'competitive',
  'Pricing Strategy': 'pricing',
  'Market Size Analysis': 'marketsize',
  'Customer Development': 'customerdev',
  'Design Thinking': 'designthinking',
  'Value Proposition Canvas': 'valueprop',
  'Go-to-Market Strategy': 'gtm',
  'Growth Hacking': 'growthhacking'
};

const RecommendationsView = ({ recommendations, onReset, onOpenSimulator }) => {
  // Get icon for resource type
  const getResourceIcon = (type) => {
    switch (type) {
      case 'guide': return <BookOpen className="h-4 w-4" />;
      case 'article': return <FileText className="h-4 w-4" />;
      case 'tool': return <Settings className="h-4 w-4" />;
      case 'template': return <FileText className="h-4 w-4" />;
      case 'book': return <BookOpen className="h-4 w-4" />;
      case 'course': return <Users className="h-4 w-4" />;
      case 'examples': return <Code className="h-4 w-4" />;
      case 'presentation': return <FileText className="h-4 w-4" />;
      case 'framework': return <Settings className="h-4 w-4" />;
      default: return <ExternalLink className="h-4 w-4" />;
    }
  };

  // Get color for resource type
  const getResourceColor = (type) => {
    switch (type) {
      case 'guide': return 'text-blue-600 bg-blue-50 border-blue-200 hover:bg-blue-100';
      case 'article': return 'text-green-600 bg-green-50 border-green-200 hover:bg-green-100';
      case 'tool': return 'text-purple-600 bg-purple-50 border-purple-200 hover:bg-purple-100';
      case 'template': return 'text-orange-600 bg-orange-50 border-orange-200 hover:bg-orange-100';
      case 'book': return 'text-indigo-600 bg-indigo-50 border-indigo-200 hover:bg-indigo-100';
      case 'course': return 'text-pink-600 bg-pink-50 border-pink-200 hover:bg-pink-100';
      case 'examples': return 'text-teal-600 bg-teal-50 border-teal-200 hover:bg-teal-100';
      case 'presentation': return 'text-red-600 bg-red-50 border-red-200 hover:bg-red-100';
      case 'framework': return 'text-yellow-600 bg-yellow-50 border-yellow-200 hover:bg-yellow-100';
      default: return 'text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-100';
    }
  };

  // Render a single framework card
  const renderFrameworkCard = (framework, index) => {
    // Handle if framework is just a string
    if (typeof framework === 'string') {
      return (
        <div key={index} className="bg-white rounded-lg border border-purple-200 p-4">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 mr-2 text-purple-600" />
            <span className="text-purple-700 font-medium">{framework}</span>
          </div>
        </div>
      );
    }

    // Check if this framework has a simulator
    const simulatorId = frameworkToSimulatorMap[framework.name];
    const hasSimulator = simulatorId !== undefined;

    // Handle framework object with resources
    return (
      <div key={index} className="bg-white rounded-lg border border-purple-200 p-4">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-lg font-semibold text-purple-900">{framework.name}</h4>
              {hasSimulator && (
                <button
                  onClick={() => onOpenSimulator(simulatorId)}
                  className="flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors"
                >
                  <Calculator className="h-4 w-4 mr-1" />
                  Try Simulator
                </button>
              )}
            </div>
            <p className="text-purple-700 mb-2">{framework.description}</p>
            <p className="text-sm text-purple-600 font-medium">
              <span className="text-purple-500">Best for:</span> {framework.useCase}
            </p>
          </div>
          
          {/* Learning Resources */}
          {framework.resources && framework.resources.length > 0 && (
            <div className="lg:w-80">
              <h5 className="text-sm font-semibold text-purple-700 mb-3">Learning Resources:</h5>
              <div className="space-y-2">
                {framework.resources.map((resource, resourceIndex) => (
                  <a
                    key={resourceIndex}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors ${getResourceColor(resource.type)}`}
                  >
                    {getResourceIcon(resource.type)}
                    <span className="text-sm font-medium flex-1">{resource.title}</span>
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Personalized PM Action Plan</h1>
        <p className="text-gray-600">Based on your responses, here's what you should focus on:</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <div className="flex items-center mb-4">
            <Target className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-blue-900">Current Phase</h2>
          </div>
          <div className="text-2xl font-bold text-blue-800 capitalize mb-2">
            {recommendations.phase}
          </div>
          <p className="text-blue-700">
            {recommendations.phase === 'discovery' && 'Focus on understanding customer problems and validating opportunities'}
            {recommendations.phase === 'strategy' && 'Define your market position and differentiation strategy'}
            {recommendations.phase === 'planning' && 'Prioritize features and create execution roadmaps'}
            {recommendations.phase === 'development' && 'Build and iterate based on customer feedback'}
            {recommendations.phase === 'launch' && 'Execute go-to-market strategy and acquire first customers'}
            {recommendations.phase === 'growth' && 'Scale user base and optimize key metrics'}
            {recommendations.phase === 'scale' && 'Expand into new markets and build platform advantages'}
          </p>
        </div>

        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
          <div className="flex items-center mb-4">
            <AlertCircle className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-xl font-semibold text-green-900">Top Priorities</h2>
          </div>
          <div className="space-y-2">
            {recommendations.priorities.map((priority, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {index + 1}
                </div>
                <span className="text-green-800 font-medium">{priority}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-purple-50 rounded-lg p-6 border border-purple-200">
        <div className="flex items-center mb-6">
          <Lightbulb className="h-6 w-6 text-purple-600 mr-2" />
          <h2 className="text-xl font-semibold text-purple-900">Recommended Frameworks</h2>
        </div>
        
        {/* Primary Frameworks */}
        {recommendations.frameworks.primary && recommendations.frameworks.primary.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold text-purple-800 mb-4 text-lg">🎯 Primary Frameworks:</h3>
            <div className="space-y-4">
              {recommendations.frameworks.primary.map((framework, index) => 
                renderFrameworkCard(framework, index)
              )}
            </div>
          </div>
        )}

        {/* Secondary and Advanced Frameworks */}
        <div className="space-y-6">
          {recommendations.frameworks.secondary && recommendations.frameworks.secondary.length > 0 && (
            <div>
              <h3 className="font-semibold text-purple-800 mb-4 text-lg">🔧 Supporting Frameworks:</h3>
              <div className="space-y-4">
                {recommendations.frameworks.secondary.map((framework, index) => 
                  renderFrameworkCard(framework, index)
                )}
              </div>
            </div>
          )}
          
          {recommendations.frameworks.advanced && recommendations.frameworks.advanced.length > 0 && (
            <div>
              <h3 className="font-semibold text-purple-800 mb-4 text-lg">⚡ Advanced Frameworks:</h3>
              <div className="space-y-4">
                {recommendations.frameworks.advanced.map((framework, index) => 
                  renderFrameworkCard(framework, index)
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 bg-orange-50 rounded-lg p-6 border border-orange-200">
        <div className="flex items-center mb-4">
          <CheckCircle className="h-6 w-6 text-orange-600 mr-2" />
          <h2 className="text-xl font-semibold text-orange-900">Immediate Action Items</h2>
        </div>
        <div className="space-y-3">
          {recommendations.actions.map((action, index) => (
            <div key={index} className="flex items-start">
              <input 
                type="checkbox" 
                className="mt-1 mr-3 h-4 w-4 text-orange-600 rounded"
              />
              <span className="text-orange-800">{action}</span>
            </div>
          ))}
        </div>
      </div>

      {recommendations.frameworks.tools && recommendations.frameworks.tools.length > 0 && (
        <div className="mt-8 bg-indigo-50 rounded-lg p-6 border border-indigo-200">
          <div className="flex items-center mb-4">
            <Rocket className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold text-indigo-900">Recommended AI Tools</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {recommendations.frameworks.tools.map((tool, index) => (
              <div key={index} className="flex items-center p-3 bg-white rounded-lg border border-indigo-200">
                <Zap className="h-4 w-4 text-indigo-600 mr-2" />
                <span className="text-indigo-800 text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 text-center space-x-4">
        <button
          onClick={onReset}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get New Recommendations
        </button>
        <button
          onClick={() => onOpenSimulator('')}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          <Calculator className="h-5 w-5 inline mr-2" />
          Open Framework Simulator
        </button>
      </div>
    </div>
  );
};

export default RecommendationsView;