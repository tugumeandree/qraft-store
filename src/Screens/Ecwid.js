import React from 'react';

export default class Ecwid extends React.Component {
  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = `document.write('This is output by document.write()!')`;
    this.instance.appendChild(s);
  }

  render() {
    console.log('hi');
    return <div ref={el => (this.instance = el)} />;
  }
}
