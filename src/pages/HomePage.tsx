import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Globe, Layers3, Network, ChevronDown, Cloud, ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
const themes = [
  {
    icon: Globe,
    title: 'The “Region-less” Region Earth Platform',
    description:
      "Deploy globally, not regionally. Our platform is the entire global network. You don't choose a region. You deploy once, and your code runs everywhere, by default.",
  },
  {
    icon: Layers3,
    title: 'The Consolidated Toolchain',
    description:
      'The era of stitching together a dozen different services is over. One platform and one toolchain takes you from source code to a globally-scaled, secure application in minutes.',
  },
  {
    icon: Network,
    title: 'The Opinionated Architecture',
    description:
      'By building on a single, global edge network, we eliminate entire categories of problems. Deploy without thinking about regions, VM sizes, load balancers, or cold starts.',
  },
];
export function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
      <HeroSection />
      <main id="themes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex flex-col items-center justify-center py-16 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
            }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Our Core Philosophy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you'll see is built on these three foundational principles.
            </p>
          </motion.div>
          <ThemesSlider />
        </div>
      </main>
      <Footer />
    </div>
  );
}
function ThemesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === themes.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? themes.length - 1 : prev - 1));
  };
  const slideVariants: Variants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -50, scale: 0.95 },
  };
  const theme = themes[currentSlide];
  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-5xl min-h-[400px] md:min-h-[350px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full"
          >
            <Card className="h-full bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 shadow-lg p-8 md:p-12">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6">
                <div className="p-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500">
                  <theme.icon className="h-10 w-10" />
                </div>
                <CardTitle className="font-display text-3xl md:text-4xl font-semibold text-slate-800 dark:text-slate-200">
                  {theme.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{theme.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute -bottom-24 flex items-center justify-center w-full gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full h-12 w-12 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm hover:scale-105 active:scale-95 transition-transform"
          aria-label="Previous Theme"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <div className="flex items-center gap-3">
          {themes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-all duration-300',
                currentSlide === index ? 'w-8 bg-blue-500' : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
              )}
              aria-label={`Go to theme ${index + 1}`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full h-12 w-12 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm hover:scale-105 active:scale-95 transition-transform"
          aria-label="Next Theme"
        >
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(135deg, hsl(210 40% 98%), hsl(222 47% 95%), hsl(210 40% 98%))',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      <div className="absolute inset-0 z-10 bg-grid-slate-200/[0.4] dark:bg-grid-slate-700/[0.2] [mask-image:linear-gradient(to_bottom,white_0%,transparent_100%)]" />
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Everything we learned from powering 20% of the Internet—yours by default
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          Cloudflare is your AI Cloud with compute, AI inference, and storage — letting you ship applications instead of managing infrastructure.
        </motion.p>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <a
          href="#themes"
          aria-label="Scroll down to themes"
          className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <Cloud className="h-5 w-5 text-orange-500" />
            <span className="font-semibold">Cloudflare</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built with ❤️ at Cloudflare. &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}