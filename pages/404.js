import MyLink from "components/basic/my-link";

export default function Page404() {
  return (
    <div className="box-3xl mx-auto py24">
      <h1 className="ff-16 mb4 fwb">
        <span role="img" aria-label="Robot head">
          🤖
        </span>{" "}
      </h1>
      <div className="ff-8 f-gray-400">
        <p>Nah... Sorry, I didn't make this page.</p>
        <p>
          Maybe go back to{" "}
          <MyLink href="/" className="underline">
            homepage
          </MyLink>
          .
        </p>
      </div>
    </div>
  );
}
