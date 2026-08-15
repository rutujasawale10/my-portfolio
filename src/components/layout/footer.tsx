import { Mail } from "lucide-react";
import { GitHubLogoIcon as Github, LinkedInLogoIcon as Linkedin } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8 md:py-12 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:contact@example.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}