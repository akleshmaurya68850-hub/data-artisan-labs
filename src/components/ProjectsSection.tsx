import { Github, CreditCard, Activity, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: CreditCard,
    title: "Loan Approval Prediction System",
    problem: "Predict whether a loan application will be approved based on customer financial data.",
    approach: "Data cleaning, EDA, feature engineering, and model comparison to find the best classifier.",
    tools: ["Python", "Scikit-learn", "Streamlit"],
    outcome: "Built a Streamlit web app that predicts loan approval with high accuracy.",
    color: "from-cyan-500/20 to-blue-500/20",
    accentColor: "text-cyan-400",
  },
  {
    icon: Activity,
    title: "Hospital Data Analysis — Lucknow",
    problem: "Analyze hospital data to uncover patterns in patient admissions and resource utilization.",
    approach: "Data cleaning, pivot tables, and interactive dashboards to visualize key hospital metrics.",
    tools: ["Power BI", "Excel"],
    outcome: "Created a comprehensive dashboard highlighting trends in patient data and hospital operations.",
    color: "from-purple-500/20 to-pink-500/20",
    accentColor: "text-purple-400",
  },
  {
    icon: TrendingUp,
    title: "Sales Data Analysis — Excel",
    problem: "Analyze historical sales data to identify trends and top-performing segments.",
    approach: "Data aggregation, charting, and conditional formatting for visual storytelling.",
    tools: ["Excel"],
    outcome: "Delivered actionable insights on revenue trends and product performance.",
    color: "from-green-500/20 to-teal-500/20",
    accentColor: "text-green-400",
  },
  {
    icon: BarChart3,
    title: "Sales Data Analysis — Tableau",
    problem: "Visualize and explore sales data interactively for business decision support.",
    approach: "Connected data sources, built calculated fields, and designed interactive dashboards.",
    tools: ["Tableau"],
    outcome: "Published an interactive Tableau dashboard for stakeholder exploration.",
    color: "from-orange-500/20 to-yellow-500/20",
    accentColor: "text-orange-400",
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
              Real-world data science projects demonstrating end-to-end problem solving
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Header with Gradient */}
                <div className={`p-6 bg-gradient-to-br ${project.color}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-card/80 backdrop-blur flex items-center justify-center ${project.accentColor}`}>
                      <project.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Problem</span>
                    <p className="text-sm text-foreground/80 mt-1">{project.problem}</p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Approach</span>
                    <p className="text-sm text-foreground/80 mt-1">{project.approach}</p>
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary border border-primary/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Outcome */}
                  <div className="pt-4 border-t border-border/50">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Outcome</span>
                    <p className="text-sm text-foreground/80 mt-1">{project.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10" asChild>
              <a href="https://github.com/akleshmaurya68850-hub" target="_blank" rel="noopener noreferrer">
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
