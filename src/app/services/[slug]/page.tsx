import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Laptop, Smartphone, PenTool, ArrowLeft, CheckCircle, Zap, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const servicesData = [
  {
    slug: 'web-application-development',
    icon: <Laptop className="h-10 w-10 text-primary" />,
    title: 'Web Application Development',
    description: 'Creating responsive, full-stack web applications using modern technologies like React, Next.js, and Node.js to deliver seamless user experiences. We cover everything from frontend design to backend architecture, ensuring a robust and scalable solution.',
    keyFeatures: [
      'Custom Frontend Development with React & Next.js',
      'Scalable Backend & API Development',
      'Responsive, Mobile-First Design',
      'Database Design and Integration',
      'Third-Party API Integrations',
      'Deployment and Maintenance',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Docker'],
    pricingTiers: [
        { name: 'Starter', price: '$1,500+', description: 'For small projects or MVPs.' },
        { name: 'Business', price: '$5,000+', description: 'For full-featured applications.' },
        { name: 'Enterprise', price: 'Contact Us', description: 'For large-scale, custom solutions.' },
    ],
  },
  {
    slug: 'mobile-app-development',
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Mobile App Development',
    description: 'Building beautiful and performant native Android applications using Kotlin and Jetpack Compose, from concept to deployment on the Google Play Store. Our focus is on creating intuitive user interfaces and a smooth user experience.',
    keyFeatures: [
      'Native Android App Development',
      'Modern UI with Jetpack Compose',
      'MVVM Architecture Implementation',
      'Firebase Integration (Auth, Firestore, etc.)',
      'Performance Optimization',
      'Google Play Store Deployment & Support',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Firebase', 'RoomDB', 'Retrofit'],
    pricingTiers: [
        { name: 'Basic App', price: '$2,000+', description: 'A simple app with a few screens.' },
        { name: 'Pro App', price: '$6,000+', description: 'A complex app with backend integration.' },
        { name: 'Custom', price: 'Contact Us', description: 'Tailored solutions for your needs.' },
    ],
  },
  {
    slug: 'ui-ux-design',
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and aesthetically pleasing user interfaces that focus on user-centered design principles to create engaging digital products. We work closely with you to understand your brand and create a design that resonates with your audience.',
    keyFeatures: [
      'User Research and Persona Development',
      'Wireframing and Interactive Prototyping',
      'High-Fidelity UI Design',
      'Design System Creation',
      'Usability Testing and Feedback Iteration',
      'Cross-platform Design Consistency',
    ],
    technologies: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Miro'],
    pricingTiers: [
        { name: 'Wireframes', price: '$500+', description: 'Basic wireframes and user flow.' },
        { name: 'Full UI/UX', price: '$2,500+', description: 'Complete design from research to mockups.' },
        { name: 'Design System', price: '$4,000+', description: 'A comprehensive component library.' },
    ],
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
    <section className="w-full bg-secondary">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:px-20 lg:py-28">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
            {service.icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl font-headline">{service.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{service.description}</p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-12">
            {/* Key Features Section */}
            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-6 w-6 text-primary"/>
                        Key Features
                    </CardTitle>
                    <CardDescription>What&apos;s included in the {service.title} service.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.keyFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            {/* Technologies Section */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Zap className="h-6 w-6 text-primary"/>
                        Technologies I Use
                    </CardTitle>
                    <CardDescription>The modern tech stack I use to deliver high-quality results.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {service.technologies.map(tech => (
                            <Badge key={tech} variant="default" className="text-sm font-normal bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>

             {/* Pricing Section */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-6 w-6 text-primary"/>
                        Pricing
                    </CardTitle>
                    <CardDescription>Transparent pricing options to fit your needs. Prices are estimates and may vary.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {service.pricingTiers.map((tier, index) =>(
                     <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{tier.name}</CardTitle>
                            <p className="text-2xl font-bold text-primary">{tier.price}</p>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <p className="text-muted-foreground">{tier.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full">
                                <Link href="/#contact">Get a Quote</Link>
                            </Button>
                        </CardFooter>
                     </Card>
                   ))}
                </CardContent>
            </Card>
        </div>

        <Separator className="my-16" />

        <div className="mt-8 text-center">
            <Button asChild variant="outline">
                <Link href="/#services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}