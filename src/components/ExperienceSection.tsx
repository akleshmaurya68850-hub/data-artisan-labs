import { Briefcase, Calendar, CheckCircle } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      role: "Data Science Trainee / Self Projects",
      period: "Present",
      description: "Building end-to-end ML projects and gaining hands-on experience",
      achievements: [
        "Built end-to-end ML projects from data collection to deployment",
        "Performed comprehensive EDA and feature engineering",
        "Deployed models using Streamlit for interactive dashboards",
        "Worked on real-world datasets from Kaggle and UCI",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Career</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20 pb-12">
                {/* Timeline Dot */}
                <div className="absolute left-6 -translate-x-1/2 w-5 h-5 rounded-full bg-primary glow-primary" />

                {/* Experience Card */}
                <div className="glass-card rounded-xl p-6">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
