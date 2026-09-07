import { redirect } from "next/navigation";

/* This route never had content. Send the reader to the nearest page that does. */
export default function Page() {
  redirect("/Universities/Cities");
}
