import React, {Fragment} from 'react'

export default function EventList(props) {
  return (
    <div>
        {props.events.map((event, index) => (
          <Fragment key={event.id}>
            <h2>
              {index} - {event.title}
            </h2>
            <button onClick={() => props.handleClick(event.id)}>delete event</button>
          </Fragment>
        ))}
    </div>
  )
}
