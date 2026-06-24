import Sidebar from "../components/sideBar";
import { authHandle } from "../authHandle";
import { getUser } from "../getUser";

function StatChart({
  language = "others",
  percent,
}: {
  language: string;
  percent: number;
}) {
  const childWidth = percent * 2;
  return (
    <>
      <div className="flex justify-center items-center gap-3 ml-auto">
        <p className="text-semibold text-1xl text-green-200 capitalize">
          {language}
        </p>
        <div
          style={{ width: "200px" }}
          className="text-center text-blue-200 bg-gray-700 rounded-full h-3 max-h-fit p-0 w-50"
        >
          <div
            style={{ width: childWidth }}
            className={`bg-gray-300 h-full rounded-full`}
          />
        </div>
      </div>
    </>
  );
}
export default async function Dashboard() {
  authHandle();
  const user = await getUser();
  return (
    <div className="bg-gray-900 min-h-screen pl-0 justify-center align-middle md:pl-60">
      <Sidebar currentRoute={"dashboard"} />
      <h1 className="capitalize text-2xl font-semibold text-pink-50 m-auto w-fit mt-10">
        dashboard
      </h1>
      <div className="flex flex-wrap justify-between gap-25 lg:gap-100 m-auto mlw-10 mt-20">
        <div className="flex flex-col w-fit gap-10 m-auto">
          <div className="flex flex-row gap-15">
            <p className="text-center text-blue-400 capitalize font-semibold">
              {user?.snippets?.length ?? 0} <br /> snippets
            </p>
            <p className="text-center text-green-200 capitalize font-semibold">
              {user?.playground?.length ?? 0} <br /> playgrounds
            </p>
          </div>
        </div>
        <div className="min-w-60 min-h-20 md:mr-auto text-center m-auto">
          <div className="flex flex-col gap-2 items-center">
            <StatChart language="javascript" percent={35} />
            <StatChart language="python" percent={25} />
            <StatChart language="rust" percent={34} />
            <StatChart language="others" percent={6} />
          </div>
        </div>
      </div>
    </div>
  );
}
