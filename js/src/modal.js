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
      <div className="youtube">
        <iframe width="100%" height="100%" className="youtube__iframe" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    )
}
