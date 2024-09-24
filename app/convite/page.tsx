'use client'
import Lottie from "lottie-react";
import letterJSON from './animations/letter.json'
import { useEffect, useRef } from "react";
import { DialogConvite } from "./components/dialog-convite";

interface ConvitePageProps {

}
export default function ConvitePage(props: ConvitePageProps) {
    const lottieRef = useRef<any>();

    useEffect(() => {
        const interval = setInterval(() => {
            if (lottieRef.current) {
                lottieRef.current.goToAndPlay(0, true); // Recomeça a animação
            }
        }, 3000); // 5000ms = 5 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (
        <main className="min-h-screen justify-center items-center w-full flex">
            <section className="flex flex-col gap-2 items-center">
                <Lottie
                    animationData={letterJSON}
                    lottieRef={lottieRef}
                    initialSegment={[0, 40]}
                    className="w-32 h-32"
                    loop={false}
                />
                <span className=" font-extrabold font-[family-name:var(--font-geist-mono)] transition-all ease-in fade-out-10 saturate-150 uppercase -mt-3">
                    Voce recebeu um convite!
                </span>
                <DialogConvite />
            </section>
        </main>
    )
}