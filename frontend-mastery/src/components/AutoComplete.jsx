import {useState, useEffect} from "react"
function AutoComplete(){
    const [inputValue, setInputValue] = useState("");
    const [results, setResults]  = useState([]);
    const [cache, setCache] = useState({});
    const [showResults, setShowResults] = useState(true);
    const[selectedInput, setSelectedInput] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(-1)

    useEffect(() => {
        if(!inputValue.trim()){
            setResults([]);
            return
        }
        const timer = setTimeout(() => {
            fetchData()

        }, 3000)
        return () => {
            clearTimeout(timer)
        }

    }, [inputValue])

    async function fetchData(){
        if(cache[inputValue]){
            setResults(cache[inputValue]);
            return
        }
        const data  = await fetch("https://dummyjson.com/recipes/search?q="+ inputValue);
        const jsonData  = await data.json();
        setResults(jsonData?.recipes)
        setCache((prev) => ({...prev, [inputValue]: jsonData?.recipes}))
        console.log(jsonData,cache,  "jsonData")
    }
    function handleInputChange(e){
        setInputValue(e.target.value)
    }

    function handleKeyDown(e){
        switch(e.key){
            case "ArrowDown":
                e.preventDefault()
                console.log("ArrowDown");
                break
            case "ArrowUp":
                e.preventDefault();
                console.log("Arrowup");
                break
            case "Enter":
                e.preventDefault();
                console.log("Enter");
                break
            case "Escape":
                console.log("Escape");
                break
            default:
                break
        }
    }
    
    return (
        <div >
            <input onFocus={() => setShowResults(true)} onBlur={() => setShowResults(false)} className="border" value={inputValue} onChange={(e) => handleInputChange(e)} onKeyDown={handleKeyDown} placeholder="Search"/>
            {results.length>0 && showResults&& 
                     <div className="w-50 border" >
                     {results.map((itm, ind) => (
                         <div key={itm.id}>
                             <span>{itm.name}</span>
                         </div>
                     ))}
                 </div>
            }
   
        </div>
    )
}

export default AutoComplete