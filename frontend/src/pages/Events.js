import React from "react";
import { EVENT_TYPE_URL_PREFIX_MAPPING } from "./config";
import "../styles/Events.css";
import { useNavigate } from "react-router-dom";
import eventsData from "../data/eventsData";

function Events() {
  const navigate = useNavigate();
  const data = Array.isArray(eventsData) ? eventsData : [];

  return (
    <div id="whole" className="d-flex flex-column justify-content-start align-items-center min-vh-100 w-100">
      <div className="events-container">
        <h1 className="events-title">Events</h1>
        <p className="events-subtitle">Catch our latest events.</p>
        <div className="events-underline" />
      </div>
      {data.filter((ev) => ev?.show !== false).length === 0 ? (
        <p className="text-muted">No data</p>
      ) : (
        <div className="events-list">
          {data
            .filter((ev) => ev?.show !== false)
            .map((ev) => (
              <div className="d-flex flex-column justify-content-start align-items-start" key={ev.pk || ev._id}>
                <div className="card h-100 shadow-sm">
                  {ev.image && (
                    <img
                      src={ev.image}
                      alt={ev.title || "event image"}
                      className="card-img-top"
                    />
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{ev.title || "Untitled"}</h5>
                    <div className="card-text mb-2 d-flex flex-row align-items-center justify-content-start">
                      <span className="badge bg-secondary me-2">
                        {ev._type?.toUpperCase() || "EVENT"}
                      </span>
                      <small className="text-muted">
                        {"Posted at " + ev.post_time + " " + `(${ev.time_zone})`}
                      </small>
                    </div>
                    <p className="text"><small>{ev.subtitle || ""}</small></p>

                    <a
                      className="mt-auto btn btn-sm btn-dark"
                      aria-disabled="true"
                      onClick={() =>
                        (window.scrollTo({ top: 0, left: 0, behavior: "instant" }),
                        navigate(`${EVENT_TYPE_URL_PREFIX_MAPPING[ev._type]}${ev._destination_id}`))
                      }
                    >
                      Check details
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Events;
