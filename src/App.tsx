import { useEffect, useState } from "react";
import { JobList } from "./components/JobsList";
import "./styles/main.css"
import { MagnifyingGlass } from "phosphor-react";
import {NotFoundBanner} from "./components/NotFoundBanner";

interface Job{
    id: number
    title: string
    description: string
    companyName: string
    cityName: string
    stateName: string
    updatedAt: Date
    createdAt: Date
}

function App() {
    const [job, setJob] = useState<Job[]>([])
    const [titleSearch, setTitleSearch] = useState("")
    const [citySearch, setCitySearch] = useState("")
    const [searchTrigger, setSearchTrigger] = useState(false)

    useEffect(() => {
        fetch("http://192.168.0.15:38643/api/jobs")
            .then( res => res.json() )
            .then(data => {
                setJob(data)
            })
    },[])

    useEffect(() => {
        setSearchTrigger(false)
    },[citySearch,titleSearch])

    const setSearch = (e: boolean) => {
        setSearchTrigger(e)
        if(!e ){
            setTitleSearch("")
            setCitySearch("")
        }
    }
    const setSearchKey = (e: any) => {
        if(e.target.id == "title") {
            setTitleSearch(e.target.value)
        }
        if(e.target.id == "cityName") {
            setCitySearch(e.target.value)
        }
    }

    return(
        <>
            <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20 my-10">
                <h1 className="text-6xl text-black font-black py-3 mt-0 text-center">Sua vaga está aqui!
                </h1>
                <div className="bg-gray-200 flex items-center justify-center rounded-lg" >
                    <div className="flex md:flex-row flex-col items-center py-8 px-4">
                        <div className="flex flex-col md:mr-16">
                            <input value={titleSearch} onChange={e => {setSearchKey(e)}} id="title" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700  border-gray-100 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Qual vaga você procura?" />

                            <div className="relative">

                            </div>
                        </div>
                        <div className="flex flex-col md:mr-16 md:py-0 py-4">
                            <div className="relative">
                                <input value={citySearch} onChange={e => {setSearchKey(e)}} id="cityName" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700  border-gray-100 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Qual vaga você procura?" />
                            </div>
                        </div>
                        <div className="flex flex-col md:py-0 py-4">
                            <div className="relative">
                                <button onClick={() => setSearch(true)} className="min-w-[170px] py-2 mt-7 px-4 bg-[#6f5192] hover:bg-violet-600 text-white rounded flex items-center">
                                    <MagnifyingGlass size={24}/>
                                    Buscar Vagas
                                </button>
                                <a href="#" className="no-underline  " onClick={() => setSearch(false)}>limpar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                {job.filter((val)=> {
                    if (!searchTrigger){
                        if( citySearch == "" && titleSearch == ""  ) {
                            return val
                        }else return val
                    }  if (searchTrigger && val.title.toLowerCase().includes(titleSearch.toLowerCase()) && val.cityName.toLowerCase().includes(citySearch.toLowerCase())) {
                        return val
                    }
                }).map((job) => {
                    return(
                        !job ?
                         <NotFoundBanner/> : <JobList
                                title={job.title}
                                id={job.id}
                                key={job.id}
                                description={job.description}
                                companyName={job.companyName}
                                cityName={job.cityName}
                                stateName={job.stateName}
                                updatedAt={job.updatedAt}
                                createdAt={job.createdAt}
                            />
                    )
                })}
            </div>
        </>
    )
}

export default App
