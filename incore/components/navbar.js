import Image from "next/image";

const Navbar = () => {
    return(
        <nav className="bg-gray-800 opacity-70">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg className="block size-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                            <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-0">
                            <Image
                            className="h-8 w-auto rounded-2xl"
                            src="public\images\file.svg"
                            alt="Logo de la empresa"
                            width={10}
                            height={10}/>
                        </div>
                        <div className="sm:ml-6 max-w-auto sm:block">
                            <div className="flex space-x-2">
                                <a href="#" className="rounded-md bg-gray-900 px-2 py-2 text-sm font-medium text-white" aria-current="page">Home</a>
                                <a href="#" className="rounded-md bg-gray-900 px-2 py-2 text-sm font-medium text-white" aria-current="page">Fragancias</a>
                                <a href="#" className="rounded-md bg-gray-900 px-2 py-2 text-sm font-medium text-white" aria-current="page">Sneakers</a>
                                <a href="#" className="rounded-md bg-gray-900 px-2 py-2 text-sm font-medium text-white" aria-current="page">Asistencia</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;