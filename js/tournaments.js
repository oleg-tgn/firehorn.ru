'use strict';

//import React, { useState } from 'react';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function TournamentLink(props) {
  var iconClassName = 'icon ' + props.className;
  return props.href ? React.createElement(
    'a',
    { className: 'tournament-button', href: props.href, target: '_blank' },
    React.createElement('span', { className: iconClassName }),
    props.label
  ) : "";
}

function TournamentModalLink(props) {
  var iconClassName = 'icon ' + props.className;
  return props.iframe ? React.createElement(
    'button',
    { className: 'tournament-button', onClick: function onClick() {
        return props.openModal(true, props);
      } },
    React.createElement('span', { className: iconClassName }),
    props.label
  ) : "";
}

function Tournament(props) {
  var tournament = props.tournament;

  var imageBackgroud = {
    backgroundImage: 'url(' + tournament.image + ')'
  };

  return React.createElement(
    'div',
    { className: 'tournament' },
    React.createElement(
      'div',
      { className: 'tournament__column tournament__image-column' },
      React.createElement('span', { className: 'tournament__image', style: imageBackgroud })
    ),
    React.createElement(
      'div',
      { className: 'tournament__column' },
      React.createElement(
        'h3',
        { className: 'tournament__title' },
        React.createElement(
          'span',
          { className: 'tournament__num' },
          tournament.number
        ),
        tournament.title
      ),
      React.createElement(
        'div',
        { className: 'tournament__desc' },
        React.createElement(
          'span',
          { className: 'tournament__date' },
          tournament.date
        ),
        React.createElement(
          'span',
          { className: 'tournament__location' },
          tournament.address
        )
      ),
      React.createElement(
        'div',
        { className: 'tournament__buttons' },
        React.createElement(TournamentModalLink, { className: 'icon-video', label: '\u0417\u0430\u043F\u0438\u0441\u044C \u0442\u0443\u0440\u043D\u0438\u0440\u0430', title: tournament.number + " " + tournament.title, iframe: tournament.links.youtubeIframe, openModal: props.openModal }),
        React.createElement(TournamentModalLink, { className: 'icon-video', label: '\u0417\u0430\u043F\u0438\u0441\u044C \u0442\u0443\u0440\u043D\u0438\u0440\u0430 \u0447.2', title: tournament.number + " " + tournament.title, iframe: tournament.links.youtubeIframe2, openModal: props.openModal }),
        React.createElement(TournamentLink, { href: tournament.links.table, className: 'icon-table', label: '\u0422\u0443\u0440\u043D\u0438\u0440\u043D\u0430\u044F \u0442\u0430\u0431\u043B\u0438\u0446\u0430' }),
        React.createElement(TournamentLink, { href: tournament.links.teams, className: 'icon-teams', label: '\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438' }),
        React.createElement(TournamentLink, { href: tournament.links.photo, className: 'icon-photo', label: '\u0424\u043E\u0442\u043E\u0430\u043B\u044C\u0431\u043E\u043C' })
      )
    )
  );
}

function TournamentsList(props) {

  var tournaments = props.tournaments;

  var openModal = function openModal(isVisible) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "youtube";

    setModal(isVisible);

    document.body.style.overflow = isVisible ? 'hidden' : '';

    modal.title = props.title;
    modal.iframe = YouTubeFrame(props.iframe);
  };

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isModal = _React$useState2[0],
      setModal = _React$useState2[1];

  var _React$useState3 = React.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 1),
      modal = _React$useState4[0];

  return React.createElement(
    'div',
    null,
    React.createElement(Modal, {
      isVisible: isModal,
      title: modal.title,
      content: modal.iframe,
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