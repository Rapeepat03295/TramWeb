import "../components/filterPlace.css";
const filterPlace = () =>{
    return (
        <div className="filter-place-c">
            <input list="Tram_station" className = "search-tram"/>
                <datalist id="Tram_station">
                    <option value="Tram Station">Tram Station</option>
                    <option value="Firefox" />
                    <option value="Chrome" />
                    <option value="Opera" />
                    <option value="Safari" />
                </datalist>
            </div>
        
    )


}
export default filterPlace ;