"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projectsData = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website with product listings, a shopping cart, and a checkout process, built with the MERN stack.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com',
    live: 'https://example.com',
    aiHint: 'e-commerce product'
  },
  {
    title: 'Android Fitness App',
    description: 'A native Android application to track workouts and fitness goals, built with Kotlin and Jetpack Compose for a modern UI.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Kotlin', 'Jetpack Compose', 'Android'],
    github: 'https://github.com',
    live: 'https://play.google.com',
    aiHint: 'fitness app'
  },
  {
    title: 'Task Management App',
    description: 'A Trello-like task management application with drag-and-drop functionality for organizing tasks and projects.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    aiHint: 'task board'
  },
  {
    title: 'Portfolio Website',
    description: 'This very portfolio website, showcasing my skills and projects, built with Next.js and Tailwind CSS for a modern look.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'portfolio design'
  },
  {
    title: 'Blogging Platform',
    description: 'A content management system for creating and managing blog posts, with user authentication and a rich text editor.',
    image: 'https://placehold.co/600x400.png',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    aiHint: 'blog article'
  },
];

const allTags = Array.from(new Set(projectsData.flatMap(p => p.tags)));

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter
    ? projectsData.filter(p => p.tags.includes(activeFilter))
    : projectsData;

  return (
    <section id="projects" className="w-full">
      <div className="container mx-auto px-12 py-4 md:px-6 md:py-24 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">My Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A selection of my work. Feel free to explore the code and live demos.</p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-8">
          <Button
            variant={activeFilter === null ? 'default' : 'outline'}
            onClick={() => setActiveFilter(null)}
            size="sm"
          >
            All
          </Button>
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={activeFilter === tag ? 'default' : 'outline'}
              onClick={() => setActiveFilter(tag)}
              size="sm"
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={project.aiHint}
                  />
                </div>
              </CardHeader>
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
                <CardContent className="p-0 pt-4 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-6 flex justify-end gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
