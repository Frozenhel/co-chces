import React from 'react';
import Chleba from './Chleba';
import styles from './Bochnik.module.scss';

const chleby = [1, 2, 3];

function Bochnik() {
  return (
    <div className={styles.bochnik}>
      <h3>Bochnik</h3>

      {chleby.map((chlebaIndex) => (
        <Chleba key={chlebaIndex} index={chlebaIndex} />
      ))}
    </div>
  );
}

export default Bochnik;
