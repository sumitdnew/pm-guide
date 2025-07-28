import React, { useState } from 'react';
import { Calculator, FileText, GitBranch, Star, BarChart3, Compass, Rocket, Target, CheckCircle, Filter, Users, DollarSign, Heart, TrendingUp } from 'lucide-react';
import { simulatorConfigs, caseStudies } from './data';
import CaseStudyViewer from './components/CaseStudyViewer';
import RiceCalculator from './simulators/RiceCalculator';
import IceCalculator from './simulators/IceCalculator';
import JtbdGenerator from './simulators/JtbdGenerator';
import ForcesAnalyzer from './simulators/ForcesAnalyzer';
import KanoAnalyzer from './simulators/KanoAnalyzer';
import PmfMeasurement from './simulators/PmfMeasurement';
import SwotAnalysis from './simulators/SwotAnalysis';
import AarrrMetrics from './simulators/AarrrMetrics';
import OkrGenerator from './simulators/OkrGenerator';
import NorthStarFramework from './simulators/NorthStarFramework';
import MoscowMethod from './simulators/MoscowMethod';
import UserPersonaGenerator from './simulators/UserPersonaGenerator';
import CohortAnalysisCalculator from './simulators/CohortAnalysisCalculator';
import AbTestSampleSizeCalculator from './simulators/AbTestSampleSizeCalculator';
import CustomerLifetimeValueCalculator from './simulators/CustomerLifetimeValueCalculator';
import CompetitiveAnalysisMatrix from './simulators/CompetitiveAnalysisMatrix';
import PricingStrategyCalculator from './simulators/PricingStrategyCalculator';
import MarketSizeCalculator from './simulators/MarketSizeCalculator';
import CustomerDevelopment from './simulators/CustomerDevelopment';
import DesignThinking from './simulators/DesignThinking';
import ValuePropositionCanvas from './simulators/ValuePropositionCanvas';
import GoToMarketStrategy from './simulators/GoToMarketStrategy';
import GrowthHacking from './simulators/GrowthHacking';

const FrameworkSimulator = ({ onBack, initialSimulator = '' }) => {
  const [simulatorType, setSimulatorType] = useState(initialSimulator);
  const [selectedPhase, setSelectedPhase] = useState('all');
  const [showCaseStudies, setShowCaseStudies] = useState(false);
  const [currentCaseStudyFramework, setCurrentCaseStudyFramework] = useState('');

  const phases = [
    { value: 'all', label: 'All Phases' },
    { value: 'discovery', label: 'Discovery & Validation' },
    { value: 'strategy', label: 'Strategy & Positioning' },
    { value: 'planning', label: 'Planning & Prioritization' },
    { value: 'development', label: 'Development & Building' },
    { value: 'launch', label: 'Launch & Go-to-Market' },
    { value: 'growth', label: 'Growth & Optimization' },
    { value: 'scale', label: 'Scale & Expansion' }
  ];

  const filteredConfigs = selectedPhase === 'all' 
    ? simulatorConfigs 
    : simulatorConfigs.filter(config => config.phases.includes(selectedPhase));

  const handleViewCaseStudies = (frameworkId) => {
    setCurrentCaseStudyFramework(frameworkId);
    setShowCaseStudies(true);
  };

  const handleBackFromCaseStudies = () => {
    setShowCaseStudies(false);
    setCurrentCaseStudyFramework('');
  };

  const renderSimulator = () => {
    switch (simulatorType) {
      case 'rice':
        return <RiceCalculator onViewCaseStudies={handleViewCaseStudies} />;
      case 'ice':
        return <IceCalculator onViewCaseStudies={handleViewCaseStudies} />;
      case 'jtbd':
        return <JtbdGenerator onViewCaseStudies={handleViewCaseStudies} />;
      case 'forces':
        return <ForcesAnalyzer onViewCaseStudies={handleViewCaseStudies} />;
      case 'kano':
        return <KanoAnalyzer onViewCaseStudies={handleViewCaseStudies} />;
      case 'pmf':
        return <PmfMeasurement onViewCaseStudies={handleViewCaseStudies} />;
      case 'swot':
        return <SwotAnalysis onViewCaseStudies={handleViewCaseStudies} />;
      case 'aarrr':
        return <AarrrMetrics onViewCaseStudies={handleViewCaseStudies} />;
      case 'okr':
        return <OkrGenerator onViewCaseStudies={handleViewCaseStudies} />;
      case 'northstar':
        return <NorthStarFramework onViewCaseStudies={handleViewCaseStudies} />;
      case 'moscow':
        return <MoscowMethod onViewCaseStudies={handleViewCaseStudies} />;
      case 'persona':
        return <UserPersonaGenerator onViewCaseStudies={handleViewCaseStudies} />;
      case 'cohort':
        return <CohortAnalysisCalculator onViewCaseStudies={handleViewCaseStudies} />;
      case 'abtest':
        return <AbTestSampleSizeCalculator onViewCaseStudies={handleViewCaseStudies} />;
      case 'clv':
        return <CustomerLifetimeValueCalculator onViewCaseStudies={handleViewCaseStudies} />;
      case 'competitive':
        return <CompetitiveAnalysisMatrix onViewCaseStudies={handleViewCaseStudies} />;
      case 'pricing':
        return <PricingStrategyCalculator onViewCaseStudies={handleViewCaseStudies} />;
      case 'marketsize':
        return <MarketSizeCalculator onViewCaseStudies={handleViewCaseStudies} />;
      case 'customerdev':
        return <CustomerDevelopment onViewCaseStudies={handleViewCaseStudies} />;
      case 'designthinking':
        return <DesignThinking onViewCaseStudies={handleViewCaseStudies} />;
      case 'valueprop':
        return <ValuePropositionCanvas onViewCaseStudies={handleViewCaseStudies} />;
      case 'gtm':
        return <GoToMarketStrategy onViewCaseStudies={handleViewCaseStudies} />;
      case 'growthhacking':
        return <GrowthHacking onViewCaseStudies={handleViewCaseStudies} />;
      default:
        return null;
    }
  };

  const getIconComponent = (iconName) => {
    const iconMap = {
      Calculator,
      FileText,
      GitBranch,
      Star,
      BarChart3,
      Compass,
      Rocket,
      Target,
      CheckCircle,
      Users,
      DollarSign,
      Heart,
      TrendingUp
    };
    return iconMap[iconName] || Calculator;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {showCaseStudies ? (
        <CaseStudyViewer 
          frameworkId={currentCaseStudyFramework} 
          onBack={handleBackFromCaseStudies} 
        />
      ) : (
        <>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Interactive Framework Simulator</h1>
            <p className="text-gray-600">Practice PM frameworks with hands-on tools and calculators</p>
          </div>

          {!simulatorType && (
        <>
          {/* Filter Section */}
          <div className="mb-6">
            <div className="flex items-center justify-center mb-4">
              <Filter className="h-5 w-5 text-gray-600 mr-2" />
              <span className="text-gray-700 font-medium">Filter by Product Phase:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {phases.map((phase) => (
                <button
                  key={phase.value}
                  onClick={() => setSelectedPhase(phase.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedPhase === phase.value
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {phase.label}
                </button>
              ))}
            </div>
            <div className="text-center mt-3">
              <span className="text-sm text-gray-600">
                Showing {filteredConfigs.length} of {simulatorConfigs.length} frameworks
              </span>
            </div>
          </div>

          {/* Frameworks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConfigs.map((config) => {
              const IconComponent = getIconComponent(config.icon);
              
              return (
                <button
                  key={config.id}
                  onClick={() => setSimulatorType(config.id)}
                  className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors text-left"
                >
                  <div className="flex items-center mb-3">
                    <IconComponent className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{config.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{config.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {config.phases.map((phase) => (
                      <span
                        key={phase}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        {phases.find(p => p.value === phase)?.label.split(' ')[0]}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {filteredConfigs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No frameworks found for the selected phase.</p>
              <button
                onClick={() => setSelectedPhase('all')}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Show all frameworks
              </button>
            </div>
          )}
        </>
      )}

          {simulatorType && renderSimulator()}

          <div className="mt-8 text-center space-x-4">
            {simulatorType && (
              <button
                onClick={() => setSimulatorType('')}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Back to Simulators
              </button>
            )}
            
            <button
              onClick={onBack}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Framework Guide
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FrameworkSimulator;