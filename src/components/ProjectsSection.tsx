import { Github, ExternalLink, ChartBar, ShieldCheck, TrendingUp, CreditCard, MessageCircle, Image } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: CreditCard,
    title: "Loan Approval Prediction",
    problem: "Predict whether a loan application will be approved based on customer financial data.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    models: ["Logistic Regression", "Random Forest"],
    metrics: "Accuracy: 89%, F1-Score: 0.88",
    impact: "Helps financial institutions reduce risk.",
    color: "from-cyan-500/20 to-blue-500/20",
    accentColor: "text-cyan-400",
  },
  {
    icon: TrendingUp,
    title: "Customer Churn Prediction",
    problem: "Identify customers likely to leave a service.",
    tech: ["Python", "EDA", "ML"],
    models: ["XGBoost", "Random Forest"],
    metrics: "Recall-focused model to reduce churn.",
    impact: "Improves customer retention strategy.",
    color: "from-purple-500/20 to-pink-500/20",
    accentColor: "text-purple-400",
  },
  {
    icon: ChartBar,
    title: "Sales Forecasting",
    problem: "Forecast future sales using historical data.",
    tech: ["Time Series Analysis", "Python"],
    models: ["ARIMA", "Linear Regression"],
    metrics: "Accurate trend prediction",
    impact: "Supports inventory and business planning.",
    color: "from-green-500/20 to-teal-500/20",
    accentColor: "text-green-400",
  },
  {
    icon: ShieldCheck,
    title: "Fraud Detection System",
    problem: "Detect fraudulent transactions.",
    tech: ["Python", "ML"],
    models: ["Isolation Forest", "Logistic Regression"],
    metrics: "High precision fraud detection",
    impact: "Reduces financial fraud risk.",
    color: "from-red-500/20 to-orange-500/20",
    accentColor: "text-red-400",
  },
  {
    icon: MessageCircle,
    title: "Sentiment Analysis (NLP)",
    problem: "Analyze customer reviews sentiment.",
    tech: ["NLP", "TF-IDF"],
    models: ["Naive Bayes", "Logistic Regression"],
    metrics: "Accurate sentiment classification",
    impact: "Improves customer feedback analysis.",
    color: "from-yellow-500/20 to-orange-500/20",
    accentColor: "text-yellow-400",
  },
  {
    icon: Image,
    title: "Image Classification",
    problem: "Classify images into categories.",
    tech: ["CNN", "TensorFlow"],
    models: ["Convolutional Neural Network"],
    metrics: "High accuracy classification",
    impact: "Practical Deep Learning application.",
    color: "from-blue-500/20 to-indigo-500/20",
    accentColor: "text-blue-400",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Real-world machine learning solutions that demonstrate my expertise in data science
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Header with Gradient */}
                <div className={`p-6 bg-gradient-to-br ${project.color}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-card/80 backdrop-blur flex items-center justify-center ${project.accentColor}`}>
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" className="w-8 h-8 rounded-lg bg-card/50 hover:bg-card">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="w-8 h-8 rounded-lg bg-card/50 hover:bg-card">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground">{project.problem}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Models */}
                  <div>
                    <span className="text-xs text-muted-foreground">Models: </span>
                    <span className="text-xs text-foreground">{project.models.join(", ")}</span>
                  </div>

                  {/* Metrics */}
                  <div className="text-xs">
                    <span className={`font-medium ${project.accentColor}`}>{project.metrics}</span>
                  </div>

                  {/* Impact */}
                  <div className="pt-4 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">Impact: </span>
                    <span className="text-sm text-foreground">{project.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10" asChild>
              <a href="https://github.com/aklesh-ds" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
