import { motion } from "framer-motion";
import { ChevronLeft, Check, Zap, Cpu, ShieldCheck, Headphones, Gauge } from "lucide-react";
import { Link } from "wouter";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";

export default function DiscordBotHosting() {
  const features = [
    {
      icon: Zap,
      title: "Always-On Uptime",
      description: "Your bots run 24/7 without interruption. Never miss a command, event, or user interaction again."
    },
    {
      icon: Gauge,
      title: "Low-Latency Response",
      description: "Optimized network connections ensure lightning-fast command execution and minimal response times for your users."
    },
    {
      icon: Cpu,
      title: "Powerful Hardware",
      description: "Enterprise-grade processors deliver the performance your bots need to handle thousands of concurrent users."
    },
    {
      icon: ShieldCheck,
      title: "Automatic Backups",
      description: "Your bot data is backed up automatically every day. Never lose your bot's configuration or database."
    },
    {
      icon: Headphones,
      title: "Expert Technical Support",
      description: "Our team knows Discord bots inside and out. Get help with setup, optimization, and troubleshooting anytime."
    },
    {
      icon: Gauge,
      title: "Resource Monitoring",
      description: "Real-time dashboard shows your bot's CPU, memory, and network usage. Optimize for peak performance."
    }
  ];

  const benefits = [
    "Multiple Python/Node.js bot support on one server",
    "Full SSH access for complete control",
    "Root-level permissions for any bot library",
    "Discord.py, discord.js, and all frameworks supported",
    "Scheduled tasks and cron jobs included",
    "Database hosting (PostgreSQL, MongoDB)",
    "SSL certificates included",
    "Unlimited bandwidth"
  ];

  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-white">
      <AnimatedBackground />
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-[#5865F2] hover:text-white transition-colors mb-8">
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
              Discord Bot <br className="hidden md:block" />
              <span className="text-[#5865F2]">Hosting</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl">
              Run your Discord bots 24/7 with powerful hardware, low latency and reliable uptime. Perfect for any Discord bot project.
            </p>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Why Host Your Bots With Us?</h2>
          <p className="text-white/60 mb-12 max-w-2xl">Enterprise hosting optimized for Discord bot applications:</p>

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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5865F2] to-[#4752C4] p-[1px] mb-6 shadow-[0_0_15px_rgba(88,101,242,0.2)] group-hover:shadow-[0_0_25px_rgba(88,101,242,0.4)] transition-shadow duration-300">
                  <div className="w-full h-full bg-[#05050A] rounded-[10px] flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#5865F2]" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Everything Included */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <div className="glass-panel p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2]/10 to-[#4752C4]/10 mix-blend-overlay pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12">Everything Included</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-start gap-4"
                  >
                    <Check className="w-6 h-6 text-[#5865F2] flex-shrink-0 mt-1" />
                    <span className="text-lg text-white">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Simple Pricing</h2>
          <p className="text-white/60 mb-12">Choose the plan that fits your bot hosting needs.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "₹99", ram: "1GB", bots: "Up to 3 bots" },
              { name: "Pro", price: "₹199", ram: "2GB", bots: "Up to 10 bots", popular: true },
              { name: "Enterprise", price: "₹499", ram: "4GB", bots: "Unlimited bots" }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-panel p-8 rounded-2xl flex flex-col ${plan.popular ? "ring-2 ring-[#5865F2]/50" : ""}`}
              >
                {plan.popular && (
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs font-bold uppercase text-[#5865F2] bg-[#5865F2]/10 rounded-full">
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
                    <Check className="w-5 h-5 text-[#5865F2]" />
                    <span>{plan.ram} RAM</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Check className="w-5 h-5 text-[#5865F2]" />
                    <span>{plan.bots}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Check className="w-5 h-5 text-[#5865F2]" />
                    <span>24/7 Uptime</span>
                  </div>
                </div>
                <a
                  href="https://billing.diornodes.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-bold text-center transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#5865F2] to-[#4752C4] text-white hover:shadow-[0_0_30px_rgba(88,101,242,0.4)]"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-12 rounded-3xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Host Your Bots Today</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Get your Discord bots online in minutes with reliable, fast hosting infrastructure.
            </p>
            <a
              href="https://billing.diornodes.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#5865F2] to-[#4752C4] shadow-[0_0_30px_rgba(88,101,242,0.3)] hover:shadow-[0_0_50px_rgba(88,101,242,0.5)] hover:scale-105 transition-all duration-300"
            >
              Buy Now
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
