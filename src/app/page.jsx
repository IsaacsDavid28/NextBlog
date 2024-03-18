import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "../app/components/featured/Featured";
import CategoryList from "../app/components/categoryList/CategoryList";
import CardList from "../app//components/cardList/CardList";
import Menu from "../app/components/Menu/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu />
      </div>
    </div>
  );
}
