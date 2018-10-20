import React, { Component } from 'react';
import { Table } from '../components';

const entries = [
  {
    title: 'about makes.life',
    blurb:
      "makes.life came to be when i happened to read some cross-posted link on deadspin about all these new top level domains that were now real words (as opposed to the standard `.com`s and `.org`s of the world).  so i bought one that included some word play around my last name because at that point, i was *not* ready for purchasing `mmdb` and exposing it to the world.  since then, this domain name has given me the chance to really explore some public-facing code problems.  with it, i've studied angular, gulp with bower, html and css, react, github pages (both project and user sites), and hosting a site on github but redirected through a custom domain.  as you can guess, i'm very proud of where this has gotten to and would never in my wildest dreams have been able to see this coming (the site or the more broad idea that i could even do this stuff).  anyways, if you find yourself reading this, i want to simply say 'welcome' and 'enjoy'.  i am still a man of many more words than that so really, don't hesitate to reach out and chat.",
  },
  {
    title: 'about me',
    blurb:
      "me has sleeper status to be one of the first topics to get its own multipart series (once that kind of thing is supported around here...).  i'll keep this post just like me: short and simple.  i am a professional coder by day and a hobby coder by night (some very late nights there).  i will watch sports for literally *any* reason and have a good time doing it.  at the end of the day, i like games and rules and competition.  i hope to one day run the atlanta braves, but i'll settle for just being on their team when they pull their first world series victory since the 90's.  i am the youngest of three children: my oldest brother matt and middle sister kate can take a lot of credit for the person i am today (at least the good parts).  the only thing i do more than eat and drink is run.  and after i have my world series ring, i plan on attending culinary school and opening up a deli/bar/restaurant.  enough about me though...",
  },
  {
    title: 'about umpires',
    blurb:
      "umpires are not (at least as far as i can tell) given enough credit for how they may shape a baseball player's future prospects.  game 5 of the 2018 alcs featured a tough at bat for justin verlander: tied 0-0 in the 3rd after escaping a jam in the inning prior, he had j.d. martinez in an 0-2 count threw a perfect pitch (slider maybe?) that really did paint low-and-away.  catcher might have over-framed it (if there is such a thing) but whatever the reason was, verlander did not get the call nor the strikeout.  on the very next pitch, he hung a curveball up in the zone and j.d. hung it up in the ozone.  ignore the mental aspects of such a frustrating thing that happened, one could make the argument through stats alone that at this point, verlander could have either given up 1 run or no runs in this inning all due to the judgement of an ump.  worst still, it sure seemed from the tracking data that the ump got the call wrong.  i am not calling for all stats to now be normalized to ump behavior and that to become the de facto bar to measure players against, but you cannot deny it would be interesting to start capturing pitcher statistics based on a 'robot umpire' calling the game... you could spot players who might have been unlucky in a few small spots.  you could spot players who seem to get a bad call and then *completely* fall apart thereafter.",
  },
];

const initialState = {
  viewIdx: 0,
  history: [0, 2, 1] as number[],
};
type State = typeof initialState;

class About extends Component<any, State> {
  state: State = initialState;

  render() {
    const activeThought = entries[this.state.viewIdx];
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
              {this.state.history.map(idx => entries[idx]).map(({title, blurb}) => (
                <li key={title + blurb}>{title}</li>
              ))}
            </ul>
          </div>
          <Table
            className="about-picker-table"
            data={entries}
            headerSpec={{
              title: { headerClassName: 'about-picker-table-title-header', dataClassName: 'about-picker-table-title' },
              blurb: { dataClassName: 'about-picker-table-blurb' }
            }}
          />
        </div>
      </div>
    );
  }
}

export default About;
