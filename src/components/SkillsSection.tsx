import { Code, Database, Brain, MessageSquare, Settings, Cloud } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming",
    skills: ["Python", "SQL"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Database,
    title: "Data Analysis",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    skills: ["Linear Regression", "Logistic Regression", "Decision Tree", "Random Forest", "XGBoost", "KNN", "SVM", "Naive Bayes"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "Deep Learning",
    skills: ["Neural Networks", "CNN", "RNN", "LSTM", "TensorFlow", "PyTorch (basic)"],
    color: "from-pink-500 to-red-500",
  },
  {
    icon: MessageSquare,
    title: "NLP",
    skills: ["Text Cleaning", "TF-IDF", "Word2Vec", "Sentiment Analysis"],
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Settings,
    title: "Tools & Platforms",
    skills: ["Streamlit", "Tableau", "Power BI", "Git", "GitHub"],
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Cloud,
    title: "Deployment",
    skills: ["Streamlit Cloud", "Flask", "Basic Cloud Concepts"],
    color: "from-teal-500 to-cyan-500",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Skills & Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Technical <span className="gradient-text">Proficiencies</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit for building end-to-end machine learning solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} p-2.5 flex items-center justify-center`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools Showcase */}
          <div className="mt-16 pt-16 border-t border-border/50">
            <h3 className="text-center text-lg font-semibold mb-8 text-muted-foreground">
              Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Flask", "Power BI"].map((tool) => (
                <div
                  key={tool}
                  className="px-6 py-3 rounded-full bg-card border border-border/50 text-sm font-medium 
                           hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
