import React from "react";
import styles from "./ResultPage.module.scss";

function ResultPage() {
  return (
    <>
      <div className={styles.circle}></div>
      <div className={styles.rectangle}></div>
      <div className={styles.container}>
        <div className={styles.top_Heading}>
          <div className={styles.collegePrompt}>
            <div>Your Colleges Will be.......</div>
          </div>
        </div>
        <div className={styles.result_section}>
          <div className={styles.result_row}>
            <div className={styles.result}>
              <div>Veermata Jijabai Technological institute</div>
              <div>Branch - IT</div>
            </div>
            <div className={styles.result}>
              <div>Sardar Patel Institute Of Technology</div>
              <div>Branch - Computers</div>
            </div>
          </div>
          <div className={styles.result_row}>
            <div className={styles.result}>
              <div>College of Engineering, Pune</div>
              <div>Branch - IT</div>
            </div>
            <div className={styles.result}>
              <div>G.H. Raisoni College of Engineering, Nagpur</div>
              <div>Branch - Civil</div>
            </div>
          </div>
          <div className={styles.result_row}>
            <div className={styles.result}>
              <div>ICT , MUMBAI</div>
              <div>Branch - Civil</div>
            </div>
            <div className={styles.result}>
              <div>COEP , PUNE</div>
              <div>Branch - Electronics</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultPage;
