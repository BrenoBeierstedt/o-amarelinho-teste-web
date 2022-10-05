import { FileDotted } from "phosphor-react";

export function NoData(){
    console.log("NotFoundBanner")
    return (
        <div className="lg:flex items-center justify-center w-full">
            <div className="w-full h-screen  flex justify-center">
                <div className=" w-50 h-48 relative z-0">
                    <p className="text-2xl justify-center font-medium leading-5 text-gray-900 ">Não há nenhuma vaga aqui</p>
                    <div className="absolute inset-0 flex justify-center items-center z-10">
                        <FileDotted size={100} />
                    </div>
                </div>
            </div>


        </div>

    )
}
