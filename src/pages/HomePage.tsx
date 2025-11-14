import { motion } from 'framer-motion';
import { Globe, Layers3, Network, ChevronDown, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};
export function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
      <HeroSection />
      <main id="themes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="show"
            animate="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {themes.map((theme, i) => (
              <motion.div key={i} variants={FADE_UP_ANIMATION_VARIANTS}>
                <Card className="h-full bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
                  <CardHeader className="flex flex-row items-center gap-4 pb-4">
                    <div className="p-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500">
                      <theme.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-display text-xl font-semibold text-slate-800 dark:text-slate-200">
                      {theme.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{theme.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-slate-50 via-blue-100 to-slate-200 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900"
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
          Build on the Future of Infrastructure
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          Discover the three core themes that define development on Cloudflare's
          region-less, consolidated, and opinionated platform.
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
            Built with ❤��� at Cloudflare. &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}