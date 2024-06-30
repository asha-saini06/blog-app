import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Illum, quis explicabo!</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt="image"
                fill
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Damien Von Thisse</span>
              <span className={styles.date}>30.06.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="image" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              nulla veniam accusamus reiciendis voluptatem officiis placeat
              blanditiis aliquid. Et, dolores expedita ipsa laborum dicta
              placeat!
            </p>
            <h5>Lorem ipsum, Aliquid, nobis.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, ab. Nam, nostrum. Exercitationem tempore laudantium
              rerum autem? Illum, quis explicabo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              illo pariatur voluptatum harum repellat similique? Quasi
              perspiciatis ducimus quia corrupti provident praesentium aperiam
              nesciunt distinctio, natus dicta id neque consectetur perferendis,
              est voluptatum obcaecati cum amet. Quas amet et explicabo maxime
              esse aliquam sunt nam quasi quam quaerat. Dolore, labore.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
