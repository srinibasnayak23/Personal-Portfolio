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
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A glimpse into my skills, experience, and passion for technology.</p>
        </div>
      
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <Image
              src="https://placehold.co/400x500.png"
              alt="Profile photo"
              width={400}
              height={500}
              className="rounded-lg shadow-xl object-cover w-full max-w-sm"
              data-ai-hint="person coding"
            />
          </div>
          <div className="lg:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Journey as a Developer</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  From a young age, I&apos;ve been captivated by how things work, which naturally led me to the world of software engineering. My journey started with a simple &quot;Hello, World!&quot; and has since evolved into building full-stack web and mobile applications that solve real-world problems.
                </p>
                <p>
                  I am a recent graduate with a strong foundation in computer science and hands-on experience with both web technologies and native Android development. I thrive in collaborative environments and am always eager to learn new technologies and improve my craft. My goal is to leverage my skills to build beautiful, functional, and scalable software products.
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
                    <Badge key={skill} variant="default" className="text-sm font-normal bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
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
