// ! Events Page Page => /events/event
// TODO: Integrate event details (Modal) with each event card

import { useState, useEffect } from "react";
import eventsData from "../data/eventsData";
import EventCard from "./EventCard";
import { getAllEvents } from "../actions/events";
import { useDispatch, useSelector } from "react-redux";
import eventsBg from "../assets/events-bg.jpg";
import SideBar from "./SideBar";
import Navbar from "./navbar";

function Events(props) {
  const { onStageEvents } = eventsData;
  const { title } = props;
  const dispatch = useDispatch();
  // const [showEventModal, setShowEventModal] = useState(false)

  useEffect(() => {
    document.title = title;
    dispatch(getAllEvents());
  }, []);

  const { all_events, loading } = useSelector((state) => state.event);

  return loading || !all_events ? (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      Loading
    </div>
  ) : (
    <div className="">
      <div className="fixed">
        <Navbar />
        <SideBar />
      </div>
      <div
        className="min-h-screen"
        style={{
          background: `url('${eventsBg}') no-repeat`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80vw] mx-auto py-16">
          <h1
            className="uppercase text-[#F8E0B7] text-center text-5xl font-bold"
            style={{ fontFamily: "MangoGrotesque" }}
          >
            All Events
          </h1>
          <div className="flex flex-wrap justify-center gap-5 md:gap-x-10 mt-14">
            {all_events.map((event) => {
              return (
                <div
                  key={event.category_name}
                  className="w-[80vw] mx-auto py-16"
                >
                  <h1
                    className="uppercase text-[#F8E0B7] text-center text-5xl font-bold"
                    style={{ fontFamily: "MangoGrotesque" }}
                  >
                    {event.category_name}
                  </h1>
                  <div className="flex flex-wrap justify-center gap-5 md:gap-x-10 mt-14">
                    {event.events.map((ev) => {
                      return <EventCard key={ev.id} event={ev} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className='w-[80vw] mx-auto py-16'>
                    <h1 className="uppercase text-[#F8E0B7] text-center text-5xl font-bold" style={{ 'fontFamily': 'MangoGrotesque' }}>OnStage Events</h1>
                    <div className="flex flex-wrap justify-center gap-5 md:gap-x-10 mt-14">
                        {onStageEvents.map((event) => {
                            return (
                                <div key={event.id} onClick={() => setShowEventModal(true)}>
                                    <EventCard key={event.id} event={event} onClick={() => console.log(showEventModal)} />
                                </div>
                            )
                        })}
                    </div>
                </div> */}
      </div>
    </div>
  );
}

export default Events;
