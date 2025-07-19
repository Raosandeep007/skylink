import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Sandeep yadav",
  initials: "SY",
  url: "https://raosandeep.vercel.app/",
  location: "Bangalore, India",
  locationLink: "https://maps.app.goo.gl/2GDvnAmK3uHWtAyJ6",
  description: "Software Engineer",
  summary:
    "Experienced Frontend Developer. Led interface development with high code quality and cross-functional collaboration. Strong problem-solving skills and experience in End-to-End Testing. Passionate about industry trends and technology exploration. A very curious and self-motivated person, I am looking forward to learning about new technology. Love Boxing 🥊 and Running 🏃‍♂️.",
  avatarUrl: "/me_avatar.png",
  navbar: [
    {
      href: "/",
      icon: HomeIcon,
      label: "Home",
      target: "_self",
      show: true,
    },
  ],
} as const;
