import { UserReviewSectionType } from "@/common/modules/UserReviews";

export default {
  kicker: "Junte-se as equipes que usam a Desker todo dia",
  title: "As pessoas amam a Desker",
  buttons: [
    { title: "Comece agora", href: "/pricing", type: "primary" },
    { title: "Login", href: "/#features", type: "secondary" },
  ],
  userReviews: [
    {
      stars: 5,
      quote:
        "I've been using NextSiders for over a year now and their customer service is excellent! Whenever I have a question, the team is always available and willing to help. Highly recommend!",
      image: {
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
      name: "Melissa Smith",
      role: "Marketing Manager",
    },
    {
      stars: 5,
      quote:
        "NextSiders has made a huge impact on our business! The tools they provide are easy to use and have saved us a lot of time and energy.",
      image: {
        src: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      name: "Jake Johnson",
      role: "Business Owner",
    },
    {
      stars: 5,
      quote:
        "I'm so impressed with the quality of NextSiders' services. They've made a huge difference in our workflow and have helped us become more efficient. ",
      image: {
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      },
      name: "Sarah Williams",
      role: "CEO of Acme Inc.",
    },
  ],
} as UserReviewSectionType;
