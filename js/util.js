const ALERT_SHOW_TIME = 5000;

export const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.width = '500px';
  alertContainer.style.height = '200px';
  alertContainer.style.backgroundColor = '#353535';
  alertContainer.style.zIndex = 1000;
  alertContainer.style.position = 'absolute';
  alertContainer.style.top = 0;
  alertContainer.style.bottom = 0;
  alertContainer.style.left = 0;
  alertContainer.style.right = 0;
  alertContainer.style.margin = 'auto';
  alertContainer.style.padding = '80px 50px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = 'white';

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

