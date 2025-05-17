export function showNotification(message: string) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.position = "fixed";
  notification.style.top = "20px";
  notification.style.right = "20px";
  notification.style.padding = "10px 20px";
  notification.style.backgroundColor = "#4caf50";
  notification.style.color = "white";
  notification.style.borderRadius = "5px";
  notification.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
  notification.style.zIndex = "9999";
  document.body.appendChild(notification);

  setTimeout(() => {
    document.body.removeChild(notification);
  }, 3000);
}
