export default function CTA(){
  return (
    <section className="section bg-fondeka-dark text-white">
      <div className="container-pad grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="h">Meet money without borders</h2>
          <p className="mt-3 text-white/80">Collect and pay everywhere — Mobile Money, cards and crypto.</p>
        </div>
        <div className="flex gap-3 md:justify-end">
          <a href="#download" className="btn btn-primary">Get it on Android</a>
          <a href="#download" className="btn btn-ghost bg-white text-fondeka-dark">iOS (soon)</a>
        </div>
      </div>
    </section>
  );
}
