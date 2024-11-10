import { Company } from "@/types/Company";
import Image from "next/image";

interface CompaniesSectionProps {
    companies: Company[]
}

export default function CompaniesSection({companies}: CompaniesSectionProps) {
    return (
        <section id="testimony" className="-mx-4 md:-mx-6 xl:-mx-12 px-4 md:px-6 xl:px-12 bg-brand-25 text-center py-12 xl:py-[72px] space-y-4 md:space-y-6 xl:space-y-8">
            <h3 className="text-heading-md text-gray-700">Telah dipercaya oleh:</h3>
            <section className="overflow-hidden whitespace-nowrap w-full">
                <section className="animate-scroll flex items-center justify-center gap-14 h-8 md:h-10 xl:h-14">
                    {
                    companies.map((company) => {
                        return (
                        <Image 
                            key={company.id}
                            src={`/img/companies/${company.logoUrl}`}
                            alt={company.altText}
                            style={{
                            width: 'auto',
                            height: '100%',
                            }}
                            width={company.width}
                            height={company.height}
                        />
                        )
                    })
                    }
                </section>
            </section>
        </section>
    )

}