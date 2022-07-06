import './App.css';
import './index.css';
import Title from './components/Title';
import Modal from './components/Modal';
import React, { Fragment, useState } from 'react';

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: 'marios birthday bash', id: 1 },
    { title: 'bowsers live stream', id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ]);

  console.log(showEvents);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  const subtitle = 'All the latest events in Marioland';

  return (
    <div className='App'>
      <Title title='Events in Your Area' subtitle={subtitle} />
      <Title title='another title' subtitle='another subtitle' />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      <br />
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents &&
        events.map((event, index) => (
          <Fragment key={event.id}>
            <h2>
              {index} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>delete event</button>
          </Fragment>
        ))}
      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}

      <Modal>
        <h2>Terms and Conditions</h2>
        <p>
          these are the terms and conditions of the product.  This is written
          in a different language which i do not understand nor do i care.  I am
          simply writing this so that there is a good example of what the final version
          of the modal will look like.
        </p>
        <a href='#'>find out more...</a>
      </Modal>

    </div>
  );
}

export default App;
