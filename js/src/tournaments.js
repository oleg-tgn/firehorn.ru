'use strict';

//import React, { useState } from 'react';

function TournamentLink(props) {
  let iconClassName = 'icon ' + props.className;
  return props.href ? <a className="tournament-button" href={props.href} target="_blank"><span className={iconClassName}></span>{props.label}</a> : "";
}

function TournamentModalLink(props) {
  let iconClassName = 'icon ' + props.className;
  return props.iframe ? <button className="tournament-button" onClick={() => props.openModal(true, props)}><span className={iconClassName}></span>{props.label}</button> : "";
}

function Tournament(props) {
  const tournament = props.tournament;

  const imageBackgroud = {
    backgroundImage: 'url(' + tournament.image + ')',
  };

  return (
    <div className="tournament">
      <div className="tournament__column tournament__image-column">
          <span className="tournament__image" style={imageBackgroud}></span>
      </div>
      <div className="tournament__column">
          <h3 className="tournament__title">
            <span className="tournament__num">{tournament.number}</span>            
            {tournament.title}
          </h3>
          <div className="tournament__desc">
            <span className="tournament__date">{tournament.date}</span>
            <span className="tournament__location">{tournament.address}</span>
          </div>
          <div className="tournament__buttons">
              <TournamentModalLink className="icon-video" label="Запись турнира" title={tournament.number + " " +tournament.title} iframe={tournament.links.youtubeIframe} openModal={props.openModal} type="youtube"/>
              <TournamentModalLink className="icon-video" label="Запись турнира ч.2" title={tournament.number + " " +tournament.title} iframe={tournament.links.youtubeIframe2} openModal={props.openModal} type="youtube"/>             
              <TournamentModalLink className="icon-table" label="Турнирная таблица" title={tournament.number + " " +tournament.title} iframe={tournament.links.tableIframe} openModal={props.openModal} type="challonge" />
              <TournamentLink href={tournament.links.teams} className="icon-teams" label="Участники" />              
              <TournamentLink href={tournament.links.photo} className="icon-photo" label="Фотоальбом" />
          </div>   
      </div>
  </div>
  );
}

function TournamentsList(props) {

  const tournaments = props.tournaments;

  const openModal = (isVisible, props = {}, type = "youtube") => {
    setModal(isVisible);

    document.body.style.overflow = isVisible ? 'hidden' : '';
    
    modal.title = props.title;
    switch (type) {
      case "youtube": modal.iframe = YouTubeFrame(props.iframe); break;
      case "challonge": modal.iframe = ChallongeFrame(props.iframe); break;
    }
  } 

  const [isModal, setModal] = React.useState(false);
  const [modal] = React.useState({});

  return (
    <div>
      <Modal
        isVisible={isModal}
        title={modal.title}
        content={modal.iframe}
        onClose={() => openModal(false)}
      />

      {tournaments.map((tournament) =>
        <Tournament tournament={tournament} key={tournament.number.toString()} openModal={openModal} />
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('tournaments-list'));
root.render(<TournamentsList tournaments={tournaments} />);