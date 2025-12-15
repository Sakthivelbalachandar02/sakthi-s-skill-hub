import { Target, TestTube2, Smartphone } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Role-Based Training",
    description: "Custom learning paths tailored for specific job roles such as developers, testers, and support engineers.",
    color: "from-navy to-navy-light",
  },
  {
    icon: TestTube2,
    title: "Assessments & Certification",
    description: "Quizzes, final evaluations, and auto-generated certificates to measure learning outcomes effectively.",
    color: "from-gold to-gold-light",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly LMS",
    description: "Fully responsive courses accessible on mobile, tablet, and desktop devices.",
    color: "from-navy-light to-steel",
  },
];

const AboutTraining = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            About This Training
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Job-Ready Skills Through{" "}
            <span className="text-gradient">Structured Learning</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sakthi Online Learning is designed to help freshers, working professionals, 
            and corporate teams gain job-ready skills through structured, role-based learning.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 border border-border hover:border-gold/30 overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-4 group-hover:text-navy transition-colors">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I specialize in building interactive onboarding programs, assessments, and 
            certification-based training using Moodle LMS. My focus is on{" "}
            <span className="text-navy font-semibold">clarity</span>,{" "}
            <span className="text-navy font-semibold">engagement</span>, and{" "}
            <span className="text-navy font-semibold">real-world applicability</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutTraining;
