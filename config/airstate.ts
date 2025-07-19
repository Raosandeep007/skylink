import { configure } from "@airstate/client";

export const airstate = {
  appKey: process.env.NEXT_PUBLIC_AIRSTATE_APP_KEY,
};

console.log("Airstate conected");

configure({
  appKey: airstate.appKey,
});
