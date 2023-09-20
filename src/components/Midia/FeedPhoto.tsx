import React from "react";
import styles from "./FeedPhoto.module.sass";
import PhotoModal from "./PhotoModal";
import usePagination from "../../hooks/usePagination";

const FeedPhoto = () => {
  const links = [
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80",
    "https://images.unsplash.com/photo-1516536900061-d881b27e8ff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/flagged/photo-1620830102229-9db5c00d4afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1516208183566-04a314b87aa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1560332218-4d266ab9793a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
    "https://images.unsplash.com/photo-1597333935203-9915d87fe06e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    "https://plus.unsplash.com/premium_photo-1661306523308-d37fc69771b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1620735692151-26a7e0748429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1606716809549-b0266c29c8c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    "https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1464047736614-af63643285bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1614626446886-c119885157b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80",
  ];

  const itemsPerPage = 6;
  const { page, goNext } = usePagination(
    Math.ceil(links.length / itemsPerPage)
  );

  const [active, setActive] = React.useState<boolean>(false);
  const [currentPic, setCurrentPic] = React.useState<string>("");

  React.useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden";
    } else document.body.removeAttribute("style");
  }, [active]);

  React.useEffect(() => {
    function loadMore() {
      if (
        window.scrollY + window.innerHeight >
        0.8 * document.body.offsetHeight
      ) {
        goNext();
      }
    }

    window.addEventListener("scroll", loadMore);

    return () => {
      window.removeEventListener("scroll", loadMore);
    };
  });

  return (
    <>
      <div className={styles.feedPhoto}>
        {links.slice(0, page * itemsPerPage).map((link) => (
          <div
            className={styles.imageContainer}
            onClick={() => {
              setCurrentPic(link);
              setActive(true);
            }}
            key={link}
          >
            <div
              style={{ backgroundImage: `url(${link})` }}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {active && <PhotoModal link={currentPic} changeStatus={setActive} />}
    </>
  );
};

export default FeedPhoto;
