'use strict';

//import React, { useState } from 'react';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function TournamentLink(props) {
  var buttonClass = "tournament-button";
  if (!props.href) buttonClass += " disable";
  return React.createElement(
    "a",
    { className: "tournament-button", href: props.href, target: "_blank", disabled: !props.href },
    React.createElement("i", { className: props.iconClassName }),
    props.label
  );
}

function TournamentModalLink(props) {
  var buttonClass = "tournament-button";
  if (!props.content) buttonClass += " disable";
  return React.createElement(
    "button",
    { className: buttonClass, onClick: function onClick() {
        return props.openModal(true, props);
      }, disabled: !props.content },
    React.createElement("i", { className: props.iconClassName }),
    props.label
  );
}

function Tournament(props) {
  var tournament = props.tournament;

  var imageBackgroud = {
    backgroundImage: 'url(' + tournament.image + ')'
  };

  return React.createElement(
    "div",
    { className: "tournament" },
    React.createElement(
      "div",
      { className: "tournament__column tournament__image-column" },
      React.createElement("span", { className: "tournament__image", style: imageBackgroud })
    ),
    React.createElement(
      "div",
      { className: "tournament__column" },
      React.createElement(
        "h3",
        { className: "tournament__title" },
        React.createElement(
          "span",
          { className: "tournament__num" },
          tournament.number
        ),
        tournament.title
      ),
      React.createElement(
        "div",
        { className: "tournament__desc" },
        React.createElement(
          "span",
          { className: "tournament__date" },
          tournament.date
        ),
        React.createElement(
          "span",
          { className: "tournament__location" },
          tournament.address
        )
      ),
      React.createElement(
        "div",
        { className: "tournament__buttons" },
        React.createElement(
          "div",
          { className: "tournament__youtube_buttons" },
          React.createElement(TournamentModalLink, { iconClassName: "fa-regular fa-circle-play", label: "\u0417\u0430\u043F\u0438\u0441\u044C \u0442\u0443\u0440\u043D\u0438\u0440\u0430", title: tournament.number + " " + tournament.title, content: tournament.links.youtubeIframe, openModal: props.openModal, type: "youtube" }),
          tournament.links.youtubeIframe2 && React.createElement(TournamentModalLink, { iconClassName: "fa-regular fa-circle-play", label: "\u0417\u0430\u043F\u0438\u0441\u044C \u0442\u0443\u0440\u043D\u0438\u0440\u0430 \u0447.2", title: tournament.number + " " + tournament.title, content: tournament.links.youtubeIframe2, openModal: props.openModal, type: "youtube" })
        ),
        React.createElement(TournamentModalLink, { iconClassName: "fa-solid fa-diagram-project", label: "\u0422\u0443\u0440\u043D\u0438\u0440\u043D\u0430\u044F \u0442\u0430\u0431\u043B\u0438\u0446\u0430", title: tournament.number + " " + tournament.title, content: tournament.links.tableIframe, openModal: props.openModal, type: "challonge" }),
        React.createElement(TournamentModalLink, { iconClassName: "fa-solid fa-people-group", label: "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438", title: tournament.number + " " + tournament.title, openModal: props.openModal, content: tournament.links.teams, type: "teams" }),
        tournament.links.tableType,
        React.createElement(TournamentLink, { iconClassName: "fa-regular fa-image", label: "\u0424\u043E\u0442\u043E\u0430\u043B\u044C\u0431\u043E\u043C", title: tournament.number + " " + tournament.title, href: tournament.links.photo, type: "photo" })
      )
    )
  );
}

function TournamentsList(props) {

  var tournaments = props.tournaments;

  var openModal = function openModal(isVisible) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = arguments[2];

    setModal(isVisible);

    document.body.style.overflow = isVisible ? 'hidden' : '';

    modal.title = props.title;

    switch (props.type) {
      case "youtube":
        modal.content = YouTubeFrame(props.content);break;
      case "challonge":
        modal.content = TableFrame(props.content);break;
      case "teams":
        modal.content = TeamsFrame(props.content);break;
      case "photo":
        modal.content = PhotoFrame(props.content);break;
    }
  };

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isModal = _React$useState2[0],
      setModal = _React$useState2[1];

  var _React$useState3 = React.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 1),
      modal = _React$useState4[0];

  return React.createElement(
    "div",
    null,
    React.createElement(Modal, {
      isVisible: isModal,
      title: modal.title,
      content: modal.content,
      onClose: function onClose() {
        return openModal(false);
      }
    }),
    tournaments.map(function (tournament) {
      return React.createElement(Tournament, { tournament: tournament, key: tournament.number.toString(), openModal: openModal });
    })
  );
}

var root = ReactDOM.createRoot(document.getElementById('tournaments-list'));
root.render(React.createElement(TournamentsList, { tournaments: tournaments }));