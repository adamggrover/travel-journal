export default function Card(props){
    return (
        <>
        <div className="card-outer-wrapper">

            <div className="card-container">

                <img className="card-img" src={props.trip.imageUrl} alt="" />
                <div className="card-text-container">
                    <div className="card-text-top-row">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="location-icon">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <h3 className="country">{props.trip.location}</h3>
                        <a href={props.trip.googleMapsUrl} className="google-map-link" target="_blank">View on Google Maps</a>
                    </div>
                    <h2 className="location">{props.trip.title}</h2>
                    <h4 className="dates">{props.trip.startDate} - {props.trip.endDate}</h4>
                    <p className="description">{props.trip.description}</p>
                </div>
            </div>
            {3==3 && <hr/>}
        </div>
        
        </>
    )
}