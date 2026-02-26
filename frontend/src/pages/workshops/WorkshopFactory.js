import React from "react";
import "../../styles/Workshop_template_1.css";

import Workshop_template_1 from "./templates/Workshop_template_1";
import "../../styles/WorkshopFactory.css";

import CONFIG_BY_ID from "../../data/workshopConfigs";
import { useParams } from "react-router-dom";


export default function WorkshopFactory({ _predefinedDestinationId }) {
  const { _destination_id } = useParams();
  const destinationId =
    _predefinedDestinationId != null ? _predefinedDestinationId : _destination_id;

  const data = destinationId ? CONFIG_BY_ID[destinationId] : null;
  if (data) return <Workshop_template_1 data={data} />;

  return <div className="container-lg min-vh-100 align-items-center">No data</div>;
}
