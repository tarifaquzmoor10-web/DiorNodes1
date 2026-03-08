import { motion } from "framer-motion";
import { ChevronLeft, Check, Zap, HardDrive, ShieldCheck, Headphones, Globe } from "lucide-react";
import { Link } from "wouter";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";

export default function MinecraftHosting() {
  const features = [
    {
      icon: HardDrive,
      title: "Ultra-Fast NVMe SSD Storage",
      description: "Lightning-quick read/write speeds ensure instant chunk loading with zero lag. Your players experience smooth gameplay even in heavily modified worlds."
    },
    {
      icon: ShieldCheck,
      title: "Enterprise-Grade DDoS Protection",
      description: "Multi-terabit mitigation system blocks L3-L7 attacks automatically. Your server stays online 24/7 through any attack scenario."
    },
    {
      icon: Zap,
      title: "Instant Deployment",
      description: "Your server is live within seconds of payment. No waiting, no hassle. Start playing immediately."
    },
    {
      icon: Globe,
      title: "Unlimited Player Slots",
      description: "Host as many players as you want without restrictions. Scale your community freely."
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      description: "Our dedicated team is always available via Discord and support tickets. Get help instantly when you need it."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Pre-optimized configurations for maximum TPS. Modded or vanilla, we've got you covered."
    }
  ];

  const plans = [
    {
      name: "Basic",
      price: "₹99",
      ram: "2GB",
      storage: "20GB",
      popular: false,
      color: "from-blue-500 to-cyan-400"
    },
    {
      name: "Pro",
      price: "₹199",
      ram: "4GB",
      storage: "40GB",
      popular: true,
      color: "from-[#00F0FF] to-[#8A2BE2]"
    },
    {
      name: "Ultra",
      price: "₹399",
      ram: "8GB",
      storage: "80GB",
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-white">
      <AnimatedBackground />
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-[#00F0FF] hover:text-white transition-colors mb-8">
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Premium Minecraft <br className="hidden md:block" />
              <span className="gradient-text text-glow-purple">Server Hosting</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl">
              High-performance servers powered by NVMe storage with instant setup and advanced DDoS protection. Perfect for communities of any size.
            </p>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Why Choose Our Minecraft Hosting?</h2>
          <p className="text-white/60 mb-12 max-w-2xl">Everything you need to run a successful Minecraft server:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F0FF] to-[#0080FF] p-[1px] mb-6 shadow-[0_0_15px_rgba(0,240,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-shadow duration-300">
                  <div className="w-full h-full bg-[#05050A] rounded-[10px] flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#00F0FF]" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <div className="glass-panel p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF]/10 to-[#8A2BE2]/10 mix-blend-overlay pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12">Everything Included</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "NVMe SSD Storage for ultra-fast load times",
                  "Automatic daily backups of your world",
                  "Advanced DDoS protection included",
                  "Free subdomain with your server",
                  "One-click mod installer support",
                  "Full FTP access to server files",
                  "30-day money-back guarantee",
                  "Priority customer support access"
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-start gap-4"
                  >
                    <Check className="w-6 h-6 text-[#00F0FF] flex-shrink-0 mt-1" />
                    <span className="text-lg text-white">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Simple Pricing</h2>
          <p className="text-white/60 mb-12">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-panel p-8 rounded-2xl flex flex-col ${plan.popular ? "ring-2 ring-[#00F0FF]/50" : ""}`}
              >
                {plan.popular && (
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs font-bold uppercase text-[#00F0FF] bg-[#00F0FF]/10 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/50">/month</span>
                </div>
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-center gap-2 text-white">
                    <Check className="w-5 h-5 text-[#00F0FF]" />
                    <span>{plan.ram} RAM</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Check className="w-5 h-5 text-[#00F0FF]" />
                    <span>{plan.storage} NVMe SSD</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Check className="w-5 h-5 text-[#00F0FF]" />
                    <span>Unlimited Players</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Check className="w-5 h-5 text-[#00F0FF]" />
                    <span>DDoS Protection</span>
                  </div>
                </div>
                <a
                  href="https://billing.diornodes.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-bold text-center transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-white hover:shadow-[0_0_30px_rgba(138,43,226,0.4)]"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-12 rounded-3xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Ready to Launch Your Server?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of communities already hosting with us. Get your server online in seconds.
            </p>
            <a
              href="https://billing.diornodes.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] shadow-[0_0_30px_rgba(138,43,226,0.3)] hover:shadow-[0_0_50px_rgba(138,43,226,0.5)] hover:scale-105 transition-all duration-300"
            >
              Start Your Free Trial
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
