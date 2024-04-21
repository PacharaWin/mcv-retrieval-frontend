export async function SearchTranscript(queryParams:{transcript_id: string, filename: string, query: string}) {


    if(!queryParams.query){
        return [];
    }
    try{
        const queryParams2 = new URLSearchParams(
            queryParams
        );
  

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/search?${queryParams2.toString()}`,{
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