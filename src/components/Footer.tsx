import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/akleshmaurya68850-hub", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aklesh-maurya-13a492321", label: "LinkedIn" },
    { icon: Mail, href: "mailto:akleshmaurya68850@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center glow-border">
                <span className="text-primary font-bold text-lg">A</span>
              </div>
              <div>
                <p className="font-semibold">Aklesh</p>
                <p className="text-sm text-muted-foreground">Data Scientist | ML Engineer</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center 
                           hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              © 2026 Aklesh. Built with <Heart className="w-4 h-4 text-red-500" /> and Data Science
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
