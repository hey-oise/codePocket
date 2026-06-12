import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "@/stack/server"; // ⚠️ Fix this path to point to your stack configuration file

export default function Handler(props: any) {
  return (
    <StackHandler app={stackServerApp} routeProps={props} fullPage={true} />
  );
}
