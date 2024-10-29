import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <div className="px-4 py-6 space-y-8">
        <header className="text-center space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl leading-9">Layanan Kami</h1>
                <p className="leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="flex gap-4">
                <Button className="w-full max-lg:text-sm">Unduh Brosur</Button>
                <Button variant="secondary" className="w-full max-lg:text-sm">Konsultasi</Button>
            </div>
        </header>
        <div>
            <section className="bg-gray-25">
                <h2>Layanan Pendirian Usaha</h2>
            </section>
        </div>
    </div>
    
  );
}
