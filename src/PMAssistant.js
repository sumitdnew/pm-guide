import React, { useState } from 'react';
import { ChevronRight, Calculator } from 'lucide-react';
import FrameworkSimulator from './FrameworkSimulator';
import RecommendationsView from './RecommendationsView';
import { frameworkDatabase, questions } from './data';

const PMAssistant = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({});
  const [recommendations, setRecommendations] = useState(null);
  const [showSimulator, setShowSimulator] = useState(false);
  const [selectedSimulator, setSelectedSimulator] = useState('');

  const generateRecommendations = () => {
    const { stage, type, challenge, timeline, resources } = responses;
    
    let phase = 'discovery';
    if (stage === 'discovery') phase = 'discovery';
    else if (stage === 'early') phase = challenge === 'positioning' ? 'strategy' : 'planning';
    else if (stage === 'growth') phase = 'growth';
    else if (stage === 'mature') phase = 'scale';
    else if (stage === 'idea') phase = 'discovery';

    // Get the frameworks for the phase from the database
    const frameworksData = frameworkDatabase[phase];
    
    let actions = [];
    let priorities = [];
    
    if (challenge === 'understanding') {
      actions = [
        'Conduct 10-15 customer interviews using JTBD framework',
        'Create user personas and journey maps',
        'Analyze current customer behavior data',
        'Survey existing users about pain points'
      ];
      priorities = ['Customer Research', 'Problem Validation', 'Market Analysis'];
    } else if (challenge === 'prioritization') {
      actions = [
        'Score all features using RICE framework',
        'Map features using Kano Model (Basic/Performance/Delight)',
        'Align priorities with OKRs and North Star metric',
        'Create user story map for next release'
      ];
      priorities = ['Feature Scoring', 'Strategic Alignment', 'Roadmap Planning'];
    } else if (challenge === 'growth') {
      actions = [
        'Analyze user cohorts to identify retention patterns',
        'Set up growth experiment pipeline',
        'Implement viral/referral mechanisms',
        'Optimize activation and onboarding flow'
      ];
      priorities = ['Retention Analysis', 'Growth Experiments', 'Viral Mechanisms'];
    } else if (challenge === 'positioning') {
      actions = [
        'Define target segments using segmentation framework',
        'Map competitive landscape and differentiation',
        'Create positioning statement and messaging',
        'Test positioning with target customers'
      ];
      priorities = ['Market Segmentation', 'Competitive Analysis', 'Positioning Testing'];
    } else if (challenge === 'retention') {
      actions = [
        'Analyze user cohorts to identify retention patterns',
        'Implement onboarding improvements',
        'Create engagement campaigns for at-risk users',
        'Build habit-forming product features'
      ];
      priorities = ['Retention Analysis', 'User Engagement', 'Churn Prevention'];
    } else if (challenge === 'monetization') {
      actions = [
        'Test different pricing models with user segments',
        'Implement value-based pricing strategy',
        'Create freemium conversion funnel',
        'Optimize payment and checkout experience'
      ];
      priorities = ['Pricing Strategy', 'Conversion Optimization', 'Revenue Growth'];
    } else if (challenge === 'scaling') {
      actions = [
        'Implement scalable processes and systems',
        'Build cross-functional team structures',
        'Create automated customer success workflows',
        'Establish data-driven decision making frameworks'
      ];
      priorities = ['Process Optimization', 'Team Scaling', 'System Architecture'];
    }

    if (type === 'ai') {
      if (phase === 'discovery') {
        actions.unshift('Research AI adoption barriers in target market');
        actions.push('Validate AI solution vs. traditional approaches');
      } else if (phase === 'development') {
        actions.push('Test AI model accuracy and bias with real users');
        actions.push('Design fallback experiences for AI failures');
      }
    }

    if (timeline === 'immediate') {
      actions = actions.slice(0, 2).map(action => `URGENT: ${action}`);
    }

    setRecommendations({
      phase,
      frameworks: frameworksData, // Pass the entire frameworks object structure
      actions,
      priorities,
      timeline,
      type
    });
  };

  const handleAnswer = (value) => {
    const newResponses = { ...responses, [questions[currentStep].id]: value };
    setResponses(newResponses);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRecommendations();
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setResponses({});
    setRecommendations(null);
  };

  if (showSimulator) {
    return <FrameworkSimulator onBack={() => setShowSimulator(false)} initialSimulator={selectedSimulator} />;
  }

  if (recommendations) {
    return (
      <RecommendationsView 
        recommendations={recommendations}
        onReset={reset}
        onOpenSimulator={(simulatorId) => {
          setSelectedSimulator(simulatorId);
          setShowSimulator(true);
        }}
      />
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Product Management Assistant</h1>
        <p className="text-gray-600">Answer a few questions to get personalized framework recommendations</p>
      </div>

      <div className="mb-8">
        <button
          onClick={() => setShowSimulator(true)}
          className="w-full p-4 bg-green-100 border-2 border-green-200 rounded-lg hover:border-green-400 transition-colors text-left"
        >
          <div className="flex items-center">
            <Calculator className="h-6 w-6 text-green-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-green-900">Open Framework Simulators</h3>
              <p className="text-green-700 text-sm">Practice with all 23 interactive PM frameworks</p>
            </div>
          </div>
        </button>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question {currentStep + 1} of {questions.length}</span>
          <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {questions[currentStep].question}
        </h2>
        <div className="space-y-3">
          {questions[currentStep].options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-800">{option.label}</span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {currentStep > 0 && (
        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">Your Answers:</h3>
          <div className="space-y-1">
            {Object.entries(responses).map(([key, value]) => {
              const question = questions.find(q => q.id === key);
              const option = question?.options.find(o => o.value === value);
              return (
                <div key={key} className="text-sm text-blue-800">
                  <span className="font-medium">{question?.question}</span>
                  <span className="ml-2">{option?.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PMAssistant;