import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OurSaga = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-extralight tracking-wide text-center mb-16 uppercase">
            Our Saga
          </h1>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide">
                Inspired by Artistry, Objects
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                At StudiaSaga, we believe that every space tells a story. Our journey began with a simple vision: to transform ordinary spaces into extraordinary experiences through thoughtful design and meticulous attention to detail.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                We draw inspiration from art, nature, and the unique character of each space we work with. Our team of passionate designers brings together diverse perspectives and expertise to create interiors that are not just beautiful, but meaningful.
              </p>
            </div>
            <div className="bg-luxury-beige h-96 rounded-lg"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="bg-luxury-beige h-96 rounded-lg md:order-1"></div>
            <div className="space-y-6 md:order-2">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide">
                Our Philosophy
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                We believe in creating spaces that harmonize functionality with aesthetic appeal. Every project is an opportunity to craft a unique narrative that reflects our clients' aspirations and lifestyle.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our process-driven approach ensures seamless execution from concept to completion. We collaborate closely with our clients, understanding their needs and translating their vision into reality with precision and care.
              </p>
            </div>
          </div>

          <div className="text-center space-y-8 py-16">
            <h2 className="text-3xl md:text-4xl font-extralight tracking-wide uppercase">
              What Drives Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
              <div className="space-y-4">
                <h3 className="text-xl font-light tracking-wide">Innovation</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Pushing boundaries while respecting timeless design principles.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-light tracking-wide">Sustainability</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Conscious choices for spaces that are beautiful and responsible.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-light tracking-wide">Excellence</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Uncompromising quality in every detail, every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurSaga;
