import { Code, Database, Brain, BarChart3, Settings, Cpu } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 80 },
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Database,
    title: "Libraries",
    skills: [
      { name: "Pandas", level: 88 },
      { name: "NumPy", level: 85 },
      { name: "Matplotlib", level: 80 },
      { name: "Seaborn", level: 78 },
      { name: "Scikit-learn", level: 85 },
    ],
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    skills: [
      { name: "Classification", level: 85 },
      { name: "Regression", level: 85 },
      { name: "Clustering", level: 78 },
      { name: "Feature Engineering", level: 82 },
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cpu,
    title: "Deep Learning",
    skills: [
      { name: "Neural Networks (Applied)", level: 70 },
    ],
    color: "from-pink-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Visualization",
    skills: [
      { name: "Power BI", level: 82 },
      { name: "Tableau", level: 78 },
      { name: "Excel", level: 85 },
    ],
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Settings,
    title: "Tools",
    skills: [
      { name: "Streamlit", level: 80 },
      { name: "GitHub", level: 82 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "VS Code", level: 88 },
    ],
    color: "from-green-500 to-teal-500",
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
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} p-2.5 flex items-center justify-center`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                {/* Skills with Progress Bars */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-foreground/90">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-secondary/80 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
