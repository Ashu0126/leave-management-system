import style from "./index.module.scss";

const Card = (props: any) => {
  const { cardIcon, cardHeading, cardSubHeading } = props;

  return (
    <div className={style.cardContainer}>
      <span className={style.cardIcon}>
        <img src={cardIcon} alt='' />
      </span>
      <h3>{cardHeading}</h3>
      <p>{cardSubHeading}</p>
    </div>
  );
};

export default Card;
