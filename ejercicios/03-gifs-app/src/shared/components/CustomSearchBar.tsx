
interface CustomSearchBarProps {
   placeholder?: string;
}

export const CustomSearchBar = ({ placeholder = 'Buscar' }: CustomSearchBarProps) => {
   return (
      <div className="search-container">
         <input type="text" placeholder={placeholder} />
         <button>Buscar</button>
      </div>
   )
}
