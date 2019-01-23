import React from 'react';
import { Table } from '..';
import { entries } from './data';

interface Props {}

const State = () => ({
  viewIndex: 0,
  history: [0, 2, 1],
});

interface State extends ReturnType<typeof State> {}

class About extends React.Component<Props, State> {
  readonly state = State();

  render() {
    const { viewIndex } = this.state;

    const activeThought = entries[viewIndex];

    return (
      <div className="about">
        <h1 className="about-banner">about...</h1>
        <p className="about-lead">
          for the purposes that this site was created for, a simple "about" page felt like a waste. so this is a sandbox
          of sorts, trying out different features.
        </p>
        <div className="about-viewer">
          <h2>{activeThought.title}</h2>
          <p>{activeThought.blurb}</p>
        </div>
        <div className="about-picker">
          <div className="about-picker-history">
            <h3>history</h3>
            <ul>
              {this.state.history
                .map(idx => entries[idx])
                .map(({ title, blurb }) => (
                  <li key={title + blurb}>{title}</li>
                ))}
            </ul>
          </div>
          <Table
            className="about-picker-table"
            data={entries}
            headerSpec={{
              title: { headerClassName: 'about-picker-table-title-header', dataClassName: 'about-picker-table-title' },
              blurb: { dataClassName: 'about-picker-table-blurb' },
            }}
          />
        </div>
      </div>
    );
  }
}

export default About;
