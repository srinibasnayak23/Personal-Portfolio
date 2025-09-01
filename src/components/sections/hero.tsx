import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="w-full relative">
       <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="container mx-auto grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 lg:gap-20 lg:px-20">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Crafting Digital Experiences
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
            Hi, I&apos;m a passionate software engineer specializing in building modern web applications and native Android apps with Kotlin and Jetpack Compose.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <Button asChild size="lg">
              <Link href="#contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#projects">
                View My Work
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://media.licdn.com/dms/image/v2/D5603AQEMq8L0ZUn2bA/profile-displayphoto-shrink_400_400/B56ZdsZeWkHQAg-/0/1749870311144?e=1758758400&v=beta&t=boNoHXd7kGG5Hw6V6lH5zC1_1ZZeBNNfSSDWqDtsgTI"
            alt="Developer portrait"
            width={400}
            height={400}
            priority
            className="rounded-full shadow-2xl aspect-square object-cover"
            data-ai-hint="developer portrait"
          />
        </div>
      </div>
    </section>
  );
}
