import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Laptop, Smartphone, PenTool, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const servicesData = [
  {
    icon: <Laptop className="h-10 w-10 text-primary" />,
    title: 'Web Application Development',
    description: 'Creating responsive, full-stack web applications using modern technologies like React, Next.js, and Node.js to deliver seamless user experiences. We cover everything from frontend design to backend architecture, ensuring a robust and scalable solution.',
    slug: 'web-application-development',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Mobile App Development',
    description: 'Building beautiful and performant native Android applications using Kotlin and Jetpack Compose, from concept to deployment on the Google Play Store. Our focus is on creating intuitive user interfaces and a smooth user experience.',
    slug: 'mobile-app-development',
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and aesthetically pleasing user interfaces that focus on user-centered design principles to create engaging digital products. We work closely with you to understand your brand and create a design that resonates with your audience.',
    slug: 'ui-ux-design',
  },
];

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">Service not found</h2>
        <Button asChild className="mt-4">
          <Link href="/services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:px-20 lg:py-28">
        <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                {service.icon}
            </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">{service.title}</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Service Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">{service.description}</p>
              {/* You can add more detailed content here */}
            </CardContent>
          </Card>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/#services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
