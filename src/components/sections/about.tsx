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
              src="/profile.jpg" // replace with your profile image path
              alt="Portrait of Srinivas, Software Developer"
              width={400}
              height={500}
              priority
              className="rounded-lg shadow-xl object-cover w-full max-w-sm"
            />
          </div>
          <div className="lg:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Journey as a Developer</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  My passion for technology began early, even before I fully understood what a software engineer did. 
                  In school, where personal gadgets were restricted, I discovered HTML and built a simple website 
                  with a friend to play music and videos for our class. That experience became my true “Hello, World!” moment—realizing 
                  that code could solve problems in creative ways.
                </p>
                <p>
                  Today, that same curiosity drives my career as a developer. I focus on building full-stack web and mobile 
                  applications that are functional, user-friendly, and elegant—helping businesses and users achieve more 
                  through technology.
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
