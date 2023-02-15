
function CheckoutProduct({
    id,
    name,
    price,
    shipping,
    imageSrc,
    
}) {
  return (
    <div className="grid grid-cols-5">
      <a>{id}</a>
<img src={imageSrc} alt="image" height={200} width={200} />
{/* Middle */}
<div className="col-span-3 mx-5">
    <h3>{name}</h3>
        <p>{price}</p>
        <h3>{shipping}</h3>


    </div>
    </div>
    
  )
}

export default CheckoutProduct