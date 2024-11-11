import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Cross1Icon } from "@radix-ui/react-icons";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import ServiceCard from "./ServiceCard";
import ServiceCardHeader from "./ServiceCardHeader";
import { Button } from "../ui/button";

interface ServiceDialogProps {
  is_highlighted?: boolean
}

export default function ServiceDialog({
  is_highlighted
}: ServiceDialogProps) {
    return (
      <Dialog>
        <div className="grid grid-cols-2 gap-4">
          <Button variant={is_highlighted ? "default" : "tertiary"}>
            Pilih layanan
          </Button>
          <DialogTrigger className="w-full px-6 py-4 bg-gray-100 text-gray-800 shadow-sm hover:bg-gray-200 active:bg-gray-300 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
            Lihat detail
          </DialogTrigger>
        </div>
        <DialogContent>
          <ScrollArea className="max-h-[calc(100vh-96px)]">
            <div className="space-y-6 xl:space-y-10">
              <VisuallyHidden>
                <DialogTitle>Pendirian CV</DialogTitle>
              </VisuallyHidden>
              <div className="group flex justify-between items-end" data-state="open">
                <ServiceCardHeader />
                <DialogClose asChild>
                  <div className="shrink-0 h-10 w-10 xl:h-14 xl:w-14 grid place-items-center bg-brand-50 border border-brand-100 rounded-full">
                    <Cross1Icon className="text-brand-900 h-4 w-4 xl:h-6 xl:w-6"/>
                  </div>
                </DialogClose>
              </div>
              <div className="max-md:space-y-4 md:grid grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8">
                <ServiceCard variant="yellow"/>
                <ServiceCard variant="green"/>
                <ServiceCard variant="purple" isLast/>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    );
}
