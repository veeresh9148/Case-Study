import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Request List',
    path: "./Requests/RequestList",
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Create Service Request',
    path: "./Requests/CreateServiveRequest",
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Completed View Service Request',
    path: "./Requests/CompletedViewServiceRequest",
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Rejected View Service Request',
    path: "./Requests/RejectedViewServiceRequest",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Assigned View Service Request',
    path: "./Requests/AssignedViewServiceRequest",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Cancelled View Service Request',
    path: "./Requests/CancelledViewServiceRequest",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];