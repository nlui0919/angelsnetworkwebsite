import { useState } from "react";
import type { NextPage } from "next";
import Box from "../components/Box";
import FAQ from "../components/FAQ";
import FAQItems from "../components/FAQItems";
import Events from "../components/Events";


const Home: NextPage = () => {
  const [count, setCount] = useState(0);
  const accordionItems = [
    {
      title: "When does Angel’s Network meet?",
      content: (
        <div> We host a service event each month, although we do not have weekly general meetings. 
        </div>
      )
    },
    {
      title: "Is it too late to join?",
      content: (
        <div> No, it’s never too late to join the club! Be sure to sign-up for our email list here, and you should be good to go. </div>
      )
    },
    {
      title: "How often do you need to participate? How will this affect service hours?",
      content:(
        <div>Everyone is welcome to participate in however many events they would like. There is also no service hour requirement for membership. Feel free to invite your friends to join in on our events, even if they are not members of Angel’s Network!</div>
      )
    },
    {
      title: "How many community service hours can you earn by attending events?",
      content:(
        <div>Each event has a different service hour policy depending on the time, effort, and/or cost of the service performed. We will release this information prior to each event to keep you informed.</div>
      )
    },
    {
      title: "How will Angel’s Network verify my service hours?",
      content:(
        <div>In order for us to keep track of service hours, there will be a form (either digital or paper) at each event for members to sign in and out. After participating in an event, be sure to fill out a blank service hour form detailing your service. Email your filled out form to our sponsor, Dr. Johnson (davin_johnson@hcpss.org) for him to verify your hours.</div>
      )
    },
    {
      title: "How do events work?",
      content:(
        <div>Each month, we host one (or more) service event that benefits a non-profit organization. We have a few core events that we host every year, such as Thanksgiving Lunch Packing, Winter Survival Kits, and River Hill’s Annual Talent Show.</div>
      )
    },
    {
      title: "Is there a group chat for members to join",
      content:(
        <div>Yes, we have a Remind! Please text @rhhsang to 81010 to join for updates and reminders. (This is a different Remind from last year, so returning members should join this one as well!)</div>
      )
    },
    
  ];

  return <>
    <Events></Events>
    <FAQ items={accordionItems}/>
  </>;
};

export default Home;
