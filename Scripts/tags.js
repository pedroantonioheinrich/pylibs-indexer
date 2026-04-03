async function tags(){
    const response = await fetch("/Data/data.json")
    const data = await response.json()
    // console.log(data)
    const filterTag = data.filter((e)=>{
        console.log(e.category)
    })
}

// tags()