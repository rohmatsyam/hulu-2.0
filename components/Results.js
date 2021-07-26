import Thumbnail from "./Thumbnail"
import FlipMove from 'react-flip-move'

const Results = ({results}) => {        
    return (
        <FlipMove className="justify-center px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex 3xl:flex-wrap">            
            {results.map((result,key)=><Thumbnail key={key} data={result}/>)}            
        </FlipMove>
    )
}

export default Results
