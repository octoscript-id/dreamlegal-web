import ServiceAccordion from "./ServiceAccordion";


export default function ServiceSection() {
  return (
    <section className="bg-gray-25 border border-brand-100 py-6 px-4 space-y-6">
        <h2 className="text-lg font-medium">Layanan Pendirian Usaha</h2>
        <div className="max-md:space-y-4 md:space-y-6">
            <div className="group max-md:space-y-4 md:grid grid-cols-2 gap-6">
              <ServiceAccordion />
              <ServiceAccordion />
            </div>
            <div className="group max-md:space-y-4 md:grid grid-cols-2 gap-6">
              <ServiceAccordion />
              <ServiceAccordion />
            </div>
        </div>
    </section>
  );
}
