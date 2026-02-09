import { User, Target, Lightbulb } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Passionate <span className="gradient-text">Data Scientist</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a Data Scientist and Machine Learning Engineer with ongoing internship experience at{" "}
                <span className="text-foreground font-medium">Hanumant Technology Private Limited</span>.
                I specialize in data analysis, machine learning model development, and end-to-end ML deployment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I have hands-on experience working with{" "}
                <span className="text-foreground font-medium">Python, SQL, and analytics tools</span>{" "}
                to solve real-world business problems.
              </p>

              {/* Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="glass-card p-4 rounded-xl text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">Problem Solver</h4>
                  <p className="text-sm text-muted-foreground mt-1">Data-driven decisions</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">Goal Oriented</h4>
                  <p className="text-sm text-muted-foreground mt-1">Result-focused approach</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">Innovator</h4>
                  <p className="text-sm text-muted-foreground mt-1">Creative solutions</p>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="gradient-border rounded-2xl p-8 bg-card">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                    <span className="text-primary">const</span> 
                    <span className="text-foreground">aklesh</span> 
                    <span className="text-primary">=</span> 
                    <span className="text-cyan-400">{"{"}</span>
                  </div>
                  <div className="pl-6 space-y-2 font-mono text-sm">
                    <div>
                      <span className="text-cyan-400">role:</span>{" "}
                      <span className="text-green-400">"Data Scientist"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-400">company:</span>{" "}
                      <span className="text-green-400">"Hanumant Technology Pvt Ltd"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-400">location:</span>{" "}
                      <span className="text-green-400">"India"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-400">skills:</span>{" "}
                      <span className="text-yellow-400">[</span>
                      <span className="text-green-400">"Python"</span>,{" "}
                      <span className="text-green-400">"ML"</span>,{" "}
                      <span className="text-green-400">"SQL"</span>
                      <span className="text-yellow-400">]</span>,
                    </div>
                    <div>
                      <span className="text-cyan-400">passion:</span>{" "}
                      <span className="text-green-400">"Turning data into insights"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-400">status:</span>{" "}
                      <span className="text-green-400">"Open to opportunities"</span>
                    </div>
                  </div>
                  <div className="text-cyan-400 font-mono text-sm">{"}"}</div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
