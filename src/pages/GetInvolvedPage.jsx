import { useEffect } from "react";
import GetInvolved from "../components/GetInvolved";
import PageHeader from "../components/PageHeader";

const GetInvolvedPage = () => {
  useEffect(() => {
    document.title = "Get Involved | Eventhive";

    return () => {
      document.title = "Get Involved | Eventhive";
    };
  }, []);

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

export default GetInvolvedPage;
