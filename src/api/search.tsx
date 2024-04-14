export async function SearchTranscript(queryParams:{transcript_id: string, filename: string, query: string}) {

    try{
        const queryParams2 = new URLSearchParams(
            queryParams
        );
  
        console.log(`http://localhost:8000/search?${queryParams2.toString()}`)

        const res = await fetch(`http://localhost:8000/search?${queryParams2.toString()}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                }
        });
        
        if(!res.ok){
            throw new Error(res.statusText);
        }
        
        const jsonData = await res.json();

        return jsonData;

    }
    catch(err){
        console.log(err);
        return null;
    }


}