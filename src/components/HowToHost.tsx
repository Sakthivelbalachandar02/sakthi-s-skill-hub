import { Globe, Server, Rocket, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Globe,
    title: "Sign Up for Moodle Cloud",
    description: "Visit moodlecloud.com and create your free account. Choose a site name that represents your brand.",
    details: ["Free 45-day trial available", "No credit card required", "Instant setup"],
  },
  {
    number: "02",
    icon: Server,
    title: "Configure Your LMS",
    description: "Customize your Moodle site with branding, categories, and enrollment settings.",
    details: ["Add your logo and theme", "Set up user roles", "Configure navigation"],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Create & Upload Courses",
    description: "Build interactive courses with modules, quizzes, and certificates using Moodle's course builder.",
    details: ["Drag-and-drop editor", "SCORM compatibility", "H5P interactive content"],
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Launch & Share",
    description: "Publish your courses and share the enrollment link with your learners.",
    details: ["Self-enrollment or manual", "Bulk user upload", "Progress tracking"],
  },
];

const HowToHost = () => {
  return (
    <section className="py-20 lg:py-32 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-light/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4 backdrop-blur-sm">
            Getting Started
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            How to Host Your{" "}
            <span className="text-gradient-gold">Training</span>
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Follow these simple steps to set up your own Moodle LMS and start 
            delivering professional training courses.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/10 hover:border-gold/30 transition-all duration-500"
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gold text-accent-foreground font-display font-bold text-lg flex items-center justify-center shadow-lg">
                {step.number}
              </div>

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-gold" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-primary-foreground/70 mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-1.5">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-primary-foreground/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-primary-foreground/70 mb-6">
            Ready to create your own learning platform?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a 
                href="https://moodlecloud.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Try Moodle Cloud Free
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a 
                href="https://sakthionlinelearning.moodlecloud.com/course/view.php?id=9" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                See Live Example
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHost;
