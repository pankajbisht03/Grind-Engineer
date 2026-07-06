import {useState, useEffect} from "react"
function AutoComplete(){
    const [inputValue, setInputValue] = useState("");
    const [results, setResults]  = useState([]);
    const [cache, setCache] = useState({});
    const [showResults, setShowResults] = useState(true);
    const [activeIndex, setActiveIndex] = useState(-1)

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
                if(results.length > 0){
                    setActiveIndex((prev) => prev <  results.length ? prev + 1: prev)
                }
                console.log("ArrowDown");
                break
            case "ArrowUp":
                e.preventDefault();
                setActiveIndex((prev) => prev > 0 ? prev - 1: 0)
                console.log("Arrowup");
                break
            case "Enter":
                e.preventDefault();
                if(activeIndex >= 0){
                    setInputValue(results[activeIndex].name)
                }
                console.log("Enter");
                break
            case "Escape":
                setShowResults(false);
                setActiveIndex(-1)
                console.log("Escape");
                break
            default:
                break
        }
    }
    
    return (
        <div >
            <input className="p-2" onFocus={() => setShowResults(true)} onBlur={() => setShowResults(false)} className="border" value={inputValue} onChange={(e) => handleInputChange(e)} onKeyDown={handleKeyDown} placeholder="Search"/>
            {results.length>0 && showResults&& 
                     <div className="w-50 border" >
                     {results.map((itm, ind) => (
                         <div key={itm.id}>
                             <span className={`${activeIndex === ind ? "bg-blue-500 text-white":"hover:bg-gray-100"}`}>{itm.name}</span>
                         </div>
                     ))}
                 </div>
            }
   
        </div>
    )
}

export default AutoComplete