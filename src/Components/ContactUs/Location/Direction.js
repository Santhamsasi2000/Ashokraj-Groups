import './Direction.css';

const Direction = () => {
  return (
    <div className="mb-5">
      <p className="contact-subTitle mb-3">DIRECTIONS</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.0452354425906!2d78.6330801732265!3d9.846567975659717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00f860f2a3d62b%3A0x6eff024600253ced!2sAshok%20Raj%20Lodge%26%20Restaurant%20A%2FC!5e0!3m2!1sen!2sin!4v1737187546376!5m2!1sen!2sin" 
      className='w-100 direction contact-border' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Direction;
