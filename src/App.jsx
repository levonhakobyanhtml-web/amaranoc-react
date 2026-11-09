import React, { useState } from "react";
import Icon from "./components/header/icon";
import Text from "./components/header/headerTexts";
import Search from "./components/header/SearchBox";
import Category from "./components/NavBar/Categories";
import "./components/NavBar/NavBar.css"
import AllowedPeopleNightFilter from './components/NavBar/AllowedPeopleNightFilter';
import BathroomsCount from './components/NavBar/BathroomsCount';
import OverNightFilter from './components/NavBar/OverNightFilter';
import PeopleCount from './components/NavBar/PeopleCount';
import Pool from './components/NavBar/Pool';
import RoomsCount from './components/NavBar/RoomsCount';
import PriceFilter from './components/NavBar/PriceFilter';
import RegionFilter from './components/NavBar/RegionFilter';
import CardLine1 from './components/Cards/CardLine1';
import CardLine2 from './components/Cards/CardLine2';
import CardLine3 from './components/Cards/CardLine3';
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
      <Icon />
      <Text />
      <Search />
      <Category />
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
      <PeopleCount
        count={filters.peopleCount}
        setCount={(val) => updateFilter('peopleCount', val)}
      />
      <OverNightFilter value={filters.overNight}
        onChange={(val) => updateFilter('overNight', val)} />
      <AllowedPeopleNightFilter count={filters.allowedPeopleNight}
        setCount={(val) => updateFilter('allowedPeopleNight', val)} />
      <RoomsCount
        selected={filters.roomsCount}
        setSelected={(val) => updateFilter('roomsCount', val)}
      />
  <BathroomsCount selected={filters.bathroomsCount} 
        setSelected={(val) => updateFilter('bathroomsCount', val)}/>
  <Pool selected={filters.pool} 
        setSelected={(val) => updateFilter('pool', val)} /> 
      <CardLine1/>
      <CardLine2/>
      <CardLine3/>
    </div>

  );
}

export default App;