import React, { useState } from 'react';

const UserPersonaGenerator = () => {
  const [inputs, setInputs] = useState({
    name: '',
    age: '',
    role: '',
    company: '',
    goals: '',
    painPoints: '',
    behaviors: '',
    motivations: '',
    frustrations: '',
    techSavvy: '',
    decisionMaking: ''
  });

  const generatePersona = () => {
    const { name, age, role, company, goals, painPoints, behaviors, motivations, frustrations, techSavvy, decisionMaking } = inputs;
    
    if (!name || !role || !goals) return null;
    
    return {
      name,
      age,
      role,
      company,
      goals: goals.split('\n').filter(goal => goal.trim()),
      painPoints: painPoints.split('\n').filter(point => point.trim()),
      behaviors: behaviors.split('\n').filter(behavior => behavior.trim()),
      motivations: motivations.split('\n').filter(motivation => motivation.trim()),
      frustrations: frustrations.split('\n').filter(frustration => frustration.trim()),
      techSavvy,
      decisionMaking
    };
  };

  const persona = generatePersona();

  return (
    <div className="bg-pink-50 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-pink-900 mb-6">User Persona Generator</h2>
      
      <div className="bg-pink-100 p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-pink-900 mb-2">About User Personas Framework</h3>
        <p className="text-pink-800 text-sm mb-3">
          User personas are detailed, semi-fictional representations of your ideal customers based on real data and research. 
          They help teams understand user needs, motivations, and behaviors, enabling better product decisions and user-centered design.
        </p>
        <a 
          href="https://www.interaction-design.org/literature/topics/personas" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-800 text-sm font-medium underline"
        >
          Learn more about User Personas →
        </a>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-pink-800 mb-2">
            Persona Name
          </label>
          <input
            type="text"
            value={inputs.name}
            onChange={(e) => setInputs(prev => ({...prev, name: e.target.value}))}
            placeholder="e.g., Sarah the Startup Founder"
            className="w-full p-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-pink-800 mb-2">
            Age Range
          </label>
          <input
            type="text"
            value={inputs.age}
            onChange={(e) => setInputs(prev => ({...prev, age: e.target.value}))}
            placeholder="e.g., 28-35 years old"
            className="w-full p-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-pink-800 mb-2">
            Job Role/Title
          </label>
          <input
            type="text"
            value={inputs.role}
            onChange={(e) => setInputs(prev => ({...prev, role: e.target.value}))}
            placeholder="e.g., Product Manager, Startup Founder"
            className="w-full p-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-pink-800 mb-2">
            Company/Organization
          </label>
          <input
            type="text"
            value={inputs.company}
            onChange={(e) => setInputs(prev => ({...prev, company: e.target.value}))}
            placeholder="e.g., Tech startup, Enterprise company"
            className="w-full p-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500"
          />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-pink-800 mb-2">
            Goals & Objectives
          </label>
          <textarea
            value={inputs.goals}
            onChange={(e) => setInputs(prev => ({...prev, goals: e.target.value}))}
            placeholder="e.g., Increase team productivity&#10;Reduce time spent on manual tasks&#10;Improve customer satisfaction"
            className="w-full p-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 min-h-[100px]"
          />
          <p className="text-xs text-pink-600 mt-1">Enter each goal on a new line</p>
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-pink-800 mb-2">
            Pain Points & Challenges
          </label>
          <textarea
            value={inputs.painPoints}
            onChange={(e) => setInputs(prev => ({...prev, painPoints: e.target.value}))}
            placeholder="e.g., Too many tools to manage&#10;Lack of real-time collaboration&#10;Difficulty tracking progress"
            className="w-full p-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 min-h-[100px]"
          />
          <p className="text-xs text-pink-600 mt-1">Enter each pain point on a new line</p>
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-pink-800 mb-2">
            Behaviors & Habits
          </label>
          <textarea
            value={inputs.behaviors}
            onChange={(e) => setInputs(prev => ({...prev, behaviors: e.target.value}))}
            placeholder="e.g., Checks email first thing in morning&#10;Prefers mobile apps over desktop&#10;Researches thoroughly before decisions"
            className="w-full p-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 min-h-[100px]"
          />
          <p className="text-xs text-pink-600 mt-1">Enter each behavior on a new line</p>
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-pink-800 mb-2">
            Motivations & Drivers
          </label>
          <textarea
            value={inputs.motivations}
            onChange={(e) => setInputs(prev => ({...prev, motivations: e.target.value}))}
            placeholder="e.g., Career advancement&#10;Work-life balance&#10;Making a positive impact"
            className="w-full p-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 min-h-[100px]"
          />
          <p className="text-xs text-pink-600 mt-1">Enter each motivation on a new line</p>
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-pink-800 mb-2">
            Frustrations & Irritations
          </label>
          <textarea
            value={inputs.frustrations}
            onChange={(e) => setInputs(prev => ({...prev, frustrations: e.target.value}))}
            placeholder="e.g., Complex interfaces&#10;Slow loading times&#10;Poor customer support"
            className="w-full p-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 min-h-[100px]"
          />
          <p className="text-xs text-pink-600 mt-1">Enter each frustration on a new line</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-pink-800 mb-2">
            Tech Savviness
          </label>
          <select
            value={inputs.techSavvy}
            onChange={(e) => setInputs(prev => ({...prev, techSavvy: e.target.value}))}
            className="w-full p-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Select level...</option>
            <option value="novice">Novice - Basic computer skills</option>
            <option value="intermediate">Intermediate - Comfortable with common tools</option>
            <option value="advanced">Advanced - Tech-savvy power user</option>
            <option value="expert">Expert - Technical professional</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-pink-800 mb-2">
            Decision Making Style
          </label>
          <select
            value={inputs.decisionMaking}
            onChange={(e) => setInputs(prev => ({...prev, decisionMaking: e.target.value}))}
            className="w-full p-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Select style...</option>
            <option value="analytical">Analytical - Data-driven decisions</option>
            <option value="intuitive">Intuitive - Gut feeling based</option>
            <option value="collaborative">Collaborative - Team consensus</option>
            <option value="authoritative">Authoritative - Top-down decisions</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-pink-200">
        <h3 className="text-lg font-semibold text-pink-900 mb-4">Generated User Persona</h3>
        
        {persona ? (
          <div className="space-y-6">
            <div className="bg-pink-100 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center text-pink-800 font-bold text-lg mr-3">
                  {persona.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-pink-900">{persona.name}</h4>
                  <p className="text-pink-700">{persona.role} • {persona.company}</p>
                  {persona.age && <p className="text-pink-600 text-sm">{persona.age}</p>}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">Goals & Objectives</h5>
                <ul className="space-y-1">
                  {persona.goals.map((goal, index) => (
                    <li key={index} className="text-green-700 text-sm">• {goal}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold text-red-800 mb-2">Pain Points</h5>
                <ul className="space-y-1">
                  {persona.painPoints.map((point, index) => (
                    <li key={index} className="text-red-700 text-sm">• {point}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">Behaviors</h5>
                <ul className="space-y-1">
                  {persona.behaviors.map((behavior, index) => (
                    <li key={index} className="text-blue-700 text-sm">• {behavior}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">Motivations</h5>
                <ul className="space-y-1">
                  {persona.motivations.map((motivation, index) => (
                    <li key={index} className="text-purple-700 text-sm">• {motivation}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h5 className="font-semibold text-orange-800 mb-2">Frustrations</h5>
              <ul className="space-y-1">
                {persona.frustrations.map((frustration, index) => (
                  <li key={index} className="text-orange-700 text-sm">• {frustration}</li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Tech Savviness</h5>
                <p className="text-gray-700 capitalize">{persona.techSavvy}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Decision Making</h5>
                <p className="text-gray-700 capitalize">{persona.decisionMaking}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-pink-600 py-8">
            Fill in the basic information above to generate your user persona
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPersonaGenerator; 