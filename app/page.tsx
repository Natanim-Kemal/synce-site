import { Download, Zap, Shield, Smartphone } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <img src="/synce.svg" alt="Synce Logo" className="w-8 h-8 rounded-lg" />
            Synce
          </h1>
          <a
            href="https://github.com/natanim-kemal/synce"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
            PDF Sync Made Simple
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
            Seamless PDF synchronization across all your devices.
            Built with Flutter and NestJS for maximum performance and reliability.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#download"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform shadow-lg shadow-white/20"
            >
              <Download className="w-5 h-5" />
              Download Now
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-neutral-300 leading-relaxed">
                Optimized synchronization protocol for maximum transfer speeds.
                Your PDFs sync instantly across all devices.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure & Private</h3>
              <p className="text-neutral-300 leading-relaxed">
                End-to-end encryption ensures your documents stay private.
                Your data is secure with enterprise-grade protection.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cross-Platform</h3>
              <p className="text-neutral-300 leading-relaxed">
                Native apps for Android and Windows.
                Access your PDFs on mobile and desktop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How It Works
          </h2>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Download & Install</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Download Synce for your platform and install it. Create an account
                  or sign in to get started.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Add Your PDFs</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Drag and drop your PDF files into Synce. They'll be automatically
                  uploaded and synced to the cloud.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Access Anywhere</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Open Synce on any of your devices. Your PDFs are always up-to-date
                  and available offline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Download Synce
          </h2>
          <p className="text-neutral-300 mb-12">
            Available for Android and Windows. Choose your platform below.
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {/* Windows */}
            <a
              href="#"
              className="flex items-center justify-center gap-3 p-6 rounded-xl border border-white/20 hover:bg-white/5 transition-all backdrop-blur-sm group"
            >
              <Download className="w-5 h-5" />
              <span className="font-semibold">Windows</span>
            </a>

            {/* Android */}
            <a
              href="#"
              className="flex items-center justify-center gap-3 p-6 rounded-xl border border-white/20 hover:bg-white/5 transition-all backdrop-blur-sm group"
            >
              <Download className="w-5 h-5" />
              <span className="font-semibold">Android</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-neutral-400 text-sm">
          © 2025 Synce. Built with Flutter & NestJS.
        </div>
      </footer>
    </main>
  );
}
