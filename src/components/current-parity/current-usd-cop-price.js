import "./current-usd-cop-price.css"
 const CurrentUsdCop = ({props}) => {
    
        return (

            <div className="usd-cop">
                <p>{props.data} $ por dolar</p>
            </div>
            
        )
 }

 export default CurrentUsdCop ;
 