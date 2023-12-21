import style from "./index.module.scss";

const Banner = (props: any) => {
  const { heading, subHeading } = props;

  return (
    <div className={style.bannerContainer}>
      <h2>{heading}</h2>
      <p>{subHeading}</p>
    </div>
  );
};

export default Banner;
