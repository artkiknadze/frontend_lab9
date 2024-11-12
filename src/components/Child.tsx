import React from 'react';
import Grandchild from './Grandchild';

const Child = React.memo(({ onClick, text }: any) => {
  console.log('Rendering Child');
  return (
    <div>
      <h2>Дочірній компонент</h2>
      <button onClick={onClick}>Лічильник++ з дитячого компоненту</button>
      <Grandchild text={text} />
    </div>
  );
});

export default Child;
