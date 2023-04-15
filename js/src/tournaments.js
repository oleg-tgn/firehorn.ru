'use strict';

function TournamentLink(props) {
  let iconClassName = 'icon ' + props.className;
  return props.href ? <a className="tournament-button" href={props.href} target="_blank"><span className={iconClassName}></span>{props.label}</a> : "";
}

function Tournament(props) {
  const tornament = props.tornament;

  const imageStyle = {
    backgroundImage: 'url(' + tornament.image + ')',
  };
  // Правильно! Не нужно определять здесь ключ:
  return (    
    <div className="tournament">
      <div className="tournament__column tournament__image-column">
          <span className="tournament__image" style={imageStyle}></span>
      </div>
      <div className="tournament__column">
          <h3 className="tournament__title">
            <span className="tournament__num">{tornament.number}</span>            
            {tornament.title}
          </h3>
          <div className="tournament__desc">
            <span className="tournament__date">{tornament.date}</span>
            <span className="tournament__location">{tornament.address}</span>
          </div>
          <div className="tournament__buttons">           
              <TournamentLink href={tornament.links.video} className="icon-photo" label="Запись турнира" />
              <TournamentLink href={tornament.links.video2} className="icon-photo" label="Запись турнира #2" />             
              <TournamentLink href={tornament.links.table} className="icon-table" label="Турнирная таблица" />
              <TournamentLink href={tornament.links.teams} className="icon-teams" label="Участники" />              
              <TournamentLink href={tornament.links.photo} className="icon-photo" label="Фотоальбом" />
          </div>   
      </div>
  </div>
  );
}

function TournamentsList(props) {
  const tornaments = props.tornaments;

  return (
    <ul>
      {tornaments.map((tornament) =>
        <Tournament tornament={tornament} key={tornament.number.toString()}/>
      )}
    </ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById('tournaments'));
root.render(<TournamentsList tornaments={tornaments} />);