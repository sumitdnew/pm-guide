# 🚀 AI PM Framework Guide

A comprehensive, interactive web application designed to help Product Managers learn and apply essential product management frameworks through hands-on simulators and real-world case studies.

![React](https://img.shields.io/badge/React-18.0.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Table of Contents

- [Features](#-features)
- [Frameworks Included](#-frameworks-included)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Case Studies](#-case-studies)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🎯 Interactive Simulators
- **20+ PM Framework Simulators** with real-time calculations
- **Phase-based Filtering** to find frameworks by product stage
- **Professional UI** with responsive design
- **Real-time Results** with actionable insights

### 📚 Real-World Case Studies
- **15+ Company Case Studies** from Intercom, Spotify, Airbnb, Facebook, and more
- **Detailed Analysis** of challenges, approaches, and results
- **Actionable Lessons** you can apply to your own work
- **External Links** to full case studies

### 🎨 User Experience
- **Intuitive Navigation** between frameworks and simulators
- **Responsive Design** that works on all devices
- **Modern UI** with Tailwind CSS
- **Fast Performance** with optimized React components

## 🎯 Frameworks Included

### **Prioritization & Planning**
- **RICE Prioritization** - Score features by Reach, Impact, Confidence, Effort
- **ICE Scoring** - Quick evaluation with Impact, Confidence, Ease
- **MoSCoW Method** - Must Have, Should Have, Could Have, Won't Have
- **OKRs** - Objectives and Key Results framework

### **Product-Market Fit & Growth**
- **Product-Market Fit (PMF)** - Sean Ellis survey methodology
- **AARRR Metrics** - Acquisition, Activation, Retention, Revenue, Referral
- **North Star Metrics** - Single metric that drives product decisions
- **Growth Hacking** - Systematic approach to rapid growth

### **Customer Understanding**
- **Jobs-to-be-Done (JTBD)** - Understand customer motivations
- **4 Forces of Progress** - Clayton Christensen's framework
- **Kano Model** - Customer satisfaction vs feature presence
- **User Persona Generator** - Create detailed user profiles

### **Analysis & Strategy**
- **SWOT Analysis** - Strengths, Weaknesses, Opportunities, Threats
- **Competitive Analysis Matrix** - Evaluate competitive landscape
- **Value Proposition Canvas** - Map customer jobs, pains, and gains
- **Design Thinking** - Human-centered innovation approach

### **Business Metrics**
- **Customer Lifetime Value (CLV)** - Calculate long-term customer value
- **Cohort Analysis** - Track user behavior over time
- **A/B Test Sample Size** - Determine statistical significance
- **Market Size Calculator** - TAM, SAM, SOM analysis
- **Pricing Strategy** - Optimize pricing for maximum revenue

### **Development & Go-to-Market**
- **Customer Development** - Validate assumptions with customers
- **Go-to-Market Strategy** - Comprehensive launch planning

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18.0.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sumitdnew/pm-guide.git
   cd pm-guide
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 📖 Usage

### **Main Interface**
1. **Start with the PM Assistant** - Answer questions about your product stage and goals
2. **Get Personalized Recommendations** - Receive framework suggestions based on your needs
3. **Try Simulators** - Click "Try Simulator" to open interactive tools
4. **Explore All Frameworks** - Use the "Open Framework Simulators" button

### **Framework Simulators**
- **Input Data** - Fill in the required fields for each framework
- **Get Results** - View calculated scores, insights, and recommendations
- **Learn More** - Click external links for detailed framework explanations
- **View Case Studies** - See real-world examples from successful companies

### **Case Studies**
- **Browse by Framework** - Each simulator has relevant case studies
- **Learn from Real Examples** - Understand how companies like Intercom, Spotify, and Airbnb used these frameworks
- **Apply Lessons** - Use the insights in your own product work

## 📚 Case Studies

### **Featured Companies**
- **Intercom** - RICE Prioritization for feature roadmap
- **Spotify** - ICE Scoring for rapid feature evaluation
- **Airbnb** - Jobs-to-be-Done for customer understanding
- **Facebook** - North Star Metrics (Daily Active Users)
- **Superhuman** - Product-Market Fit survey methodology
- **Dropbox** - AARRR Metrics for growth optimization
- **Apple** - Kano Model for feature categorization
- **Google** - OKRs for team alignment
- **LinkedIn** - Growth Hacking for viral expansion
- **Zappos** - Customer Development for validation
- **IDEO** - Design Thinking for innovation
- **Tesla** - Value Proposition Canvas for positioning
- **Slack** - Go-to-Market Strategy for market entry
- **Netflix** - SWOT Analysis for strategic planning
- **Microsoft** - MoSCoW Method for Azure development

## 🛠 Technology Stack

- **Frontend**: React 18.0.0
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Deployment**: Render (Static Site)

## 📁 Project Structure

```
pm-guide/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   └── CaseStudyViewer.js
│   ├── simulators/
│   │   ├── RiceCalculator.js
│   │   ├── IceCalculator.js
│   │   ├── JtbdGenerator.js
│   │   ├── ForcesAnalyzer.js
│   │   ├── KanoAnalyzer.js
│   │   ├── PmfMeasurement.js
│   │   ├── SwotAnalysis.js
│   │   ├── AarrrMetrics.js
│   │   ├── OkrGenerator.js
│   │   ├── NorthStarFramework.js
│   │   ├── MoscowMethod.js
│   │   ├── UserPersonaGenerator.js
│   │   ├── CohortAnalysisCalculator.js
│   │   ├── AbTestSampleSizeCalculator.js
│   │   ├── CustomerLifetimeValueCalculator.js
│   │   ├── CompetitiveAnalysisMatrix.js
│   │   ├── PricingStrategyCalculator.js
│   │   ├── MarketSizeCalculator.js
│   │   ├── CustomerDevelopment.js
│   │   ├── DesignThinking.js
│   │   ├── ValuePropositionCanvas.js
│   │   ├── GoToMarketStrategy.js
│   │   └── GrowthHacking.js
│   ├── App.js
│   ├── PMAssistant.js
│   ├── FrameworkSimulator.js
│   ├── RecommendationsView.js
│   ├── data.js
│   ├── index.js
│   └── index.css
├── package.json
├── render.yaml
└── README.md
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### **Adding New Frameworks**
1. Create a new simulator component in `src/simulators/`
2. Add framework configuration to `src/data.js`
3. Update `FrameworkSimulator.js` to include the new simulator
4. Add case studies if available

### **Improving Case Studies**
1. Research real company examples
2. Add detailed case studies to `src/data.js`
3. Include challenges, approaches, results, and lessons

### **UI/UX Improvements**
1. Enhance the visual design
2. Improve user experience
3. Add new features like save/load functionality

### **Bug Reports & Feature Requests**
1. Open an issue on GitHub
2. Describe the problem or feature request
3. Provide steps to reproduce (for bugs)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Product Management Community** - For inspiration and feedback
- **Case Study Companies** - For sharing their success stories
- **Open Source Contributors** - For the amazing tools and libraries
- **React & Tailwind CSS Teams** - For the excellent frameworks

## 📞 Contact

- **GitHub**: [@sumitdnew](https://github.com/sumitdnew)
- **Repository**: [https://github.com/sumitdnew/pm-guide](https://github.com/sumitdnew/pm-guide)

---

**Made with ❤️ for Product Managers everywhere**

*Empowering PMs to make better product decisions through interactive learning and real-world examples.*
