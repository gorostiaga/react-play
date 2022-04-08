import { Link } from 'react-router-dom';
import './home.css';
import { RiSlideshow4Line } from "react-icons/ri";
import { BiShareAlt, BiAddToQueue } from "react-icons/bi";
import { ReactComponent as Flower } from 'images/icon-flower.svg';

import FeaturedPlays from 'common/playlists/FeaturedPlays';
import YouTubeEmbed from 'common/components/YouTubeEmbed';

const Home = () => {
  return (
    <div>
      <section className="app-home-body">
        <div className="home-bg-graphics">
          <Flower className="home-bg-graphics-sm" />
          <Flower className="home-bg-graphics-rg" />
          <Flower className="home-bg-graphics-lg" />  
        </div>
        <h2 className="body-title">Start <strong>React Code</strong> Arena <br/>with ReactPlay</h2>
        <p className="body-desc">
          React Play is an opensource application to learn, contribute and give back to 
          the React developer community. Do you want to know more on how it works? Please check out
          the video below.</p>
        <div className="video">
          <YouTubeEmbed videoId="D_cUdRtPG-M" title="What is ReactPlay?"/>
        </div>
        <ul className="home-features">
          <li className="home-features-item">
            <div className="item-icon">
              <RiSlideshow4Line className="icon" color='var(--color-neutral-90)' />
            </div>
            <h3 className="item-title">Learn </h3>
            <p className="item-desc">
              Learn how to "Think in React" and build applications inspired by several plays(examples and demos).
              Get to the source code of it, find related article, or even a YouTube video.
            </p>
          </li>
          <li className="home-features-item">
            <div className="item-icon">
              <BiAddToQueue className="icon" color='var(--color-neutral-90)' />
            </div>
            <h3 className="item-title">Create </h3>
            <p className="item-desc">
              Create your own play and own it by following a few simple steps. Learned something new? 
              Perfect to present as a play. You can also contribute to the existing plays.
            </p>
          </li>
          <li className="home-features-item">
            <div className="item-icon">
              <BiShareAlt className="icon" color='var(--color-neutral-90)' />
            </div>
            <h3 className="item-title">Socialize </h3>
            <p className="item-desc">
              Share your plays with the community. You can share your plays on social media platforms 
              like Facebook, Twitter, LinkedIn, to name a few, just with a single click.
            </p>
          </li>
        </ul>
      </section>
      <section className="home-plays">
        <h3 className="plays-title-primary">Trending <strong>Plays</strong></h3>
        {/*<nav>
          <ul className="pills-category">
            <li>
              <Link to="/plays" className="active">Popular</Link>
            </li>
            <li><Link to="/plays">Bubble Sort</Link></li>
            <li><Link to="/plays">Arrays</Link></li>
            <li><Link to="/plays">Linked List</Link></li>
          </ul>
        </nav>
        */}
        
        <FeaturedPlays />
        
        <div className="home-plays-footer">
          <Link to="/plays" className="home-anchor"><span className="text">View all ReactPlays</span></Link>
        </div>
      </section>
    </div>
  );
};

export default Home;