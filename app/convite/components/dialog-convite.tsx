import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Flork1 from "@/app/convite/assets/flork-apaixonado-1.png"
import Image from "next/image"
import { Calendar, MapPinned } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export function DialogConvite() {
    const router = useRouter()
    const handleAccept = () => {
        const phoneNumber = '5554991722945'; // Substitua pelo número de telefone com código do país
        const message = encodeURIComponent("Eu aceito o convite para o nosso date!");
        router.push(`https://wa.me/${phoneNumber}?text=${message}`);
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="destructive"
                    className="w-full mt-3 hover:cursor-pointer"
                >
                    Abrir
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Vamos dormir abraçadinhos? ❤️</DialogTitle>
                    <DialogDescription className="italic">
                        "A quietude é o lugar onde o amor pode residir, e dormir nos braços de quem amamos é onde o silêncio encontra seu lar." <span> - Rumi</span>
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 justify-center">
                    <Image
                        src={Flork1}
                        alt="Flork 1"
                        priority
                        className="w-44"
                    />
                </div>
                <DialogDescription className=" flex flex-col ">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-4 -mr-2" /> 23.09.2024
                        <Link href={'https://maps.app.goo.gl/1kwwxepzLgMWrXC28'} className=" hover:underline flex items-center gap-2">
                            <MapPinned className="w-4" />Rod. Amaro Antonio Vieira
                        </Link>
                    </div>
                    <div className="mt-1">
                        De: Jo - Para: Mica
                    </div>

                </DialogDescription>
                <DialogFooter>
                    <Button type="submit" onClick={handleAccept}>Aceitar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}