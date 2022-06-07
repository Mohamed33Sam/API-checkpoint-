import React from "react";
import { useLocation } from "react-router-dom";
import { MdMarkEmailUnread } from "react-icons/md";
import { GiModernCity } from "react-icons/gi";

import { BsFillTelephoneInboundFill } from "react-icons/bs";
function Details() {
  const { state } = useLocation();
  const person = state.data;

  return (
    <div className="Users-Details">
      <p>Name: {person.name}</p>
      <p>UserName: {person.username}</p>
      <p>
        {" "}
        <MdMarkEmailUnread />
        Email: {person.email}
      </p>
      <p>
        <GiModernCity />
        Address: {person.address.city},{person.address.street}
      </p>
      <p>
        <BsFillTelephoneInboundFill />
        phone: {person.phone}
      </p>
    </div>
  );
}

export default Details;
