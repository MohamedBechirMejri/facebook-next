const uploadImage = async (image: string) => {
  const headers = new Headers();
  headers.append(
    "Authorization",
    `Client-ID ${process.env.NEXT_PUBLIC_IMGUR_CLIENT_ID}`
  );

  const formdata = new FormData();
  formdata.append("image", image);

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: formdata,
  };
  const response = await fetch("https://api.imgur.com/3/image", requestOptions);
  const result = await response.json();
  return result.data.link;
};

export default uploadImage;
