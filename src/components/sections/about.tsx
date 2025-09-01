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
              src="https://picsum.photos/400/500"
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
                  I've always been passionate about technology, even before I knew what a software engineer did. My journey began in a residential school where personal gadgets were off-limits. The only tech access we had was during computer class, where media playback was restricted. As a music lover, this was a challenge I was determined to overcome.
                </p>
                <p>
                  After learning from my computer teacher that websites were built with something called HTML, a friend and I had an idea: what if we built a website to play music and videos? We dove into library books, starting with simple `<h1>` tags to display our names. Our teacher, impressed by our initiative, gave us more freedom to experiment. Soon, we were using `<audio>` and `<video>` tags to bring our favorite songs to the classroom. That was my "Hello, World!" moment—not just printing text, but solving a problem with code.
                </p>
                <p>
                  That initial spark has grown into a career. Today, I channel that same curiosity and problem-solving spirit into building full-stack web and mobile applications that are both functional and elegant.
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
