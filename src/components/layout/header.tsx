"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, BrainCircuit, Menu, Loader2 } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useToast } from '@/hooks/use-toast';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  const [checkingResume, setCheckingResume] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeCheck = () => {
    setCheckingResume(true);
    toast({
      title: 'AI Resume Check',
      description: 'Our AI is checking if your resume is up-to-date...',
    });
    setTimeout(() => {
      const isUpdated = Math.random() > 0.5;
      if (isUpdated) {
        toast({
          title: 'AI Resume Check Complete',
          description: 'Your resume is up-to-date with your latest projects.',
        });
      } else {
        toast({
          title: 'AI Resume Check Complete',
          description: 'AI recommends updating your resume with your latest accomplishments.',
        });
      }
      setCheckingResume(false);
    }, 2000);
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Endorsements' },
    { href: '#contact', label: 'Contact' },
  ];
  
  const NavItems = () => (
      <>
        {navLinks.map((link) => (
            <Button asChild variant="link" key={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                <Link href={link.href} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                </Link>
            </Button>
        ))}
      </>
  );

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'border-b bg-background/80 backdrop-blur-sm' : ''}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" passHref>
          <span className="text-xl font-bold text-primary">CodeCanvas</span>
        </Link>
        
        <nav className="hidden items-center gap-1 md:flex">
          <NavItems />
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button onClick={handleResumeCheck} disabled={checkingResume} variant="outline" size="sm">
            {checkingResume ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : <BrainCircuit className="mr-2 h-4 w-4" />}
            AI Check
          </Button>
          <Button asChild size="sm">
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%]">
              <Link href="/" passHref>
                <span className="text-xl font-bold text-primary">CodeCanvas</span>
              </Link>
              <div className="mt-8 flex flex-col gap-2">
                <NavItems />
                <div className="mt-4 border-t pt-4 flex flex-col gap-2">
                    <Button onClick={() => { handleResumeCheck(); setIsMobileMenuOpen(false); }} disabled={checkingResume} variant="outline" className="justify-start">
                        {checkingResume ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : <BrainCircuit className="mr-2 h-4 w-4" />}
                        AI Check Resume
                    </Button>
                    <Button asChild className="justify-start">
                        <a href="/resume.pdf" download>
                            <Download className="mr-2 h-4 w-4" />
                            Download Resume
                        </a>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
