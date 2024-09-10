import OrbitingCircles from "../magicui/orbiting-circles";

export function OrbitingSponsorsCircles() {
    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-background">
            <OrbitingCircles
                className="size-[120px] border p-4 bg-transparent"
                duration={20}
                delay={50}
                radius={80}
            >
                <img src="/images/chainsafe.jfif" />
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[100px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={170}
            >
                <img src="/images/zksync.jfif" />
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[100px] border bg-transparent flex items-center justify-center p-2"
                radius={280}
                duration={50}
                reverse
            >
                <img src="/images/eth-safari.jfif" />
            </OrbitingCircles>

        </div>
    );
}


