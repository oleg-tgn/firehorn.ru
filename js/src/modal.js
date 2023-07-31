const Modal = ({ isVisible = false, title, content, footer, onClose }) => {
    const keydownHandler = ({ key }) => {
      switch (key) {
        case 'Escape':
          onClose();
          break;
        default:
      }
    };
  
    React.useEffect(() => {
      document.addEventListener('keydown', keydownHandler);
      return () => document.removeEventListener('keydown', keydownHandler);
    });
  
    return !isVisible ? null : (
      <div className="modal" onClick={onClose}>
        <div className="modal__dialog" onClick={e => e.stopPropagation()}>
          <div className="modal__header">
            <h3 className="modal__title">{title}</h3>
            <span className="modal__close" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="modal__body">
            <div className="modal__content">{content}</div>
          </div>
          {footer && <div className="modal__footer">{footer}</div>}
        </div>
      </div>
    );
  };

const YouTubeFrame = (link) => {
    return (
      <div className="frame youtube">
        <iframe width="100%" height="100%" className="frame__iframe" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    )
}

const PhotoFrame = (link) => {
  return (
    <div className="frame photo">
      <iframe width="100%" height="100%" className="frame__iframe" src={link} frameBorder="0" scrolling="auto" allowtransparency="true"></iframe>
    </div>
  )
}

const TableFrame = (link) => {
  let linkType = "";
  if (link.includes('challonge.com'))
    linkType = "challonge";
  else if (link.includes('docs.google.com'))
    linkType = "docs";

  const wrapClass = "frame " + linkType;
  return (
    <div className={wrapClass}>
      <iframe width="100%" height="100%" className="frame__iframe" src={link} frameBorder="0" scrolling="auto" allowtransparency="true"></iframe>
    </div>
  )
}

const TeamsFrame = (teams) => {
  const listWinners = teams.winners && teams.winners.map((person) =>
    <li className="teams-list__item" key={person.toString()}>{person}</li>
  );

  const teamsList = teams.teams && teams.teams.map((team) =>
    <li className="teams-list__item" key={team.name.toString()}>
      <strong className="teams-list__team-name">{team.name}</strong>
      <ul className="teams-list">
        {team.participants.map((person) =>
          <li className="teams-list__item" key={person.toString()}>{person}</li>
        )}
      </ul>
    </li>
  );

  return (
    <div className="teams">
      {teams.winners &&
        <h2 className="teams__title">Победители:</h2> }
      <ul className="teams-list">
        {listWinners}
      </ul>
      {teams.teams &&
        <h2 className="teams__title">Участники:</h2>}
      <ul className="teams-list">
        {teamsList}
      </ul>
    </div>
  )
}