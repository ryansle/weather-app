type SearchResultsProps = {
  name: string;
  setSelected: (name: string) => void;
  setSearchTerm: (name: string) => void;
};

const SearchResults = (props: SearchResultsProps) => {
  const { name, setSelected, setSearchTerm } = props;

  const handleClick = (name: string) => {
    setSearchTerm(name);
    setSelected(name);
  };

  return (
    <button
      className='border-b w-full py-3 text-left px-10 truncate hover:font-semibold hover:underline'
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  );
};

export { SearchResults };