export default function PageSelectionSingle({headerText, value,  bodyText, selectedSection, setSelectedSection}) {
    return <div onClick={() => setSelectedSection(value)}
                className={`${selectedSection === value && 'bg-white/20 border-b-yellow-300 border-b'} text-white w-1/4 py-10`}>
        <div className='font-bold'>{headerText}</div>
        <div>{bodyText}</div>
    </div>
}