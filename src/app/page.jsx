import CardList from "@/components/cardList/cardList";
import CategoryList from "@/components/categoryList/categoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import Pagination from "@/components/pagination/Pagination";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Pagination />
        <Menu />
      </div>
    </div>
  );
}
