import Link from "next/link";

export default function AnimertStjerne() {
    return (
        <video autoPlay loop muted playsInline preload="auto" poster="Stjerne-stillframe.png" className="w-[300px] md:w-[400px] lg:w-[450px] bg-[#231f20]/00">
            <source src="/safari-logo.mov" type="video/quicktime" />
            <source src="/stjerne-logo-animert.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
    );
}