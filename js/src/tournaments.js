'use strict';

//import React, { useState } from 'react';

function TournamentLink(props) {
  let buttonClass = "tournament-button"
  if (!props.href)
    buttonClass += " disable";
  return <a className="tournament-button" href={props.href} target="_blank" disabled={!props.href}><i className={props.iconClassName}></i>{props.label}</a>;
}

function TournamentModalLink(props) {
  let buttonClass = "tournament-button"
  if (!props.content)
    buttonClass += " disable";
  return <button className={buttonClass} onClick={() => props.openModal(true, props)} disabled={!props.content}><i className={props.iconClassName}></i>{props.label}</button>;
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
              <div className="tournament__youtube_buttons">
                <TournamentModalLink iconClassName="fa-regular fa-circle-play" label="Запись турнира" title={tournament.number + " " +tournament.title} content={tournament.links.youtubeIframe} openModal={props.openModal} type="youtube"/>
                {tournament.links.youtubeIframe2 &&
                  <TournamentModalLink iconClassName="fa-regular fa-circle-play" label="Запись турнира ч.2" title={tournament.number + " " +tournament.title} content={tournament.links.youtubeIframe2} openModal={props.openModal} type="youtube"/>}
              </div>
              <TournamentModalLink iconClassName="fa-solid fa-diagram-project" label="Турнирная таблица" title={tournament.number + " " + tournament.title} content={tournament.links.tableIframe} openModal={props.openModal} type="challonge" />
              <TournamentModalLink iconClassName="fa-solid fa-people-group" label="Участники" title={tournament.number + " " + tournament.title} openModal={props.openModal} content={tournament.links.teams} type="teams"/>
              {tournament.links.tableType}
              <TournamentLink iconClassName="fa-regular fa-image" label="Фотоальбом" title={tournament.number + " " + tournament.title} href={tournament.links.photo} type="photo"/>
          </div>
      </div>
  </div>
  );
}

function TournamentsList(props) {

  const tournaments = props.tournaments;

  const openModal = (isVisible, props = {}, type) => {
    setModal(isVisible);

    document.body.style.overflow = isVisible ? 'hidden' : '';

    modal.title = props.title;

    switch (props.type) {
      case "youtube": modal.content = YouTubeFrame(props.content); break;
      case "challonge": modal.content = TableFrame(props.content); break;
      case "teams": modal.content = TeamsFrame(props.content); break;
      case "photo": modal.content = PhotoFrame(props.content); break;
    }
  }

  const [isModal, setModal] = React.useState(false);
  const [modal] = React.useState({});

  return (
    <div>
      <Modal
        isVisible={isModal}
        title={modal.title}
        content={modal.content}
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