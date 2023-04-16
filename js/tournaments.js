'use strict';

function TournamentLink(props) {
  var iconClassName = 'icon ' + props.className;
  return props.href ? React.createElement(
    'a',
    { className: 'tournament-button', href: props.href, target: '_blank' },
    React.createElement('span', { className: iconClassName }),
    props.label
  ) : "";
}

function Tournament(props) {
  var tornament = props.tornament;

  var imageStyle = {
    backgroundImage: 'url(' + tornament.image + ')'
  };
  // Правильно! Не нужно определять здесь ключ:
  return React.createElement(
    'div',
    { className: 'tournament' },
    React.createElement(
      'div',
      { className: 'tournament__column tournament__image-column' },
      React.createElement('span', { className: 'tournament__image', style: imageStyle })
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
          tornament.number
        ),
        tornament.title
      ),
      React.createElement(
        'div',
        { className: 'tournament__desc' },
        React.createElement(
          'span',
          { className: 'tournament__date' },
          tornament.date
        ),
        React.createElement(
          'span',
          { className: 'tournament__location' },
          tornament.address
        )
      ),
      React.createElement(
        'div',
        { className: 'tournament__buttons' },
        React.createElement(TournamentLink, { href: tornament.links.video, className: 'icon-photo', label: '\u0417\u0430\u043F\u0438\u0441\u044C \u0442\u0443\u0440\u043D\u0438\u0440\u0430' }),
        React.createElement(TournamentLink, { href: tornament.links.video2, className: 'icon-photo', label: '\u0417\u0430\u043F\u0438\u0441\u044C \u0442\u0443\u0440\u043D\u0438\u0440\u0430 #2' }),
        React.createElement(TournamentLink, { href: tornament.links.table, className: 'icon-table', label: '\u0422\u0443\u0440\u043D\u0438\u0440\u043D\u0430\u044F \u0442\u0430\u0431\u043B\u0438\u0446\u0430' }),
        React.createElement(TournamentLink, { href: tornament.links.teams, className: 'icon-teams', label: '\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438' }),
        React.createElement(TournamentLink, { href: tornament.links.photo, className: 'icon-photo', label: '\u0424\u043E\u0442\u043E\u0430\u043B\u044C\u0431\u043E\u043C' })
      )
    )
  );
}

function TournamentsList(props) {
  var tornaments = props.tornaments;

  return React.createElement(
    'div',
    null,
    tornaments.map(function (tornament) {
      return React.createElement(Tournament, { tornament: tornament, key: tornament.number.toString() });
    })
  );
}

var root = ReactDOM.createRoot(document.getElementById('tournaments'));
root.render(React.createElement(TournamentsList, { tornaments: tornaments }));