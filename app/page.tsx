"use client";

import { Button } from "@/components/ui/cubby-ui/button";
import { Badge } from "@/components/ui/cubby-ui/badge";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Navigation */}
      <nav className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 py-4 max-w-6xl">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">Jon Coronel</span>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/joncoronel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-50 focus-visible:ring-offset-2 rounded transition-colors duration-200 touch-manipulation"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/joncoronel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-50 focus-visible:ring-offset-2 rounded transition-colors duration-200 touch-manipulation"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-24 max-w-6xl">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 text-balance leading-[0.95] mb-12"
          >
            Design engineer building UI&nbsp;systems
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-8 sm:gap-16 text-lg text-zinc-600 dark:text-zinc-400"
          >
            <div className="space-y-2">
              <p className="text-pretty">
                I build component libraries and design systems. Currently working on{" "}
                <a
                  href="https://cubby-ui.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-950 dark:text-zinc-50 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 hover:decoration-zinc-950 dark:hover:decoration-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-50 focus-visible:ring-offset-2 rounded transition-colors duration-200 touch-manipulation"
                >
                  Cubby&nbsp;UI
                </a>
                —a collection of 60+ React components.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Project - Cubby UI */}
      <section className="container mx-auto px-6 py-24 max-w-6xl border-t border-zinc-200 dark:border-zinc-800">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-start justify-between gap-8 flex-col sm:flex-row">
            <div>
              <h2 className="text-5xl sm:text-6xl font-bold text-zinc-950 dark:text-zinc-50 text-balance mb-4">
                Cubby UI
              </h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl text-pretty">
                A production-ready component library built on Base UI and Tailwind CSS
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button
                variant="primary"
                size="sm"
                nativeButton={false}
                rightSection={
                  <motion.div
                    whileHover={{ scale: 1.1, x: 2, y: -2 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </motion.div>
                }
                render={
                  <a
                    href="https://cubby-ui.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                View Site
              </Button>
              <Button
                variant="outline"
                size="sm"
                nativeButton={false}
                leftSection={
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </motion.div>
                }
                render={
                  <a
                    href="https://github.com/joncoronel/cubby-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                GitHub
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Project Details Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 border-t border-zinc-200 dark:border-zinc-800 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
              Scope
            </h3>
            <p className="text-zinc-900 dark:text-zinc-100 text-pretty">
              60+ components including advanced patterns like circular sliders, syntax-highlighted code blocks, and interactive data visualizations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
              Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Base UI</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Motion</Badge>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
              Focus
            </h3>
            <p className="text-zinc-900 dark:text-zinc-100 text-pretty">
              Accessibility-first architecture with full keyboard navigation, ARIA support, and screen reader compatibility
            </p>
          </motion.div>
        </div>

        {/* Visual Preview */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-12 sm:p-20"
        >
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="space-y-2">
              <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                60+ Components
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                From simple buttons to complex data visualizations
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-24">
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 text-balance mb-2">
                Let's work together
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-pretty">
                Open to select projects and collaborations
              </p>
            </div>
            <Button
              variant="primary"
              nativeButton={false}
              render={<a href="mailto:hello@joncoronel.com" />}
            >
              Get In Touch
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
            <p>© {new Date().getFullYear()} Jon Coronel</p>
            <div className="flex gap-6">
              <a
                href="https://github.com/joncoronel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 dark:hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-50 focus-visible:ring-offset-2 rounded transition-colors duration-200 touch-manipulation"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/joncoronel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 dark:hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-50 focus-visible:ring-offset-2 rounded transition-colors duration-200 touch-manipulation"
              >
                Twitter
              </a>
              <a
                href="mailto:hello@joncoronel.com"
                className="hover:text-zinc-950 dark:hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-50 focus-visible:ring-offset-2 rounded transition-colors duration-200 touch-manipulation"
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
