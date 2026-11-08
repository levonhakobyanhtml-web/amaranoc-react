import React,{useState} from "react";
import Icon from "./components/header/icon";
import Text from "./components/header/headerTexts";
import Search from "./components/header/SearchBox";
import Category from "./components/NavBar/Categories";
import "./components/NavBar/NavBar.css"
// import AllowedPeopleNightFilter from './components/NavBar/AllowedPeopleNightFilter';
// import BathroomsCount from './components/NavBar/BathroomsCount';
// import OverNightFilter from './components/NavBar/OverNightFilter';
// import PeopleCount from './components/NavBar/PeopleCount';
// import Pool from './components/NavBar/Pool';
import PriceFilter from './components/NavBar/PriceFilter';
import RegionFilter from './components/NavBar/RegionFilter';
import "./App.css"
export function App() {
  const [filters, setFilters] = useState({
    regions: [],
    currency: 'AMD',
    minPrice: '',
    maxPrice: '',
    peopleCount: 1,
    overNight: 'all',
    allowedPeopleNight: 0,
    roomsCount: 'all',
    bathroomsCount: 'all',
    pool: 'all'
  });

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };
  return (
    <div>
      <Icon/>
      <Text/>
      <Search/>
      <Category/>
  <RegionFilter 
    selectedRegions={filters.regions} 
        onChange={(val) => updateFilter('regions', val)}
  />
  <PriceFilter
    currency={filters.currency} 
        setCurrency={(val) => updateFilter('currency', val)} 
        minPrice={filters.minPrice} 
        setMinPrice={(val) => updateFilter('minPrice', val)} 
        maxPrice={filters.maxPrice} 
        setMaxPrice={(val) => updateFilter('maxPrice', val)}
  />
  {/*<PeopleCount />
  <OverNightFilter />
  <AllowedPeopleNightFilter />
  <RoomsCount />
  <BathroomsCount />
  <Pool /> */}
    </div>
    
  );
}

export default App;