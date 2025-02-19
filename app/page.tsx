import { posthog } from "@/utils/posthog";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Page() {
  const { userId } = await auth();

  posthog.capture({ distinctId: userId!, event: "Page Viewed" });

  return (
    <div>
      <UserButton />
      <p>This is a sample page.</p>
    </div>
  );
}
