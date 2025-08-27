import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Top: navigation + socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Navigation links */}
          <nav className="flex gap-6 text-gray-600 dark:text-gray-300 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition">
              About
            </a>
            <a href="#projects" className="hover:text-primary transition">
              Projects
            </a>
            <a href="#certificates" className="hover:text-primary transition">
              Certificates
            </a>
            <a href="#contact" className="hover:text-primary transition">
              Contact
            </a>
          </nav>

          {/* Social icons */}
          <div className="flex gap-5">
            <a
              href="https://github.com/444Nazky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition"
            >
              <Github className="w-5 h-5" />
            </a>



            <a
              href="s.id/in_nazky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:naruzky.naz@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom: copyright */}
        <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
