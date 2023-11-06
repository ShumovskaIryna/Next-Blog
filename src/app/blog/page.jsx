import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
