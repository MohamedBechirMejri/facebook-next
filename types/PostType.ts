type PostType = {
  text: string;
  image: string;
  href: string;
  time: string;
  group: null;
  page: null;
  author: {
    name: string;
    image: string;
    href: string;
  };
  audience: string;
  likes: string[];
  loves: string[];
  wows: string[];
  hahas: string[];
  sads: string[];
  angrys: string[];
  comments: [
    {
      text: string;
      time: string;
      image: string;
      author: {
        name: string;
        image: string;
        href: string;
      };
      likes: string[];
      loves: string[];
      wows: string[];
      hahas: string[];
      sads: string[];
      angrys: string[];
      replies: [
        {
          text: string;
          time: string;
          author: {
            name: string;
            image: string;
            href: string;
          };
          likes: string[];
          loves: string[];
          wows: string[];
          hahas: string[];
          sads: string[];
          angrys: string[];
        }
      ];
    }
  ];
};

export default PostType;
