import { format } from 'date-fns'

interface JobListProps{
    id: number
    title: string
    description: string
    companyName: string
    cityName: string
    stateName: string
    updatedAt: Date
    createdAt: Date
}

export function JobList(props:JobListProps) {
    return (
            <div className="lg:flex items-center justify-center w-full">
                <div className="lg:w-11/12 lg:mr-7 lg:mb-2 mb-7 bg-white p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-200 pb-1">
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-2xl font-medium leading-5 text-gray-900">{props.title}</p>
                                <p className="text-md font-medium leading-5 text-gray-900">{props.companyName}</p>
                            </div>

                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-md leading-5 py-4 text-gray-700">{props.description}</p>
                        <p className="text-md py-2 text-gray-700">{props.cityName},{props.stateName}</p>

                        <div className="flex">
                            <div className="py-2 px-4 text-xs leading-3 bg-[#6f5192] hover:bg-violet-600 rounded-full text-white"><>Criado em: {format(new Date(props.createdAt), 'dd/MM/yyyy')}</></div>
                            <div className="py-2 px-4 text-xs leading-3 bg-[#6f5192] hover:bg-violet-600 rounded-full text-white"><>Atualizado em: {format(new Date(props.updatedAt), 'dd/MM/yyyy')}</></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}