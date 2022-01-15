import React from 'react';


let n = 1000;
const App = () => {
  return (
    <div className={'green'}>App组件 {n}
      <div><Component n={100}/>
        <div>
          <Component2 num={["a", "v", "c"]}/>
        </div>
      </div>
    </div>
  );
};


const Component = (props) => {
  return (
    <div>
      {props.n % 2 === 0 ? <div>n是偶数</div> : <div>n 奇数</div>}
    </div>
  );
};

const Component2 = (props) => {
  return (
    props.num.map(
      (item,index) => {
        return <div>{item} indexis {index}</div>
      }
    )
  );
};

export default App;