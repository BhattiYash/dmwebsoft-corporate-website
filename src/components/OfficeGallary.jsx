import style from '../assets/styles/officegallary.module.css';
import office1 from '../assets/images/offices-section/offices-section-melbourne.png';
import office2 from '../assets/images/offices-section/offices-section-barcelona.png';
import office3 from '../assets/images/offices-section/offices-section-ahmedabad.png';
import office4 from '../assets/images/offices-section/offices-section-rajkot.png';
const OfficeGallery = () => {
  const offices = [
    { id: 1, image: office1, location: '133 Market St, South Melbourne VIC 3205' },
    { id: 2, image: office2, location: 'Av. Diagonal, 444, Floor 2, L’Eixample, 08037 Barcelona' },
    { id: 3, image: office3, location: 'B-309, Third Floor, PNTC Building, Times Of India Press Road, Prahladnagar, Ahmedabad, India.' },
    {
      id: 4,
      image: office4,
      location: '203-211, 2nd Floor, Mavdi Plaza Complex, Vagad Chowk, 80ft Road, Mavdi, Rajkot, India.'
    },
  ];

  return (
    <section className={style["office-section"]}>
      <h1 className={style["office-title"]}>Find Our <span>Offices</span></h1>

      <div className={style["office-grid"]}>
        {offices.map((office) => (
          <div key={office.id} className={style["office-card"]}>
            <img src={office.image} alt="Office" className={style["office-img"]} />
            <div className={style["info-overlay"]}>
              <p>{office.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfficeGallery;