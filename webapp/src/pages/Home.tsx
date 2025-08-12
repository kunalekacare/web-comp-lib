import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, BlurIn, AnimatedGrid, BentoGrid, BentoCard, Dock, DockIcon, AnimatedShinyText } from '@design-system/ui';
import { CheckCircle, Lightbulb, Users, Shield, BarChart, Briefcase } from 'lucide-react';
import { SiGmail, SiSlack, SiGoogledrive, SiZoom } from 'react-icons/si';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const features = [
  {
    Icon: BarChart,
    name: 'For HR professionals',
    description: 'Use a single cloud system for your employees.',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800" />
    ),
  },
  {
    Icon: Users,
    name: 'For managers & leaders',
    description: 'Get always up-to-date data and monitor performance.',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800" />
    ),
  },
  {
    Icon: Briefcase,
    name: 'For legal teams',
    description: 'CoreShift helps legal teams by streamlining compliance.',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800" />
    ),
  },
  {
    Icon: BarChart,
    name: 'All employee data at once',
    description: 'Access balances, career history, projects and more.',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800" />
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Web Component Library</h1>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href="/design-system">Design System</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/card-test">Card Test</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/button-test">Button Test</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/simple-test">Simple Test</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 00:00-00:01 Hero Section with AnimatedGrid + BlurIn */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] overflow-hidden px-4">
        <AnimatedGrid className="absolute inset-0 h-full w-full -z-10" maxOpacity={0.5} fade={true} />

        <div className="container mx-auto text-center">
          <BlurIn
            text="All-in-one HR platform"
            className="text-5xl font-bold text-foreground"
          />
          <p className="text-muted-foreground mt-2">
            A modern, all-in-one HR platform designed to perfectly fit your business needs.
          </p>

          <motion.div
            className="relative w-full max-w-xl h-64 flex items-center justify-center mt-8 mx-auto"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <Card className="p-4 bg-primary text-primary-foreground rounded-2xl">
                <CheckCircle size={48} />
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="absolute top-0 left-20">
              <Card className="p-3"><Lightbulb /></Card>
            </motion.div>
            <motion.div variants={itemVariants} className="absolute bottom-10 left-32">
              <Card className="p-3"><Users /></Card>
            </motion.div>
            <motion.div variants={itemVariants} className="absolute top-0 right-20">
              <Card className="p-3"><Shield /></Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 00:02-00:04 Built for everyone - BentoGrid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Built for everyone</h2>
          <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* 00:04-00:06 Integrations - Dock */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Integrate with your existing tools</h2>
          <Dock direction="middle">
            <DockIcon>
              <SiGmail className="h-10 w-10" />
            </DockIcon>
            <DockIcon>
              <SiSlack className="h-10 w-10" />
            </DockIcon>
            <DockIcon>
              <SiGoogledrive className="h-10 w-10" />
            </DockIcon>
            <DockIcon>
              <SiZoom className="h-10 w-10" />
            </DockIcon>
          </Dock>
        </div>
      </section>

      {/* 00:06-00:09 Words of Appreciation - AnimatedShinyText header */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-center items-center mb-8">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1">
              <span>✨ Words of Appreciation</span>
            </AnimatedShinyText>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[1,2,3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>Great experience</CardTitle>
                  <CardDescription>Jane Doe, Director of People Ops</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    CoreShift transformed our HR workflows. The animations and UX are delightful, and the data is always up-to-date.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Explore our comprehensive component library and design tokens
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/design-system">View Design System</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>Built with ❤️ using shadcn/ui, Radix UI, and Tailwind CSS</p>
          <p className="text-sm mt-2">
            Design tokens powered by Style Dictionary
          </p>
        </div>
      </footer>
    </div>
  );
}
