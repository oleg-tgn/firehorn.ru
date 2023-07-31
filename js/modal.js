var Modal = function Modal(_ref) {
  var _ref$isVisible = _ref.isVisible,
      isVisible = _ref$isVisible === undefined ? false : _ref$isVisible,
      title = _ref.title,
      content = _ref.content,
      footer = _ref.footer,
      onClose = _ref.onClose;

  var keydownHandler = function keydownHandler(_ref2) {
    var key = _ref2.key;

    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  React.useEffect(function () {
    document.addEventListener('keydown', keydownHandler);
    return function () {
      return document.removeEventListener('keydown', keydownHandler);
    };
  });

  return !isVisible ? null : React.createElement(
    'div',
    { className: 'modal', onClick: onClose },
    React.createElement(
      'div',
      { className: 'modal__dialog', onClick: function onClick(e) {
          return e.stopPropagation();
        } },
      React.createElement(
        'div',
        { className: 'modal__header' },
        React.createElement(
          'h3',
          { className: 'modal__title' },
          title
        ),
        React.createElement(
          'span',
          { className: 'modal__close', onClick: onClose },
          '\xD7'
        )
      ),
      React.createElement(
        'div',
        { className: 'modal__body' },
        React.createElement(
          'div',
          { className: 'modal__content' },
          content
        )
      ),
      footer && React.createElement(
        'div',
        { className: 'modal__footer' },
        footer
      )
    )
  );
};

var YouTubeFrame = function YouTubeFrame(link) {
  return React.createElement(
    'div',
    { className: 'frame youtube' },
    React.createElement('iframe', { width: '100%', height: '100%', className: 'frame__iframe', src: link, title: 'YouTube video player', frameBorder: '0', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share', allowFullScreen: true })
  );
};

var PhotoFrame = function PhotoFrame(link) {
  return React.createElement(
    'div',
    { className: 'frame photo' },
    React.createElement('iframe', { width: '100%', height: '100%', className: 'frame__iframe', src: link, frameBorder: '0', scrolling: 'auto', allowtransparency: 'true' })
  );
};

var TableFrame = function TableFrame(link) {
  var linkType = "";
  if (link.includes('challonge.com')) linkType = "challonge";else if (link.includes('docs.google.com')) linkType = "docs";

  var wrapClass = "frame " + linkType;
  return React.createElement(
    'div',
    { className: wrapClass },
    React.createElement('iframe', { width: '100%', height: '100%', className: 'frame__iframe', src: link, frameBorder: '0', scrolling: 'auto', allowtransparency: 'true' })
  );
};

var TeamsFrame = function TeamsFrame(teams) {
  var listWinners = teams.winners && teams.winners.map(function (person) {
    return React.createElement(
      'li',
      { className: 'teams-list__item', key: person.toString() },
      person
    );
  });

  var teamsList = teams.teams && teams.teams.map(function (team) {
    return React.createElement(
      'li',
      { className: 'teams-list__item', key: team.name.toString() },
      React.createElement(
        'strong',
        { className: 'teams-list__team-name' },
        team.name
      ),
      React.createElement(
        'ul',
        { className: 'teams-list' },
        team.participants.map(function (person) {
          return React.createElement(
            'li',
            { className: 'teams-list__item', key: person.toString() },
            person
          );
        })
      )
    );
  });

  return React.createElement(
    'div',
    { className: 'teams' },
    teams.winners && React.createElement(
      'h2',
      { className: 'teams__title' },
      '\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u0438:'
    ),
    React.createElement(
      'ul',
      { className: 'teams-list' },
      listWinners
    ),
    teams.teams && React.createElement(
      'h2',
      { className: 'teams__title' },
      '\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438:'
    ),
    React.createElement(
      'ul',
      { className: 'teams-list' },
      teamsList
    )
  );
};