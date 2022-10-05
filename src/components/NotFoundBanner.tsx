import {MagnifyingGlass} from "phosphor-react";
import {format} from "date-fns";

export function NotFoundBanner(){

    return (
        <div className="lg:flex items-center justify-center w-full">
            <div className="lg:w-11/12 lg:mr-7 lg:mb-2 mb-7 bg-white p-6 shadow rounded">
                <div className="flex items-center border-b border-gray-200 pb-1">
                    <div className="flex items-start justify-between w-full">
                        <div className="pl-3 w-full">
                            <p className="text-2xl font-medium leading-5 text-gray-900">Not Found</p>
                        </div>

                    </div>
                </div>
                <div className="px-2">



                </div>
            </div>
        </div>
    )
}
