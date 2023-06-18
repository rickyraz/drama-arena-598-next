/* eslint-disable no-undef */

import { Provider } from "react-wrap-balancer";

export const metadata = {
  title: "Drama Arena 598 - Gontor Dua",
  description: "Pagelaran seni Drama Arena 598 di Darussalam Gontor Kampus 2",
};

interface GontoDuaProps {
  children: React.ReactNode;
}

export default function GontorDuaLayout({ children }: GontoDuaProps) {
  return (
    <div>
      <main>
        <Provider>{children}</Provider>
      </main>
    </div>
  );
}
