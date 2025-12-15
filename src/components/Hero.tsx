import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Monitor, Award } from "lucide-react";
import sakthiPhoto from "@/assets/sakthi-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-light/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold/5 to-transparent rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-primary-foreground/90 text-sm font-medium">Learning & Development Engineer</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Sakthi Online{" "}
              <span className="text-gradient-gold">Learning</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-8 leading-relaxed">
              I build clear onboarding & role-based training using Moodle — 
              interactive modules, quizzes and certificates that actually get used.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
              <Button variant="hero" size="xl" asChild>
                <a 
                  href="https://sakthionlinelearning.moodlecloud.com/course/view.php?id=9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Training
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>

            {/* Quick features */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              {[
                { icon: CheckCircle, text: "Interactive modules" },
                { icon: Award, text: "Assessment & certificate" },
                { icon: Monitor, text: "Mobile-friendly LMS" },
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 text-primary-foreground/70"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <feature.icon className="w-5 h-5 text-gold" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Photo */}
          <div className="flex-shrink-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 blur-sm animate-pulse-soft" />
              <div className="absolute -inset-2 rounded-full border-2 border-gold/30" />
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-elevated">
                <img
                  src={sakthiPhoto}
                  alt="Sakthi - Learning & Development Engineer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card rounded-xl px-4 py-3 shadow-elevated animate-float">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-gold" />
                  <span className="font-semibold text-foreground text-sm">Certified Trainer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/50">
        <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
