import SignInButton from "@/components/SignInButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[600px] h-[600px]">
        <CardHeader>
          <CardTitle className="text-4xl mb-5">Welcome to Quizmify🔥!</CardTitle>
          <CardDescription className="text-xl">
            <span className="text-2xl mb-5 text-gray-800">Coming soon!</span> <br /><br />
            We are working hard to bring you the best experience. In the meantime, please enjoy a demo of our app!
          </CardDescription>
        </CardHeader>
        <CardContent>
        <video controls src="/quizmify-preview.mp4" width="720" height="240" autoPlay/>
          {/* <SignInButton text="Sign In with Google" /> */}
        </CardContent>
      </Card>
    </div>
  );
}
