import { CustomContentGenerator, EventContentArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import list from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridWeek from "@fullcalendar/timegrid";

const events = [
  { title: "Meeting M", start: new Date(), extendedProps: { type: "MANUEL" } },
  { title: "Meeting H", start: new Date(), extendedProps: { type: "HERNAN" } },
];

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin, timeGridWeek,list]}
      initialView="timeGridWeek"
      editable
      weekends={false}
      events={events}
      eventContent={renderEventContent}
      eventDragStart={(event) => {
        console.log("eventDragStart", event);
      }}
      eventDragStop={(event) => {
        console.log("eventDragStop", event);
      }}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
      }}
      eventClassNames={(arg) => arg.event.extendedProps.type === "MANUEL" ? "bg-green-300" : "bg-red-300"}
    />
  );
}

// a custom render function
const renderEventContent: CustomContentGenerator<EventContentArg> = (
  eventInfo,
  _createElement,
) => {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
};
