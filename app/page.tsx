"use client";

import { Button } from "@/components/ui/cubby-ui/button";
import { Card } from "@/components/ui/cubby-ui/card";
import { Badge } from "@/components/ui/cubby-ui/badge";
import { Separator } from "@/components/ui/cubby-ui/separator";
import { ArrowUpRight, Github, Code2, Palette, Sparkles, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative container mx-auto px-6 pt-24 pb-32 max-w-5xl">
        <div className="absolute inset-x-0 top-0 h-px bg-zinc-200 dark:bg-zinc-800" />

        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 dark:bg-zinc-900 px-4 py-1.5 text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Design Engineer & UI Developer</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 text-balance">
              Jon Coronel
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed text-pretty">
              Crafting exceptional user interfaces through the intersection of{" "}
              <span className="text-zinc-900 dark:text-zinc-100 font-medium">design</span>,{" "}
              <span className="text-zinc-900 dark:text-zinc-100 font-medium">code</span>, and{" "}
              <span className="text-zinc-900 dark:text-zinc-100 font-medium">motion</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button
              variant="primary"
              size="default"
              nativeButton={false}
              render={<a href="#work" />}
            >
              View Work
            </Button>
            <Button
              variant="outline"
              size="default"
              nativeButton={false}
              leftSection={<Github className="h-4 w-4" />}
              render={
                <a
                  href="https://github.com/joncoronel"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="container mx-auto px-6 py-24 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-8 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center size-12 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <Code2 className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 text-balance">
                Component Architecture
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-pretty">
                Building scalable, accessible component systems with React, TypeScript, and modern web standards.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center size-12 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <Palette className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 text-balance">
                Design Systems
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-pretty">
                Creating cohesive design languages that bridge the gap between design and engineering.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center size-12 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <Layers className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 text-balance">
                Interface Engineering
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-pretty">
                Crafting polished interactions with attention to detail, motion, and user experience.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="container mx-auto px-6 py-24 max-w-5xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 text-balance">
              Featured Work
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl text-pretty">
              Selected projects showcasing my approach to design engineering and component development.
            </p>
          </div>

          <div className="space-y-8">
            {/* Cubby UI Project */}
            <Card className="group overflow-hidden border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 p-8 sm:p-10">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-lg bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-zinc-900 font-bold text-lg">
                        CU
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 text-balance">
                        Cubby UI
                      </h3>
                    </div>
                    <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed text-pretty">
                      A comprehensive collection of 60+ production-ready React components built on Base UI and Tailwind CSS. Features advanced components including circular sliders, syntax-highlighted code blocks, and interactive data visualizations with a focus on accessibility and developer experience.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Tailwind CSS</Badge>
                        <Badge variant="secondary">Base UI</Badge>
                        <Badge variant="secondary">Motion</Badge>
                        <Badge variant="secondary">Shiki</Badge>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button
                        variant="primary"
                        size="sm"
                        nativeButton={false}
                        rightSection={<ArrowUpRight className="h-4 w-4" />}
                        render={
                          <a
                            href="https://cubby-ui.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        }
                      >
                        Visit Site
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        nativeButton={false}
                        leftSection={<Github className="h-4 w-4" />}
                        render={
                          <a
                            href="https://github.com/joncoronel/cubby-ui"
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        }
                      >
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-video md:aspect-square rounded-lg bg-zinc-100 dark:bg-zinc-800 overflow-hidden border border-zinc-200 dark:border-zinc-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-6xl">🎨</div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        60+ Components
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto max-w-5xl" />

      {/* Footer */}
      <footer className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 text-balance">
                Let's work together
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 text-pretty">
                Available for select freelance projects and collaborations.
              </p>
            </div>
            <Button
              variant="primary"
              nativeButton={false}
              render={<a href="mailto:hello@joncoronel.com" />}
            >
              Get in touch
            </Button>
          </div>

          <Separator />

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} Jon Coronel. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/joncoronel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/joncoronel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                Twitter
              </a>
              <a
                href="mailto:hello@joncoronel.com"
                className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
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
