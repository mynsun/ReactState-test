import { useState } from "react";
import type { Member } from "../types/member.ts";
import MemberCard from "./MemberCard.tsx";
import Navigation from "./Navigation.tsx";
import "./BTS.css";

interface BTSProps {
  members: Member[];
}

export default function BTS({ members }: BTSProps) {
  const [index, setIndex] = useState<number>(0);
  const changeIndex = (newIndex: number): void => {
    const len = members.length;
    setIndex((newIndex + len) % len);
  };

  return (
    <div className="member-container">
      <MemberCard member={members[index]} />
      <Navigation index={index} onChangeIndex={changeIndex} />
    </div>
  );
}
