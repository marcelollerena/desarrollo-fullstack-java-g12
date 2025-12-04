import styles from "./card.module.css";

export const Card = (props) => {
  const { title, body, imageUrl, date, author } = props;

  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="imagen cualquiera" className={styles.img} />

      <div className={styles.card__body}>
        <label className={styles.card__label}>Members Only</label>
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__paragraph}>{body}</p>
      </div>

      <div className={styles.author}>
        <img
          src="https://avatar.iran.liara.run/public/18"
          alt="author-image"
          className={styles.author__img}
        />
        <div className={styles.author__data}>
          <label>{author}</label>
          <label>{date}</label>
        </div>
      </div>
    </div>
  );
};
