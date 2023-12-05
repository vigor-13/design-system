import React from 'react';
import { vigor } from '@react-ui/core/src';
import styles from './button.module.css';

export function Button(): React.ReactNode {
  return (
    <>
      <vigor.button className={styles.button}>button</vigor.button>
    </>
  );
}
