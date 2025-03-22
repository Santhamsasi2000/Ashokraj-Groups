import { LazyLoadImage } from "react-lazy-load-image-component";
import { DataRoom } from "./DataRooms";
import "./Rooms.css";

const Rooms = () => {
  return (
    <section className="p-3 p-sm-5 rooms-bg">
      <p className="rooms-title mb-4">Ashokraj Lodge</p>
      <p className="rooms-subTitle mb-4">
        OUR LIVING ROOMS
      </p>
      <div className="row gy-4">
        {DataRoom.map(({ id, image, header }) => (
          <div className="col-sm-6 col-lg-4" key={id}>
            <div className="card border-0">
            <LazyLoadImage
                className="w-100"
                src={image}
                effect="blur"
                threshold={200}
                placeholderSrc="https://placehold.co/600x400"
                srcSet={`${image.replace(".webp", "-small.webp")} 480w, ${image} 1024w`}
                sizes="(max-width: 600px) 480px, 1024px"
              />
              <p className="separate-title mb-0">{header}</p>
              <a href={`tel:7639232333`} className="rooms-btn">
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
