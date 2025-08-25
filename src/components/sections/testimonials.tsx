"use client"

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import * as React from "react"

const testimonialsData = [
  {
    name: 'Sarah Johnson',
    title: 'Senior Developer, TechCorp',
    quote: 'An exceptional developer with a keen eye for detail and a strong passion for learning. A true asset to any team.',
    avatar: 'https://placehold.co/100x100.png',
    initials: 'SJ'
  },
  {
    name: 'Michael Chen',
    title: 'Project Manager, Innovate LLC',
    quote: 'Proactive, a great communicator, and consistently delivers high-quality work. The ability to quickly grasp complex concepts is impressive.',
    avatar: 'https://placehold.co/100x100.png',
    initials: 'MC'
  },
  {
    name: 'Dr. Emily Carter',
    title: 'Professor of Computer Science',
    quote: 'One of the brightest students I have had the pleasure of teaching. Possesses a rare blend of technical skill and creative problem-solving.',
    avatar: 'https://placehold.co/100x100.png',
    initials: 'EC'
  },
  {
    name: 'David Lee',
    title: 'Lead UX Designer',
    quote: 'A pleasure to collaborate with. Understands the importance of user experience and contributes valuable insights to the design process.',
    avatar: 'https://placehold.co/100x100.png',
    initials: 'DL'
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Endorsements</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">What others say about my work and collaboration.</p>
            </div>

            <Carousel 
                className="w-full max-w-xs sm:max-w-xl md:max-w-4xl mx-auto"
                opts={{
                align: "start",
                loop: true,
                }}
            >
                <CarouselContent className="-ml-4">
                {testimonialsData.map((testimonial, index) => (
                    <CarouselItem key={index} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                        <Card className="flex flex-col justify-between h-full shadow-md">
                        <CardContent className="p-6 flex-grow">
                            <blockquote className="text-muted-foreground italic leading-relaxed">
                            &quot;{testimonial.quote}&quot;
                            </blockquote>
                        </CardContent>
                        <div className="flex items-center gap-4 p-6 bg-background rounded-b-lg">
                            <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait" />
                            <AvatarFallback>{testimonial.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                            <p className="font-semibold text-primary">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                            </div>
                        </div>
                        </Card>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
    </section>
  );
}
