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
    { className: 'youtube' },
    React.createElement('iframe', { width: '100%', height: '100%', className: 'youtube__iframe', src: link, title: 'YouTube video player', frameBorder: '0', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share', allowFullScreen: true })
  );
};