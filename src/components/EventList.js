import styles from './EventList.module.css';

export default function EventList(props) {
  return (
    <div>
      {props.events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>
            {index} - {event.title}
          </h2>
          <p>
            {event.location} - {event.date}{' '}
          </p>
          <button onClick={() => props.handleClick(event.id)}>
            delete event
          </button>
        </div>
      ))}
    </div>
  );
}
