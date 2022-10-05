import {MagnifyingGlass} from "phosphor-react";

export function SearchBanner(){

    return (
        <div className="bg-gray-200 flex items-center justify-center rounded-lg" >
            <div className="flex md:flex-row flex-col items-center py-8 px-4">
                <div className="flex flex-col md:mr-16">
                        <input id="email1" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700  border-gray-100 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Qual vaga você procura?" />

                    <div className="relative">

                    </div>
                </div>
                <div className="flex flex-col md:mr-16 md:py-0 py-4">
                    <div className="relative">
                        <input id="email1" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700  border-gray-100 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Qual vaga você procura?" />
                    </div>
                </div>
                <div className="flex flex-col md:py-0 py-4">
                    <div className="relative">
                        <button className="min-w-[170px] py-2 px-4 bg-[#6f5192] hover:bg-violet-600 text-white rounded flex items-center">
                            <MagnifyingGlass size={24}/>
                            Buscar Vagas
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
