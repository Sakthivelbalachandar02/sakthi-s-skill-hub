import { BookOpen, Video, FlaskConical, Flag, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Introduction",
    description: "Get started with course overview and objectives",
    emoji: "📘",
  },
  {
    icon: Video,
    title: "Learning Modules",
    description: "Interactive video-based learning content",
    emoji: "🎥",
  },
  {
    icon: FlaskConical,
    title: "Quizzes",
    description: "Test your understanding with assessments",
    emoji: "🧪",
  },
  {
    icon: Flag,
    title: "Final Assessment",
    description: "Comprehensive evaluation of skills",
    emoji: "🏁",
  },
  {
    icon: GraduationCap,
    title: "Certificate",
    description: "Earn your certificate of completion",
    emoji: "🎓",
  },
];

const TrainingFlow = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-navy/10 text-navy text-sm font-medium mb-4">
            Training Flow
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Learning{" "}
            <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            This onboarding program demonstrates structured employee learning 
            using Moodle LMS from start to certification.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-navy via-gold to-navy rounded-full -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Mobile connector */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute left-7 top-20 w-0.5 h-16 bg-gradient-to-b from-navy to-gold" />
                )}

                <div className="relative flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-card border-4 border-navy group-hover:border-gold shadow-soft group-hover:shadow-elevated flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <span className="text-2xl">{step.emoji}</span>
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-accent-foreground text-xs font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="mt-4">
                    <h3 className="font-display font-bold text-foreground mb-1 group-hover:text-navy transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-32">
                      {step.description}
                    </p>
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

export default TrainingFlow;
