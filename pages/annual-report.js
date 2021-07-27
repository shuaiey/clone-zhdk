import pageData from "data/jahrebericht2020.json";
// import { usePageData } from "realcase/zhdk/zhdk-utils";
import ZhdkAnnualReportLayout from "components/layout/layout-annual-report";

const meta = {
  title: "Annual report | Zürcher Hochschule der Künste",
  desp: "Die ZHdK gehört mit rund 2100 Bachelor- und Masterstudierenden zu den grössten Kunsthochschulen Europas. Das vielfältige Studienangebot umfasst Bachelor- und Masterstudiengänge in den Disziplinen Art Education, Design, Film, Fine Arts, Musik, Tanz, Theater und Transdisziplinarität.",
};

export default function CaseZHDKAnnualReport() {
  // const { data } = usePageData("jahrebericht2020", pageData);

  return <ZhdkAnnualReportLayout data={pageData} />;
}

CaseZHDKAnnualReport.layoutProps = {
  meta,
  // withHeader: false,
};
