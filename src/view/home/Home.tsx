import React from 'react';

class Home extends React.Component {
  ['a'] = () => true;

  render() {
    if (this.a()) {
      throw new Error('oh noz!');
    }
    return null;
  }
}

export default Home;
