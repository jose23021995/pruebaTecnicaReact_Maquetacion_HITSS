import '../styles/rightSection.scss';
const RightSection = ({ card }) => {
  if (!card) return null;
const { title, text, options, form, footer } = card;
  return (
        <div id="rightSection-container">
            <div className="image-container">
                <img src={card.img} alt="shopping" />
            </div>
            <p>Paso {card.stepper}</p>
            <h2>{card.title}</h2>
            <p className='texto'>{card.text}</p>    
        </div>
  );
};

export default RightSection;