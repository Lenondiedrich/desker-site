import { FoundersNoteType } from "@/common/modules/FoundersNote";
import ImageFoundersNote from "@/assets/images/FoundersNote.User.png";

export default {
  kicker: "Founders Note",
  title: "It's no secret that constructing a website is not an easy task.",
  note: `For those of us who are unfamiliar with web development, building our own websites can be downright daunting. It could require months of work to figure out the coding and countless hours spent troubleshooting technical issues. 
  
  That’s why I founded NextSiders to make it easier for website owners to design custom-made websites quickly and easily without having to code or spend time learning complex HTML & CSS.
  
  We understand that you need your website up and running in a timely manner; whether you're launching a business, opening a store, or simply wanting to have your voice heard on the web – our goal is simple: Make creating websites as effortless as possible for non-coders. Our NextJS templates provide prewritten codes which allow users to customize any existing template with text changes — no programming required!
  
  The end result? A fully functional site that has been tailored according to user preferences in what feels like minutes — with hundrets of hours worth of work done under the hood. So whether you already have some experience with coding or none at all, NextSiders helps put modern high-quality websites within reach for anyone who wants one!`,
  buttons: [
    { title: "Get Started", href: "/pricing", type: "primary" },
    { title: "Learn More", href: "/#features", type: "secondary" },
  ],
  founder: {
    name: "Eduard G.",
    role: "CEO of NextSiders",
    image: {
      src: ImageFoundersNote,
    },
  },
} as FoundersNoteType;
