import React from "react";
import "./TestApi.css"; // Import CSS file

function PhotoList() {
  const okUrl = "http://localhost:3000/photos?_page=1&_limit=100";

  const baseUrl = "http://localhost:3000";
  const url = `${baseUrl}/photos`;

  const [loading, setLoading] = React.useState(false);
  const [photos, setPhotos] = React.useState([]);
  const [error, setError] = React.useState(null);

  function toUserError(error) {
    console.log("Call API to log the raw error. ", error);
    return "There was an error loading the photos.";
  }
  function translateStatusToErrorMessage(status) {
    switch (status) {
      case 401:
        return "Please login again.";
      case 403:
        return "You do not have permission to view the photos.";
      default:
        return "There was an error retrieving the photos. Please try again.";
    }
  }
  function checkStatus(response) {
    if (response.ok) {
      return response;
    } else {
      const httpErrorInfo = {
        status: response.status,
        statusText: response.statusText,
        url: response.url,
      };
      console.log(
        `logging http details for debugging: ${JSON.stringify(httpErrorInfo)}`
      );

      let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
      throw new Error(errorMessage);
    }
  }
  function delay(ms) {
    return function (x) {
      return new Promise((resolve) => setTimeout(() => resolve(x), ms));
    };
  }
  function parseJSON(response) {
    return response.json();
  }

  const photoAPI = {
    getAll(page = 1, limit = 100) {
      return (
        fetch(`${url}?_page=${page}&_limit=${limit}`)
          // .then(delay(600))
          .then(checkStatus)
          .then(parseJSON)
          .catch((error) => {
            let errorMessage = translateStatusToErrorMessage(error);
            throw new Error(errorMessage);
          })
      );
    },
  };
  React.useEffect(() => {
    setLoading(true);

    photoAPI
      .getAll(1)
      // fetch(okUrl)
      //   // .then((response) => {
      //   //   if (!response.ok) throw new Error(response.statusText);
      //   //   return response;
      //   // })
      .then((response) => response.json())
      .then((data) => {
        setError(null);
        setPhotos(data);
        setLoading(false);
      })
      .catch((error) => {
        const userError = toUserError(error);
        setError(userError);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  } else if (loading) {
    return <div class="loader"></div>;
  } else {
    // return <p>df nkjdvnjdn</p>;
    return (
      <div className="card-container">
        {photos.map((photo) => (
          <div className="card" key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <h3>{photo.title}</h3>
            <p>{photo.body}</p>
          </div>
        ))}
      </div>
    );
  }

  // return <div className="ExampleForm"></div>;
}

export default PhotoList;
