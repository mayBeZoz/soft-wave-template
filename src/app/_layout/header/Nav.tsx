import { routes } from "@/constatnts";

export default function Nav ()  {
    return (
        <nav className="lg:flex hidden h-[42px] border items-center px-14 py-4 border-white/20 rounded-full w-fit gap-7">
            {
                routes.map((route, index) => (
                    <a 
                        key={index} 
                        className={`text-lg capitalize text-white/70`}
                    >
                        {route}
                    </a>
                ))
            }
        </nav>
    )
}