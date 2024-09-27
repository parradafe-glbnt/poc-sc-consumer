
/** SERVER COMPONENT */
export default function SCCtxConsumer({data} : any) {
    if(!data){
        return <h2>SCCtxConsumer no data</h2>
    }
    
    return (
        <>
            <h3>{JSON.stringify(data)}</h3>
        </>
    )
}