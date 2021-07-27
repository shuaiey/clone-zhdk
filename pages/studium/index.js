import ZhdkPage from "components/zhdk-page";
import pageData from "data/studium.json";
// import { usePageData } from "components/zhdk-utils";

const meta = {
  title: "Studium",
  desp: "Die ZHdK gehört mit rund 2100 Bachelor- und Masterstudierenden zu den grössten Kunsthochschulen Europas. Das vielfältige Studienangebot umfasst Bachelor- und Masterstudiengänge in den Disziplinen Art Education, Design, Film, Fine Arts, Musik, Tanz, Theater und Transdisziplinarität.",
};

export default function ZHDKStudium() {
  // const { data } = usePageData("studium", pageData);
  return <ZhdkPage data={pageData} />;
}

ZHDKStudium.layoutProps = {
  meta,
  withHeader: false,
};
