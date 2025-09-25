interface PreviousSearchesProps {

}

export const PreviousSearches = ({ }: PreviousSearchesProps) => {
   return (
      <div className="previous-searches">
         <h2>Búsquedas previas</h2>
         <ul className="previous-searches-list">
            <li>Gokú</li>
            <li>Luffy</li>
            <li>Zoro</li>
         </ul>
      </div>
   )
}
