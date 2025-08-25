import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    role: 'Software Engineer Intern',
    company: 'Innovate LLC',
    period: 'Summer 2023',
    description: [
      'Contributed to the development of a new client-facing web application using React and Node.js.',
      'Collaborated with a team of developers to implement new features and fix bugs.',
      'Participated in code reviews and agile development processes.',
    ],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2022 - Present',
    description: [
      'Designed and developed websites for small businesses and individuals.',
      'Managed all aspects of the project lifecycle, from initial consultation to deployment and maintenance.',
      'Utilized a variety of technologies including WordPress, Next.js, and Tailwind CSS.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="w-full bg-secondary">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:px-20 md:py-24 lg:py-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Work Experience</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">My professional journey and accomplishments so far.</p>
        </div>
        
        <div className="relative">
            <div className="absolute left-1/2 -ml-[1px] h-full w-0.5 bg-border hidden md:block"></div>

            {experienceData.map((exp, index) => (
                <div key={index} className="mb-8 flex justify-between items-center w-full flex-col md:flex-row">
                    <div className="md:w-[calc(50%-2rem)]">
                        {index % 2 === 0 ? (
                           <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <CardHeader>
                                    <CardTitle>{exp.role}</CardTitle>
                                    <CardDescription>{exp.company} | {exp.period}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                        {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </CardContent>
                            </Card>
                        ) : <div />}
                    </div>
                    
                    <div className="z-10 bg-background p-2 rounded-full border-2 border-primary hidden md:block">
                        <Briefcase className="h-6 w-6 text-primary" />
                    </div>

                     <div className="md:w-[calc(50%-2rem)]">
                        {index % 2 !== 0 ? (
                           <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <CardHeader>
                                    <CardTitle>{exp.role}</CardTitle>
                                    <CardDescription>{exp.company} | {exp.period}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                        {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </CardContent>
                            </Card>
                        ) : (
                           <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 md:hidden mt-8">
                                <CardHeader>
                                    <CardTitle>{exp.role}</CardTitle>
                                    <CardDescription>{exp.company} | {exp.period}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                        {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
