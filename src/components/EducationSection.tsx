import { GraduationCap, Award } from "lucide-react";

export const EducationSection = () => {
  const certifications = [
    "Data Science with Python",
    "Machine Learning Certification",
    "Deep Learning Fundamentals",
  ];

  return (
    <section className="py-24 relative">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Background</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <div className="glass-card rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-sm text-muted-foreground">Academic Background</p>
                </div>
              </div>

              <div className="gradient-border rounded-lg p-4 bg-card">
                <h4 className="font-semibold mb-1">Bachelor's Degree</h4>
                <p className="text-sm text-muted-foreground">
                  Relevant coursework in Mathematics, Statistics, and Computer Science
                </p>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="glass-card rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Certifications</h3>
                  <p className="text-sm text-muted-foreground">Professional Credentials</p>
                </div>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50 
                             hover:border-primary/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                      {index + 1}
                    </div>
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
