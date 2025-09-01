import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function About() {
  const skills = [
    'Kotlin', 'Jetpack Compose', 'Android SDK', 'React Native', 'SQLite', 'Room',
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express',
    'MongoDB', 'REST APIs', 'GraphQL', 'HTML5 & CSS3', 'Tailwind CSS',
    'Git & GitHub', 'Docker'
  ];

  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">About Me</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From building a simple music website in school to developing full-stack applications today, 
            my journey has always been about solving problems with code.
          </p>
        </div>
      
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <Image
              src="https://picsum.photos/400/500"
              alt="Portrait of Srinivas, Software Developer"
              width={400}
              height={500}
              priority
              className="rounded-lg shadow-xl object-cover w-full max-w-sm"
              data-ai-hint="developer portrait"
            />
          </div>
          <div className="lg:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Journey as a Developer</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  My passion for technology began early. In my fully residential school, where personal gadgets were not allowed, my curiosity for tech found an outlet in our computer classes. After learning about HTML, a friend and I decided to build a simple website to play music and videos—something otherwise restricted. We issued a book on HTML from the library and, after some trial and error with basic tags, we created a raw, unstyled site.
                </p>
                <p>
                  Our teacher was impressed by our initiative and gave us more freedom to explore. That simple project was my “Hello, World!” moment. It wasn’t just about listening to music; it was about realizing that code could bring ideas to life. That same drive to solve problems creatively has fueled my journey ever since, leading me to pursue a career in software engineering.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <Badge
                      key={skill}
                      variant="default"
                      className="text-sm font-normal bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
