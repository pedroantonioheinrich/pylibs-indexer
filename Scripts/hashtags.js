async function hashtags(){
    const response = await fetch("/Data/data.json")
    const data = await response.json()
    
    const tagsDivididas = data.filter(e => {
        for(let i = 0; i < e.relatedHashtags.length - 1; i++){
             console.log(e.relatedHashtags[i])
        }
    })
    
}

//hashtags();