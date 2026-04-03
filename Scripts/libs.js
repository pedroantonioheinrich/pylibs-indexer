async function libs(){
    const response = await fetch("/Data/data.json")
    const data = await response.json()
    const filterTag = data.filter((e)=>{
        console.log(e.name)
    })
}

libs()