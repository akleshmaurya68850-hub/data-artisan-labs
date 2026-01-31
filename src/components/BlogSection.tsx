import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Accuracy vs Precision vs Recall vs F1 Score",
    excerpt: "Understanding the key metrics for evaluating classification models and when to use each one.",
    readTime: "5 min read",
    category: "ML Fundamentals",
  },
  {
    title: "End-to-End ML Project Workflow",
    excerpt: "A comprehensive guide to building machine learning projects from data collection to deployment.",
    readTime: "8 min read",
    category: "Tutorial",
  },
  {
    title: "Handling Imbalanced Datasets",
    excerpt: "Techniques and strategies for dealing with class imbalance in machine learning problems.",
    readTime: "6 min read",
    category: "Best Practices",
  },
  {
    title: "ML Algorithms Explained Simply",
    excerpt: "Breaking down complex machine learning algorithms into easy-to-understand concepts.",
    readTime: "10 min read",
    category: "Education",
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-24 relative bg-secondary/20">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Insights & <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Sharing knowledge about data science, machine learning, and AI
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="glass-card rounded-xl p-6 group hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>

                <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
