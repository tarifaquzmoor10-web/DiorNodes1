import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  HardDrive, 
  Zap, 
  Headphones, 
  ChevronRight,
  Gamepad2,
  Cpu,
  Globe,
  Server
} from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-white">
      <AnimatedBackground />
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center min-h-[90vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-[#00F0FF]/30"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00F0FF]"></span>
            </span>
            <span className="text-sm font-medium text-[#00F0FF]">Next-Gen Infrastructure Online</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-white leading-[1.1] mb-6 max-w-5xl"
          >
            Premium Minecraft <br className="hidden md:block" />
            <span className="gradient-text text-glow-purple">Server Hosting</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/60 mb-10 max-w-3xl leading-relaxed"
          >
            Ultra fast NVMe servers powered by latest processors, equipped with powerful multi-terabit DDoS protection for uninterrupted gameplay.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <a 
              href="#plans"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(138,43,226,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Get Started <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://discord.gg/PghzUW3cvJ" target="_blank" rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              Join Discord
            </a>
          </motion.div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            title="Why Choose Dior Nodes?" 
            subtitle="We provide industry-leading features so you can focus on building your community, while we handle the technical heavy lifting."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "DDoS Protection",
                desc: "Enterprise-grade mitigation keeping your server online through complex L3-L7 attacks.",
                color: "from-blue-500 to-cyan-400"
              },
              {
                icon: HardDrive,
                title: "NVMe SSD Storage",
                desc: "Lightning-fast read/write speeds ensuring instant chunk loading and zero lag.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Zap,
                title: "Instant Setup",
                desc: "Your server is deployed automatically within seconds of payment confirmation.",
                color: "from-amber-400 to-orange-500"
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                desc: "Our dedicated team of experts is always available via Discord and tickets.",
                color: "from-emerald-400 to-teal-500"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel glass-panel-hover p-8 rounded-3xl relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-bl-[100px] transition-opacity duration-500 group-hover:opacity-20`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-[1px] mb-6 shadow-lg`}>
                  <div className="w-full h-full bg-[#05050A] rounded-[15px] flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="plans" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            title="Simple, Transparent Pricing" 
            subtitle="Choose the perfect plan for your community. No hidden fees, cancel anytime."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-center mt-12">
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 rounded-3xl flex flex-col h-full"
            >
              <div className="mb-8">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#00F0FF] bg-[#00F0FF]/10 rounded-full">Starter</span>
                <h3 className="text-3xl font-display font-bold text-white mt-4 mb-2">Basic Plan</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold text-white">₹99</span>
                  <span className="text-white/50">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  { icon: Cpu, text: "2GB RAM Allocation" },
                  { icon: HardDrive, text: "20GB NVMe SSD" },
                  { icon: Gamepad2, text: "Unlimited Slots" },
                  { icon: Globe, text: "Standard Support" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <item.icon className="w-5 h-5 text-[#00F0FF]" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://billing.diornodes.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Select Basic
              </a>
            </motion.div>

            {/* Pro Plan (Highlighted) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative p-[2px] rounded-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#00F0FF] to-[#8A2BE2] rounded-3xl opacity-50 blur-[2px]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#00F0FF] to-[#8A2BE2] rounded-3xl"></div>
              
              <div className="relative bg-[#0A0A0F] p-8 rounded-3xl h-full flex flex-col transform lg:-translate-y-4 shadow-[0_0_40px_rgba(138,43,226,0.2)]">
                <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
                  <span className="bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-white px-4 py-1 text-sm font-bold rounded-full shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
                
                <div className="mb-8 mt-4">
                  <h3 className="text-3xl font-display font-bold text-white mb-2">Pro Plan</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-display font-bold text-white">₹199</span>
                    <span className="text-white/50">/month</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    { icon: Cpu, text: "4GB RAM Allocation" },
                    { icon: HardDrive, text: "40GB NVMe SSD" },
                    { icon: Gamepad2, text: "Unlimited Slots" },
                    { icon: Globe, text: "Priority Support" },
                    { icon: ShieldCheck, text: "Advanced DDoS Auth" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white">
                      <item.icon className="w-5 h-5 text-[#8A2BE2]" />
                      <span className="font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://billing.diornodes.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center"
                >
                  Select Pro
                </a>
              </div>
            </motion.div>

            {/* Ultra Plan */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-panel p-8 rounded-3xl flex flex-col h-full"
            >
              <div className="mb-8">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF007F] bg-[#FF007F]/10 rounded-full">Extreme</span>
                <h3 className="text-3xl font-display font-bold text-white mt-4 mb-2">Ultra Plan</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold text-white">₹399</span>
                  <span className="text-white/50">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  { icon: Cpu, text: "8GB RAM Allocation" },
                  { icon: HardDrive, text: "80GB NVMe SSD" },
                  { icon: Gamepad2, text: "Unlimited Slots" },
                  { icon: Globe, text: "24/7 Dedicated Support" },
                  { icon: Zap, text: "Extreme Performance" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <item.icon className="w-5 h-5 text-[#FF007F]" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://billing.diornodes.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Select Ultra
              </a>
            </motion.div>
          </div>
        </section>

        {/* DISCORD CTA SECTION */}
        <section id="support" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[2.5rem] overflow-hidden"
          >
            {/* Background elements for CTA */}
            <div className="absolute inset-0 bg-[#0A0A0F]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF]/10 to-[#8A2BE2]/10 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#8A2BE2]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#00F0FF]/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
            
            <div className="relative p-10 md:p-20 text-center flex flex-col items-center border border-white/10 rounded-[2.5rem] glass-panel">
              <div className="w-20 h-20 bg-[#5865F2]/20 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm border border-[#5865F2]/30">
                {/* Custom Discord Icon SVg */}
                <svg width="40" height="40" viewBox="0 0 127.14 96.36" fill="#5865F2">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.3,46,96.19,53,91.08,65.69,84.69,65.69Z"/>
                </svg>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Join Our Community
              </h2>
              <p className="text-xl text-white/70 mb-10 max-w-2xl">
                Get instantly notified about updates, participate in giveaways, or get rapid support directly from our staff and community members.
              </p>
              
              <a 
                href="https://discord.gg/PghzUW3cvJ" 
                target="_blank" 
                rel="noreferrer"
                className="px-10 py-5 rounded-2xl font-bold text-xl text-white bg-[#5865F2] hover:bg-[#4752C4] shadow-[0_0_30px_rgba(88,101,242,0.4)] hover:shadow-[0_0_50px_rgba(88,101,242,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
              >
                Join Discord Server
              </a>
            </div>
          </motion.div>
        </section>

        {/* OWNER INFO SECTION */}
        <section className="py-12 px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex flex-col items-center glass-panel px-8 py-6 rounded-2xl border-white/5"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00F0FF] to-[#8A2BE2] mb-3 flex items-center justify-center">
              <span className="font-display font-bold text-white text-lg">DH</span>
            </div>
            <p className="text-white/90 font-medium mb-1">Owned & Managed by Dior Hosting Team</p>
            <p className="text-sm text-white/40 font-mono">Discord ID: 1304041117980823565</p>
          </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 bg-[#05050A]/80 backdrop-blur-lg pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Server className="w-6 h-6 text-[#00F0FF]" />
                <span className="font-display font-bold text-2xl text-white">
                  Dior <span className="text-[#8A2BE2]">Nodes</span>
                </span>
              </div>
              <p className="text-white/50 leading-relaxed max-w-sm">
                Providing premium, high-performance Minecraft server hosting with uncompromised DDoS protection and NVMe storage.
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#home" className="hover:text-[#00F0FF] transition-colors">Home</a></li>
                <li><a href="#plans" className="hover:text-[#00F0FF] transition-colors">Pricing Plans</a></li>
                <li><a href="#features" className="hover:text-[#00F0FF] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#00F0FF] transition-colors">Client Panel</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-white mb-6">Legal</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#" className="hover:text-[#8A2BE2] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#8A2BE2] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#8A2BE2] transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>© {new Date().getFullYear()} Dior Hosting. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <span className="text-red-500">♥</span> for gamers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
