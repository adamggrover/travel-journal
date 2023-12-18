import Card from './Card'
import data from '../data'

export default function Content(){

    const cards = data.map((trip) =>{

        return(

        <Card 
            key={trip.id}
            trip={trip}
        />
        )


    })
    
    return(
        <div className="content-container">
            {cards}
        </div>
    )

}