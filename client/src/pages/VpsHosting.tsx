import { motion } from "framer-motion";
import { ChevronLeft, Check, Server, Shield, Zap, Lock, Gauge, Globe } from "lucide-react";
import { Link } from "wouter";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";

export default function VpsHosting() {
  const features = [
    {
      icon: Lock,
      title: "Full Root Access",
      description: "Complete control over your server. Install any software, configure exactly as needed, no restrictions."
    },
    {
      icon: Server,
      title: "Dedicated Resources",
      description: "Your own CPU cores, RAM, and storage. No sharing with other users means predictable, reliable performance."
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Firewall protection, DDoS mitigation, and regular security updates. Your data stays safe."
    },
    {
      icon: Zap,
      title: "Blazing Fast Performance",
      description: "Latest generation processors and NVMe storage for exceptional speed and responsiveness."
    },
    {
      icon: Globe,
      title: "Global Data Centers",
      description: "Choose from multiple locations worldwide to host closer to your users and reduce latency."
    },
    {
      icon: Gauge,
      title: "Real-Time Monitoring",
      description: "Dashboard shows CPU, memory, disk, and network usage in real-time. Optimize your setup easily."
    }
  ];

  const benefits = [
    "Complete root/sudo access to your server",
    "Customizable resource allocation",
    "Multiple Linux distributions supported (Ubuntu, Debian, CentOS, etc.)",
    "Static IP address included",
    "rDNS (reverse DNS) configuration",
    "Free SSL certificates",
    "Unlimited bandwidth",
    "Free backups every 24 hours",
    "One-click OS reinstall",
    "Advanced firewall rules",
    "Priority support team",
    "99.9% uptime SLA"
  ];

  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-white">
      <AnimatedBackground />
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-[#8A2BE2] hover:text-white transition-colors mb-8">
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
              24/7 VPS <br className="hidden md:block" />
              <span className="text-[#8A2BE2]">Hosting</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl">
              Deploy powerful virtual private servers with full root access and enterprise-grade infrastructure. Perfect for web applications, APIs, and custom projects.
            </p>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Why Choose Our VPS?</h2>
          <p className="text-white/60 mb-12 max-w-2xl">Enterprise-grade VPS hosting with complete flexibility:</p>

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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8A2BE2] to-[#B026FF] p-[1px] mb-6 shadow-[0_0_15px_rgba(138,43,226,0.2)] group-hover:shadow-[0_0_25px_rgba(138,43,226,0.4)] transition-shadow duration-300">
                  <div className="w-full h-full bg-[#05050A] rounded-[10px] flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#8A2BE2]" />
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2]/10 to-[#B026FF]/10 mix-blend-overlay pointer-events-none"></div>
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
                    <Check className="w-6 h-6 text-[#8A2BE2] flex-shrink-0 mt-1" />
                    <span className="text-lg text-white">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Flexible Plans</h2>
          <p className="text-white/60 mb-12">Choose your perfect VPS configuration. Need something custom? Contact our team.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "₹199", cores: "2 vCPU", ram: "2GB", storage: "40GB SSD" },
              { name: "Professional", price: "₹399", cores: "4 vCPU", ram: "4GB", storage: "80GB SSD", popular: true },
              { name: "Enterprise", price: "₹799", cores: "8 vCPU", ram: "8GB", storage: "160GB SSD" }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-panel p-8 rounded-2xl flex flex-col ${plan.popular ? "ring-2 ring-[#8A2BE2]/50" : ""}`}
              >
                {plan.popular && (
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs font-bold uppercase text-[#8A2BE2] bg-[#8A2BE2]/10 rounded-full">
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
                    <Check className="w-5 h-5 text-[#8A2BE2]" />
                    <span>{plan.cores}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Check className="w-5 h-5 text-[#8A2BE2]" />
                    <span>{plan.ram} RAM</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Check className="w-5 h-5 text-[#8A2BE2]" />
                    <span>{plan.storage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Check className="w-5 h-5 text-[#8A2BE2]" />
                    <span>Full Root Access</span>
                  </div>
                </div>
                <a
                  href="https://billing.diornodes.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-bold text-center transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#8A2BE2] to-[#B026FF] text-white hover:shadow-[0_0_30px_rgba(138,43,226,0.4)]"
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Deploy Your VPS Now</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Get your virtual server online in minutes with full root access and enterprise reliability.
            </p>
            <a
              href="https://billing.diornodes.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#8A2BE2] to-[#B026FF] shadow-[0_0_30px_rgba(138,43,226,0.3)] hover:shadow-[0_0_50px_rgba(138,43,226,0.5)] hover:scale-105 transition-all duration-300"
            >
              Deploy Now
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
