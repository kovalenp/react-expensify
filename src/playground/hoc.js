// Higher Order Component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWorning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is a private info!</p>}
      <WrappedComponent {...props}/>
    </div>
  );
}

const AdminInfo = withAdminWorning(Info);
ReactDOM.render(<AdminInfo isAdmin={true} info='test' />, document.getElementById('app'));