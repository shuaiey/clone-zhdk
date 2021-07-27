export const DefaultCardContent = ({ date, title, type, subtitle }) => {
  return (
    <div className="p5 bg-gray-200 flex-col">
      <span className="f-1 fw7">{date}</span>
      {type && <span className="fsi">{type}</span>}
      <h3 className="f-6 fw7 lh5 my2">{title}</h3>
      {subtitle && <p className="fw5 f-4">{subtitle}</p>}
    </div>
  );
};

export const ProjectCardContent = ({ title, subtitle, authors }) => {
  return (
    <div className="p5 bg-gray-200 flex-col">
      <span className="f-1 fw7">{authors.join(", ")}</span>
      <h3 className="f-6 fw7 lh5 my2">{title}</h3>
      {subtitle && <p className="fw5 f-4">{subtitle}</p>}
    </div>
  );
};

export const NewsContent = ({ date, title, type, subtitle }) => {
  return (
    <div className="p5 bg-gray-200 flex-col">
      <span className="f-1 fw7">{date}</span>
      {type && <span className="fsi">{type}</span>}
      <h3 className="f-6 fw7 lh5 my2">{title}</h3>
      {subtitle && <p className="fw5 f-4">{subtitle}</p>}
    </div>
  );
};

export const HighlightArticleContent = ({ title, description }) => {
  return (
    <div className="p5 flex-col f-break">
      <h3 className="f-5 fw7 lh5 my2 f-serif">{title}</h3>
      {description && <p className="fw5 f-4 lh5">{description}</p>}
      <div className="fw7 mt4">● Read</div>
    </div>
  );
};
