import React from "react";
import styles from "./DemoBlock.module.css";

export default function (props) {
    const {children} = props;
    return (
        <div className={styles.DemoBlock}>
            {children}
        </div>
    );
}
