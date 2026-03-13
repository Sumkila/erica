import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import NewsTicker from "@/components/common/news-ticker";
import PeacockLogo from "@/components/common/peacock-logo";
import WavyText from "@/components/common/wavy-text";
import { ContactDialog } from "@/components/common/contact-dialog";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Web Development",
    description: "Robust, scalable, and blazingly fast websites built on modern architecture. We don't just build sites, we build digital fortresses.",
  },
  {
    title: "Branding & Identity",
    description: "Creating bold, unforgettable brands that cut through the noise. Your identity, engineered for impact.",
  },
  {
    title: "Digital Strategy",
    description: "Data-driven strategies that deliver results. We map the terrain, you conquer it. No fluff, just functional plans.",
  },
  {
    title: "UI/UX Design",
    description: "Clarity, function, and brutalist beauty. We design user experiences that are intuitive and powerful, not just pretty.",
  },
];

const newsItems1 = [
  { text: "Erica announces record profits;", color: "text-foreground" },
  { text: "CEO says 'we're just getting started'", color: "text-accent" },
  { text: "and yes, we do have cookies.", color: "text-primary" },
  { text: "Our branding is so brutalist,", color: "text-foreground" },
  { text: "it made an onion cry.", color: "text-accent" },
  { text: "And then we designed the onion a new, more efficient logo.", color: "text-primary" },
];

const newsItems2 = [
  { text: "Latest project launched ahead of schedule;", color: "text-accent" },
  { text: "Sources say magic might be involved.", color: "text-primary" },
  { text: "Groundbreaking discovery:", color: "text-foreground" },
  { text: "Erica's developers are powered by coffee and sheer willpower.", color: "text-accent" },
  { text: "And more coffee.", color: "text-primary" },
];

const newsItems3 = [
  { text: "Yes We Can.", color: "text-primary" },
  { text: "No, really.", color: "text-accent" },
  { text: "We checked.", color: "text-foreground" },
  { text: "It's possible.", color: "text-accent" },
  { text: "Erica Core redefines 'done' to mean 'actually done, tested, and deployed.'", color: "text-primary" },
  { text: "Other agencies reportedly confused.", color: "text-foreground" },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 md:pt-28">
        <div className="container mx-auto px-4">

          <section className="text-center py-16 md:py-24">
            <WavyText text="Proven Success" as="h1" className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter justify-center" />
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-code">
              The ultimate digital backbone—the "Yes We Can" powerhouse covering everything from WebDev to Branding.
            </p>
          </section>

          <NewsTicker words={newsItems1} />

          <section id="solutions" className="py-16 md:py-24 text-center">
            <div className="flex flex-col items-center justify-center gap-4 mb-12">
              <PeacockLogo className="w-24 h-24" />
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
                Erica Solutions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
              {services.map((service, index) => (
                <div key={service.title} className="relative p-8 border-2 border-dotted border-muted-foreground/50 bg-background/80 backdrop-blur-sm">
                  <h3 className="font-headline text-2xl font-bold tracking-tight text-primary">{service.title}</h3>
                  <p className="mt-4 text-muted-foreground font-code">{service.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          <NewsTicker words={newsItems2} />

          <section id="ethos" className="py-16 md:py-24">
            <h2 className="text-center text-5xl md:text-6xl font-black tracking-tighter mb-12">Engineered Reliability</h2>
            <div className="max-w-4xl mx-auto space-y-[-1px]">
              <div className="relative p-8 border-2 border-dotted border-muted-foreground/50 bg-background/80 backdrop-blur-sm z-30">
                <h3 className="font-headline text-2xl font-bold tracking-tight text-accent">Precision & Robustness</h3>
                <p className="mt-4 text-muted-foreground font-code">Our approach uses Brutalism to emphasize precision and robustness. Think fixed-width layouts that never break, massive, legible titles, and a very limited, functional color palette. It's a technical manual and an architectural blueprint in one.</p>
              </div>
              <div className="relative p-8 border-2 border-dotted border-muted-foreground/50 bg-background/80 backdrop-blur-sm z-20">
                <h3 className="font-headline text-2xl font-bold tracking-tight text-accent">Clarity in Structure</h3>
                 <p className="mt-4 text-muted-foreground font-code">All content is presented in clear, well-defined vertical and horizontal blocks. No ambiguity, no clutter. Just pure, unadulterated function that delivers the message with force and clarity.</p>
              </div>
               <div className="relative p-8 border-2 border-dotted border-muted-foreground/50 bg-background/80 backdrop-blur-sm z-10">
                <h3 className="font-headline text-2xl font-bold tracking-tight text-accent">Data Statements</h3>
                 <p className="mt-4 text-muted-foreground font-code">While adhering to Brutalist starkness, we allow for dynamic, high-impact data visualizations. Simple charts and graphs presented with Brutalist styling, accented by our strong, authoritative color palette.</p>
              </div>
            </div>
          </section>

          <NewsTicker words={newsItems3} />

          <section id="contact" className="text-center py-16 md:py-24">
             <WavyText text="Get In Touch" as="h2" className="text-5xl md:text-6xl font-black tracking-tighter justify-center" />
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-code">
              Have a project in mind? We'd love to hear about it.
            </p>
            <div className="mt-8">
              <ContactDialog>
                <Button size="lg" className="font-code text-lg">
                  Open Command Line
                </Button>
              </ContactDialog>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
