import React from 'react';
import styles from "./styles.module.css";

const Loading = () => {
    return (
        <div>
            <div className={styles.loadingWrapper}>
                <div className={styles.loading}></div>
            </div>
        </div>
    );
};

export default Loading;