import React from 'react';
import { vigor } from '@react-ui/core/src';
import { Button } from '@react-ui/components/src';
import styles from './app.module.css';

export function App(): React.ReactNode {
  return (
    <>
      <vigor.div className={styles.button}>example</vigor.div>
      <Button />
    </>
  );
}
