import { getAuthSession } from "~/lib/auth";

export default async function chatLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const user = await getAuthSession()

  //if (!user?.user) {
  //  window.location.href = "/sign-in"
  //}

  return (
    <div className="w-full">
      {children}
    </div>
  );
}
