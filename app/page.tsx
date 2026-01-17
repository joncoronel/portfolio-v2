import { Button } from "@/components/ui/cubby-ui/button";
import { Card } from "@/components/ui/cubby-ui/card";
import { Badge } from "@/components/ui/cubby-ui/badge";
import { ArrowUpRight, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-24 max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Jon Coronel
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Design Engineer crafting exceptional UI components and web experiences.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-16 max-w-4xl">
        <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50 mb-8">
          Projects
        </h2>

        <div className="space-y-6">
          {/* Cubby UI Project */}
          <Card className="p-6 sm:p-8 border-zinc-200 dark:border-zinc-800">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                    Cubby UI
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    A comprehensive collection of 60+ beautifully designed, accessible React components built with Base UI and Tailwind CSS. Features advanced components like circular sliders, code blocks with syntax highlighting, and interactive data visualizations.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Base UI</Badge>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://cubby-ui.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="sm">
                    Visit Site
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </a>
                <a
                  href="https://github.com/joncoronel/cubby-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4" />
                    View Code
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} Jon Coronel
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/joncoronel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/joncoronel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                Twitter
              </a>
              <a
                href="mailto:hello@joncoronel.com"
                className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
