import {useState} from "react";
import PageSelectionSingle from "./PageSelectionSingle.tsx";

export default function PageSelection(){

    const [selectedSection, setSelectedSection] = useState('')
    return <div className='flex max-w-[80%] mx-auto justify-between text-center mt-20'>
       <PageSelectionSingle value='Rent' bodyText='For landlords and tenants' headerText='Rent a property' setSelectedSection={setSelectedSection} selectedSection={selectedSection}/>
        <PageSelectionSingle value='Sell' bodyText='Top agents, happy customers' selectedSection={selectedSection} setSelectedSection={setSelectedSection} headerText='Sell a Property' />
        <PageSelectionSingle value='Buy' bodyText='Let us find the right one for you' selectedSection={selectedSection} setSelectedSection={setSelectedSection} headerText='Buy a Property' />
        <PageSelectionSingle value='Services' bodyText='Top agents backed by technology' selectedSection={selectedSection} setSelectedSection={setSelectedSection} headerText='Agent Services' />


    </div>
}