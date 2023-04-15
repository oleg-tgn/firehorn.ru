'use strict';

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
              <a className="tournament-button" href={tornament.links.video} target="_blank"><span className="icon icon-photo"></span>Запись турнира</a>
              <a className="tournament-button" href={tornament.links.table} target="_blank"><span className="icon icon-photo"></span>Турнирная таблица</a>
              <a className="tournament-button" href={tornament.links.teams} target="_blank"><span className="icon icon-photo"></span>Команда</a>
              <a className="tournament-button" href={tornament.links.photo} target="_blank"><span className="icon icon-photo"></span>Фотоальбом</a>
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