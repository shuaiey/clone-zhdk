import ZhdkPage from "components/zhdk-page";
import pageData from "data/home.json";

const meta = {
  title: "Rebuild: Zürcher Hochschule der Künste",
  desp: "Die ZHdK gehört mit rund 2100 Bachelor- und Masterstudierenden zu den grössten Kunsthochschulen Europas. Das vielfältige Studienangebot umfasst Bachelor- und Masterstudiengänge in den Disziplinen Art Education, Design, Film, Fine Arts, Musik, Tanz, Theater und Transdisziplinarität.",
};

export default function CaseZHDK() {
  return <ZhdkPage data={pageData} />;
}

CaseZHDK.layoutProps = {
  meta,
};
