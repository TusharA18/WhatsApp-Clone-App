export const formatDate = (date) => {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();

  const timeframe = hours <= 11 && minutes <= 59 ? "a.m" : "p.m";

  return `${hours > 12 ? hours - 12 : hours < 10 ? hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${timeframe}`;
};

export const downloadMedia = (e, originalURL) => {
  e.preventDefault();

  try {
    fetch(originalURL)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");

        a.style.display = "none";
        a.href = url;

        const fileName = originalURL.split("-").pop();

        a.download = fileName;
        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.log("Error while downloading the image ", error.message);
      });
  } catch (error) {
    console.log("Error while downloading the image ", error.message);
  }
};
