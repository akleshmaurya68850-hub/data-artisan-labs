import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    platform: "Forage",
    description: "Completed practical tasks in AI-driven analytics, EDA, and business reporting.",
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_699077cd147ed75a2fdf3718_1771402363546_completion_certificate.pdf",
  },
  {
    title: "GenAI Job Simulation",
    platform: "Forage",
    description: "Built chatbot and applied generative AI concepts for financial queries.",
    link: "https://www.theforage.com/completion-certificates/SKZxezskWgmFjRvj9/gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_699077cd147ed75a2fdf3718_1771749707607_completion_certificate.pdf",
  },
  {
    title: "Yuva AI",
    platform: "Coursera",
    description: "Learned AI fundamentals and real-world applications.",
    link: "https://coursera.org/share/e46be5609a8cfee3540137c20154f2de",
  },
];

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 relative">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Achievements</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              My <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Professional certifications and completed simulations
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-2.5 flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm text-primary font-medium">{cert.platform}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">{cert.description}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View Certificate <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
