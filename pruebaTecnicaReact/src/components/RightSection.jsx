import '../styles/rightSection.scss';
const RightSection = ({ card }) => {
  if (!card) return null;
const { title, text, options, form, footer } = card;
console.log(card);
  return (
    <section id="right-section">
        <div>
            <div className="image-container">
                <img src="/assets/paso1/shopping-bag.png" alt="shopping" />
            </div>
            <p>Paso {card.stepper}</p>
            <h2>{card.title}</h2>
            <p>{card.text}</p>    
        </div>
      
    </section>
  );
};

export default RightSection;