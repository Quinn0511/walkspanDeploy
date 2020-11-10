/*users.jsx*/
import React from "react";
import NavigationBar from "../../component/navigationBar";
import "./widgetsStyles.css";
import WidgetsComponet from "./WidgetsComponet";
import styles from "./widgetspage.module.less";
import Footer from "../../component/footer";

/* We simply can use an array and loop and print each user */
const WidgetsPage = () => {
  return (
    <div className={styles.whole_contianer}>
      <NavigationBar />
      <div className={styles.container}>
        <div className={styles.introduction}>
          <p className={styles.title}>Walkspan Widget</p>
          <p className={styles.text}>
            Using our widget builder, add Walkspan data to your site seamlessly
            works with property search website, buyers, sellers, investors, and
            developers to gain immediate access to walkability data. works with
            property search website, buyers, sellers, investors, and developers
            gain immediate access to walkability data.
          </p>
        </div>

        <div className={styles.widgetsComponet}>
          <WidgetsComponet />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default WidgetsPage;
