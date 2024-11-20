const Card = (props) => {
    return (
       <div className='cardContainer'>
          <h2>{props.cardName}</h2>
          <p>Card information</p>
       </div>
    );
 };

 export default Card