

const SeparateRoom = [
    {
        image:"/images/Lodge/OneRoom.JPG",
        header:"Single Bed Room",
    },
    {
        image:"/images/Lodge/TwoRoom.JPG",
        header:"Double Bed Room",
    },
    {
      image:"/images/Lodge/sixRoom.JPG",
      header:"Six Bed Room"
  },
];

const Rooms = () => {
  return (
    <section className="rooms my-5">
       <p className="rooms-title mb-4 fs-4 fw-bold text-center sub-title">O U R &nbsp;&nbsp;L I V I N G &nbsp;&nbsp; R O O M S</p>
       <div className="d-flex flex-row justify-content-center align-items-start align-items-sm-center gap-4 flex-wrap">
        {
          SeparateRoom.map((room,index)=>(
            <RoomCards key={index} image={room.image} header={room.header} description={room.description} price={room.price}/>
          ))
        }
       </div>
    </section>
  )
}

export default Rooms

const RoomCards = function(props)
{
      return(
        <div className='two-rooms card border border-none mx-3 '>
          <div className="hovereffect overflow-hidden">
            <img src={props.image} alt="No-Image" className="room-image img-responsive w-100"/>
          </div>
          <p className="room-header fw-bold fs-5 text-center py-3 mb-0">{props.header}</p>
          <a  href={`tel:7639232333`} className='button-color text-white text-center text-decoration-none py-2 fw-bold'>Book Now</a>
        </div>
      )
}