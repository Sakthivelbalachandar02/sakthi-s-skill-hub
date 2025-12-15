import { Award, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import certificateImage from "@/assets/certificate-preview.png";

const CertificatePreview = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left - Certificate image */}
          <div className="flex-1 relative group">
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-br from-navy/20 to-gold/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-border group-hover:border-gold/30 transition-all duration-500">
              <img
                src={certificateImage}
                alt="Certificate of Completion Preview"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex gap-4">
                  <Button variant="hero" size="lg">
                    <Download className="w-5 h-5" />
                    View Full Size
                  </Button>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-gold text-accent-foreground px-4 py-2 rounded-full shadow-lg font-semibold text-sm animate-float">
              <Award className="w-4 h-4 inline mr-1" />
              Moodle LMS
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
              Certificate Preview
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Earn Your{" "}
              <span className="text-gradient-gold">Certificate</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Upon successful completion of the training program and final assessment, 
              you'll receive an official certificate of completion. This certificate 
              validates your skills and can be shared on professional platforms.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Auto-generated upon course completion",
                "Verifiable credentials",
                "Shareable on LinkedIn & portfolios",
                "Unique certificate ID for authenticity",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="gold" size="xl" asChild>
              <a 
                href="https://sakthionlinelearning.moodlecloud.com/course/view.php?id=9" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Start & Get Certified
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatePreview;
