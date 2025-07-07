import GetInvolved from "@/components/GetInvolved";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Get Involved | Eventhive.ng",
};

const Page = () => {
  return (
    <main className="get-involved-page">
      <PageHeader
        title={"Get Involved"}
        bgdImg={"/images/headers/involved.png"}
      />
      {/* <div className="container"> */}
      <GetInvolved />
      {/* </div> */}
    </main>
  );
};

export default Page;
