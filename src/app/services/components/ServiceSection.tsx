import ServiceCard from "./ServiceCard";

export default function ServiceSection() {
  return (
    <section className="bg-gray-25 border border-brand-100 py-6 px-4 space-y-6">
        <h2 className="text-lg font-medium">Layanan Pendirian Usaha</h2>
        <div className="max-md:space-y-4 md:flex flex-wrap gap-6">
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
        </div>
    </section>
  );
}
