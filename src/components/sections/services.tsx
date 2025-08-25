import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Laptop, Smartphone, PenTool } from 'lucide-react';

const servicesData = [
  {
    icon: <Laptop className="h-10 w-10 text-primary" />,
    title: 'Web Application Development',
    description: 'Creating responsive, full-stack web applications using modern technologies like React, Next.js, and Node.js to deliver seamless user experiences.',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Mobile App Development',
    description: 'Building beautiful and performant native Android applications using Kotlin and Jetpack Compose, from concept to deployment on the Google Play Store.',
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and aesthetically pleasing user interfaces that focus on user-centered design principles to create engaging digital products.',
  },
];

export function Services() {
  return (
    <section id="services" className="w-full">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">My Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer a range of services to bring your ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {servicesData.map((service, index) => (
            <Card key={index} className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
