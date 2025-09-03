import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, User, Clock, Share2 } from "lucide-react";
import FooterFix from "@/components/FooterFix";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
}

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPost | null>(null);

  // Sample blog data - in a real app, this would come from an API
  const blogPosts: Record<string, BlogPost> = {
    "ai-agents-future": {
      id: "ai-agents-future",
      title: "AI Agents: The Future of Intelligent Automation",
      excerpt:
        "The world of artificial intelligence is evolving fast — and leading the charge are AI agents, intelligent systems capable of making decisions, taking action, and learning from their environment.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      date: "Aug 25, 2025",
      author: "AI Team",
      readTime: "8 min read",
      tags: ["AI", "Automation", "Technology", "Future"],
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-muted-foreground mb-8">The world of artificial intelligence is evolving fast — and leading the charge are AI agents, intelligent systems capable of making decisions, taking action, and learning from their environment. These agents aren't just theoretical concepts; they're already reshaping industries, improving efficiency, and unlocking new possibilities.</p>

          <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">What Are AI Agents?</h2>
          <p class="text-lg text-muted-foreground mb-6">AI agents are smart, autonomous software programs designed to perform tasks, make decisions, and adapt without constant human input. Unlike basic chatbots or traditional apps that follow fixed instructions, AI agents can perceive, reason, and act in realtime — all while learning and improving.</p>
          <p class="text-lg text-muted-foreground mb-6">Think of an AI agent as an advanced digital assistant. It doesn't just follow scripts — it analyzes situations, plans solutions, and acts across platforms to get the job done.</p>

          <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">Key Features of AI Agents</h2>
          <ul class="list-disc pl-6 space-y-3 text-lg text-muted-foreground mb-8">
            <li><strong class="text-foreground">Autonomy:</strong> They work independently after receiving objectives, reducing manual oversight.</li>
            <li><strong class="text-foreground">Goal-Oriented:</strong> Whether optimizing logistics or improving customer service, AI agents focus on specific outcomes.</li>
            <li><strong class="text-foreground">Environmental Awareness:</strong> They interpret data, sensor inputs, or user behavior to make informed decisions.</li>
            <li><strong class="text-foreground">Learning & Adaptation:</strong> AI agents evolve over time, refining their performance through experience.</li>
            <li><strong class="text-foreground">Multi-Modal Interaction:</strong> Text, voice, images, or direct actions — AI agents engage across channels.</li>
          </ul>

          <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">Types of AI Agents</h2>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-card p-6 rounded-lg border border-border">
              <h3 class="text-xl font-semibold text-foreground mb-3">Reactive Agents</h3>
              <p class="text-muted-foreground">Respond to immediate stimuli (e.g., real-time trading systems).</p>
            </div>
            <div class="bg-card p-6 rounded-lg border border-border">
              <h3 class="text-xl font-semibold text-foreground mb-3">Deliberative Agents</h3>
              <p class="text-muted-foreground">Use reasoning and planning for complex tasks (e.g., strategic decision-making).</p>
            </div>
            <div class="bg-card p-6 rounded-lg border border-border">
              <h3 class="text-xl font-semibold text-foreground mb-3">Hybrid Agents</h3>
              <p class="text-muted-foreground">Combine quick reactions with long-term planning — the most common type today.</p>
            </div>
            <div class="bg-card p-6 rounded-lg border border-border">
              <h3 class="text-xl font-semibold text-foreground mb-3">Multi-Agent Systems</h3>
              <p class="text-muted-foreground">Teams of agents collaborate (or compete) to solve complex challenges, like swarm robotics or distributed AI networks.</p>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">Where AI Agents Are Making an Impact</h2>
          <div class="space-y-4 mb-8">
            <div class="bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 p-6 rounded-lg border border-border">
              <h3 class="text-xl font-semibold text-foreground mb-2">Business Automation</h3>
              <p class="text-muted-foreground">Automating tasks like invoice processing, meeting scheduling, and customer inquiries.</p>
            </div>
            <div class="bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 p-6 rounded-lg border border-border">
              <h3 class="text-xl font-semibold text-foreground mb-2">Customer Service</h3>
              <p class="text-muted-foreground">Intelligent support agents that handle routine questions and escalate complex issues.</p>
            </div>
            <div class="bg-gradient-to-r from-brand-blue/10 to-brand-pink/10 p-6 rounded-lg border border-border">
              <h3 class="text-xl font-semibold text-foreground mb-2">Finance</h3>
              <p class="text-muted-foreground">Monitoring markets, executing trades, detecting fraud, and offering personalized advice.</p>
            </div>
            <div class="bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 p-6 rounded-lg border border-border">
              <h3 class="text-xl font-semibold text-foreground mb-2">Healthcare</h3>
              <p class="text-muted-foreground">Appointment scheduling, medication reminders, and preliminary health assessments.</p>
            </div>
            <div class="bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 p-6 rounded-lg border border-border">
              <h3 class="text-xl font-semibold text-foreground mb-2">Smart Homes & IoT</h3>
              <p class="text-muted-foreground">Optimizing energy use, enhancing security, and personalizing living spaces.</p>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">Why AI Agents Matter</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div class="text-center p-6 bg-card rounded-lg border border-border">
              <div class="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-lg font-semibold text-foreground mb-2">Efficiency</h3>
              <p class="text-muted-foreground text-sm">AI agents work 24/7, processing tasks at incredible speeds.</p>
            </div>
            <div class="text-center p-6 bg-card rounded-lg border border-border">
              <div class="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <User class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-lg font-semibold text-foreground mb-2">Better Decisions</h3>
              <p class="text-muted-foreground text-sm">They analyze vast data sets, uncovering insights humans might miss.</p>
            </div>
            <div class="text-center p-6 bg-card rounded-lg border border-border">
              <div class="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-lg font-semibold text-foreground mb-2">Scalability</h3>
              <p class="text-muted-foreground text-sm">Deploy agents as needed, with minimal added cost.</p>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">The Future of AI Agents</h2>
          <p class="text-lg text-muted-foreground mb-6">The next generation of AI agents will be smarter, more intuitive, and deeply integrated with emerging technologies like quantum computing, 5G, and robotics. Expect AI agents that:</p>
          <ul class="list-disc pl-6 space-y-2 text-lg text-muted-foreground mb-8">
            <li>Understand complex language and context</li>
            <li>Collaborate seamlessly with humans</li>
            <li>Exhibit emotional intelligence</li>
            <li>Solve creative and technical challenges</li>
            <li>Operate across industries from healthcare to education to scientific research</li>
          </ul>

          <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">How to Get Started with AI Agents</h2>
          <ol class="list-decimal pl-6 space-y-3 text-lg text-muted-foreground mb-8">
            <li>Identify repetitive, rule-based processes ripe for automation.</li>
            <li>Implement AI agents for manageable use cases.</li>
            <li>Gradually scale to more complex tasks.</li>
            <li>Invest in team training, infrastructure, and AI governance.</li>
          </ol>

          <div class="bg-gradient-to-r from-brand-pink/10 via-brand-purple/10 to-brand-blue/10 p-8 rounded-lg border border-border mt-12">
            <h2 class="text-3xl font-bold text-foreground mb-6">Conclusion: Humans + AI Agents = The Future</h2>
            <p class="text-lg text-muted-foreground mb-4">AI agents are reshaping how we automate work, make decisions, and create value. They're not here to replace human intelligence — but to augment it, freeing us to focus on creativity, relationships, and strategic thinking.</p>
            <p class="text-lg text-muted-foreground">The AI agent revolution is underway. By embracing this technology responsibly, we can unlock a future where intelligent automation drives innovation, productivity, and progress — for businesses, individuals, and society as a whole.</p>
          </div>
        </div>
      `,
    },
    "web-dev-trends": {
      id: "web-dev-trends",
      title: "How AI is Changing Web Development",
      excerpt:
        "A breakdown of how AI tools are enhancing design, coding, and user experience.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      date: "Dec 10, 2024",
      author: "AI Team",
      readTime: "6 min read",
      tags: ["Web Development", "AI", "Design", "UX"],
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-muted-foreground mb-8">Artificial Intelligence is revolutionizing web development, transforming how we design, code, and optimize user experiences. From automated code generation to intelligent design systems, AI is becoming an indispensable tool for modern web developers.</p>

          <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">AI-Powered Code Generation</h2>
          <p class="text-lg text-muted-foreground mb-6">Tools like GitHub Copilot and ChatGPT are changing how developers write code. These AI assistants can generate entire functions, suggest optimizations, and even help debug complex issues in real-time.</p>

          <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">Intelligent Design Systems</h2>
          <p class="text-lg text-muted-foreground mb-6">AI is enabling the creation of smart design systems that can automatically generate layouts, choose color schemes, and optimize typography based on content and user preferences.</p>

          <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">Enhanced User Experience</h2>
          <p class="text-lg text-muted-foreground mb-6">Machine learning algorithms analyze user behavior to personalize content, predict user needs, and optimize conversion rates through intelligent A/B testing.</p>
        </div>
      `,
    },
    "mobile-app-importance": {
      id: "mobile-app-importance",
      title: "Why Every Brand Needs a Mobile App",
      excerpt:
        "Discover the strategic importance of having a mobile-first approach in 2025.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      date: "Dec 5, 2024",
      author: "Mobile Team",
      readTime: "5 min read",
      tags: ["Mobile", "Apps", "Business", "Strategy"],
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-muted-foreground mb-8">In today's digital landscape, having a mobile app isn't just an advantage—it's a necessity. With mobile usage continuing to dominate internet traffic, brands that don't prioritize mobile-first strategies risk being left behind.</p>

          <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">Mobile Usage Statistics</h2>
          <p class="text-lg text-muted-foreground mb-6">Over 60% of web traffic now comes from mobile devices, and users spend 90% of their mobile time in apps rather than browsers. This shift represents a fundamental change in how consumers interact with brands.</p>

          <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">Enhanced Customer Engagement</h2>
          <p class="text-lg text-muted-foreground mb-6">Mobile apps provide direct access to customers through push notifications, personalized content, and seamless user experiences that keep users engaged and coming back.</p>

          <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">Competitive Advantage</h2>
          <p class="text-lg text-muted-foreground mb-6">Brands with well-designed mobile apps often see higher customer retention rates, increased sales, and stronger brand loyalty compared to those relying solely on web presence.</p>
        </div>
      `,
    },
  };

  useEffect(() => {
    if (id && blogPosts[id]) {
      setBlog(blogPosts[id]);
    }
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Button
              onClick={() => navigate("/")}
              className="bg-gradient-primary hover:opacity-90 text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/10 via-brand-purple/10 to-brand-blue/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="mb-8 text-brand-purple hover:text-brand-purple/80"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button> */}

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-6xl font-poppins font-bold text-foreground mb-6 animate-fade-in-up">
                {blog.title}
              </h1>

              <div
                className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>

            <div
              className="relative mb-12 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <article
              className="animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Share this article
                  </h3>
                  <p className="text-muted-foreground">
                    Help others discover this content
                  </p>
                </div>
                <Button className="bg-gradient-primary hover:opacity-90 text-white">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Related Articles
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {Object.values(blogPosts)
                  .filter((post) => post.id !== blog.id)
                  .slice(0, 2)
                  .map((relatedBlog, index) => (
                    <div
                      key={relatedBlog.id}
                      className="group bg-card rounded-2xl overflow-hidden shadow-elegant hover-lift border border-border/50 cursor-pointer"
                      onClick={() => navigate(`/blog/${relatedBlog.id}`)}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={relatedBlog.image}
                          alt={relatedBlog.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-muted-foreground space-x-4 mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{relatedBlog.date}</span>
                          </div>
                          <span>•</span>
                          <span>{relatedBlog.author}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {relatedBlog.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {relatedBlog.excerpt}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FooterFix />
    </div>
  );
};

export default BlogDetail;
