'use client';

import { useState, useEffect } from 'react';

// Components
import { SearchResults } from '@/components/search';

// Types
import type { ChangeEvent } from 'react';
import type { Location } from '@/lib/types';

const Search = () => {
  const [selected, setSelected] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchMatchingLocations = async () => {
      const apiKey = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

      const locations = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchTerm}.json?access_token=${apiKey}`);
      const results = await locations.json();

      setLocations(results.features);
    };

    fetchMatchingLocations();

    if (searchTerm === '') {
      setSelected('');
    }
  }, [searchTerm]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;

    setSearchTerm(term);
  };

  return (
    <div className='w-full relative'>
      <input
        className='rounded-lg h-12 w-full px-4 text-black'
        placeholder='Start typing a city name...'
        onChange={handleChange}
        value={searchTerm}
      />

      {locations.length !== 0 && selected === '' && (
        <div className='border rounded mt-4'>
          {locations?.map((location, index) => (
            <SearchResults
              key={index}
              name={location.place_name}
              setSelected={setSelected}
              setSearchTerm={setSearchTerm}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { Search };
