import './App.css';
import './index.css';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import React, { Fragment, useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: 'marios birthday bash', id: 1 },
    { title: 'bowsers live stream', id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ]);

  console.log(showModal);

  //console.log(showEvents);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const subtitle = 'All the latest events in Marioland';

  return (
    <div className='App'>
      <Title title='Events in Your Area' subtitle={subtitle} />
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
      {showEvents && <EventList events={events} handleClick={handleClick} /> }
      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}

      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>Terms and Conditions</h2>
          <p>
            these are the terms and conditions of the product. This is written
            in a different language which i do not understand nor do i care. I
            am simply writing this so that there is a good example of what the
            final version of the modal will look like.
          </p>
          <a href='#'>find out more...</a>
        </Modal>
      )}
      <br />
      <div>
        <button onClick={() => setShowModal(true)}>terms and conditions</button>
      </div>
    </div>
  );
}

export default App;
