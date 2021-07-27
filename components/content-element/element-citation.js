export default function ElementCitation({ html, author }) {
  return (
    <div className="wfull hmin-page flex-center f-6 f-serif fw3 my32">
      <div className="box-3xl px6">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {author && (
          <ul className="ul f-2 list-dash my8">
            {author.map((x, i) => (
              <li key={i} className='flex'>{x}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
