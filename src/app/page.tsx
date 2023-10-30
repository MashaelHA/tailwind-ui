import Button from "@/components/Button";
import SwitchButton from "@/components/SwitchButton";
import Header from "../components/HeaderComponant";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="flex flex-col flex-1 w-full gap-4">
        <h1 className="font-bold text-6xl mb-10 text-center">
          Better reusable UI components
        </h1>
        <div className="flex flex-col gap-10 w-full">
          <div className="flex w-full gap-4 items-center">
            <Button size="large" variant="primary">
              button label
            </Button>
            <Button size="medium" variant="primary" disabled>
              button label
            </Button>
            <Button size="small" variant="primary">
              button label
            </Button>
          </div>
          <div className="flex w-full gap-4 items-center">
            <Button size="large" variant="secondary">
              button label
            </Button>
            <Button size="medium" variant="secondary" disabled>
              button label
            </Button>
            <Button size="small" variant="secondary">
              button label
            </Button>
          </div>
          <div className="flex w-full gap-4 items-center">
            <Button size="large" variant="transparent">
              button label
            </Button>
            <Button size="medium" variant="transparent" disabled>
              button label
            </Button>
            <Button size="small" variant="transparent">
              button label
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-min">
          <SwitchButton labelOff="Option" labelOn="Option" />
        </div>
        <div className="flex flex-row gap-10 w-full">
          <Header />
        </div>
        {/* <svg className="fill-blue-500"></svg> */}
      </div>
    </main>
  );
}
