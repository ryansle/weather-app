// Types
import type { Location } from '@/lib/types';

type SearchResultsProps = {
  location: Location;
  setSelected: (location: (Location | null)) => void;
  setSearchTerm: (name: string) => void;
};

const SearchResults = (props: SearchResultsProps) => {
  const { location, setSelected, setSearchTerm } = props;

  const handleClick = (location: Location) => {
    setSearchTerm(location.place_name ?? '');
    setSelected(location ?? null);
  };

  return (
    <button
      className='border-b w-full py-3 text-left px-10 truncate hover:font-semibold hover:underline'
      onClick={() => handleClick(location)}
    >
      {location.place_name}
    </button>
  );
};

export { SearchResults };