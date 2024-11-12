import React from 'react';

const Grandchild = React.memo(({ text }: any) => {
  console.log('Rendering Grandchild');
  return (
    <div>
      <h3>Онучий компонент</h3>
      <p>{text}</p>
    </div>
  );
});

export default Grandchild;
