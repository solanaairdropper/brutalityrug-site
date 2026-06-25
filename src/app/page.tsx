"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Target,
  TrendingUp,
  Shield,
  Wallet,
  Bot,
  ArrowRight,
  ChevronDown,
  Rocket,
  Timer,
  Users,
  BarChart3,
  Send,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="stat-value"
    >
      {value.toLocaleString()}{suffix}
    </motion.span>
  );
}

const features = [
  {
    icon: Target,
    title: "Token Sniper",
    description: "Lightning-fast detection and purchase of new pump.fun launches. Be first, always.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Volume Bot",
    description: "Generate organic-looking volume with wallet farms. Pump your bags strategically.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Timer,
    title: "Auto-Sell Triggers",
    description: "Set conditions to auto-dump: price targets, holder count, time limits, whale detection.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Wallet,
    title: "Wallet Farms",
    description: "Manage multiple wallets for coordinated buys. Create natural-looking holder growth.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Rocket,
    title: "Token Creator",
    description: "Launch pump.fun tokens with IPFS metadata, viral names, and instant bundled buys.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Shield,
    title: "MEV Protection",
    description: "Jito bundles ensure your transactions land. No more sandwich attacks or failed txs.",
    color: "from-violet-500 to-purple-500",
  },
];

const stats = [
  { value: 50000, suffix: "+", label: "Transactions" },
  { value: 99.2, suffix: "%", label: "Success Rate" },
  { value: 500, suffix: "ms", label: "Avg Speed" },
  { value: 24, suffix: "/7", label: "Uptime" },
];

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Start the bot on Telegram and set your wallet with a simple command.",
  },
  {
    number: "02",
    title: "Configure",
    description: "Set your targets, triggers, and risk parameters. Enable the features you need.",
  },
  {
    number: "03",
    title: "Profit",
    description: "Let the bot handle execution. Snipe, pump, dump — all automated.",
  },
];

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Live on Solana Mainnet</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="gradient-text">Brutality</span>
            <span className="text-white">Rug</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-4"
          >
            The most ruthless Solana trading bot.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto mb-12"
          >
            Snipe launches. Create tokens. Farm wallets. Auto-dump.
            <br />
            Maximum extraction. Zero mercy.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://t.me/BrutalityRug_Bot"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 pulse-glow"
            >
              <Send className="w-5 h-5" />
              Launch Bot
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass font-medium transition-all duration-300 hover:bg-white/10"
            >
              Learn More
              <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gray-500 bounce-down" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center glass rounded-2xl p-6"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for <span className="gradient-text">Extraction</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Every feature engineered for one purpose: maximum profit.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass rounded-2xl p-8 transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Three Steps to <span className="gradient-text">Profit</span>
            </h2>
            <p className="text-xl text-gray-400">
              From zero to extracting in minutes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <div className="border-gradient rounded-2xl p-8">
                  <div className="text-6xl font-bold text-white/10 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 gradient-text">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-purple-500/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Terminal Preview Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm text-gray-400 font-mono">@BrutalityRug_Bot</span>
            </div>
            {/* Terminal content */}
            <div className="p-6 font-mono text-sm space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-400">$</span>
                <span className="text-gray-300">/start</span>
              </div>
              <div className="text-purple-400">
                🔥 Welcome to BrutalityRug Bot
              </div>
              <div className="text-gray-400 pl-6">
                ├── Token Sniper: <span className="text-green-400">READY</span><br />
                ├── Volume Bot: <span className="text-green-400">READY</span><br />
                ├── Auto-Sell: <span className="text-green-400">ARMED</span><br />
                └── Wallet Farm: <span className="text-yellow-400">3 wallets</span>
              </div>
              <div className="flex items-start gap-3 mt-4">
                <span className="text-green-400">$</span>
                <span className="text-gray-300">/snipe <span className="text-purple-400">--new-launches</span></span>
              </div>
              <div className="text-green-400">
                ✓ Sniper activated. Monitoring pump.fun...
              </div>
              <div className="text-pink-400 animate-pulse">
                █ Waiting for targets...
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="gradient-text">Extract</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join the most ruthless traders on Solana. The bot is live. The features are ready. Your profits are waiting.
          </p>
          <a
            href="https://t.me/BrutalityRug_Bot"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] rounded-full font-semibold text-xl transition-all duration-500 hover:scale-105 hover:bg-right pulse-glow"
          >
            <Bot className="w-6 h-6" />
            Start Trading Now
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">BrutalityRug</span>
            </div>
            <div className="flex items-center gap-6 text-gray-400">
              <a
                href="https://t.me/BrutalityRug_Bot"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
            <p>Use at your own risk. Cryptocurrency trading involves substantial risk of loss.</p>
            <p className="mt-2">© 2024 BrutalityRug. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
