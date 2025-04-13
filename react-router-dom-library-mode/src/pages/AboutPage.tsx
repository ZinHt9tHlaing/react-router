import { Link } from "react-router";

const AboutPage = () => {
  return (
    <div>
      <h1>AboutPage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
        temporibus ipsam perspiciatis atque iste adipisci, quae eligendi
        consequatur suscipit nostrum impedit modi velit molestias dolores
        ratione eos porro soluta dolorum.
      </p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default AboutPage;
