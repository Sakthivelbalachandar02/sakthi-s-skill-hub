import { Mail, Linkedin, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo/Brand */}
          <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
            Sakthi Online Learning
          </h3>
          <p className="text-primary-foreground/60 mb-8 max-w-md">
            Building clear onboarding & role-based training that actually gets used.
          </p>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <a 
              href="#about" 
              className="text-primary-foreground/70 hover:text-gold transition-colors"
            >
              About
            </a>
            <a 
              href="https://sakthionlinelearning.moodlecloud.com/course/view.php?id=9" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-gold transition-colors flex items-center gap-1"
            >
              Start Training
              <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="https://moodlecloud.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-gold transition-colors flex items-center gap-1"
            >
              Moodle Cloud
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mb-8">
            <a 
              href="mailto:contact@sakthionlinelearning.com" 
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold/20 flex items-center justify-center text-primary-foreground/70 hover:text-gold transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold/20 flex items-center justify-center text-primary-foreground/70 hover:text-gold transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-primary-foreground/10 mb-8" />

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/50 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-gold" /> by Sakthi · © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
