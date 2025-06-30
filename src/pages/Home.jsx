export const Home=()=>{
    // const antiangle=-5;
    // const angle=5;
    // const antiangle1=-3;

    return<>
        <section className="hero-container">
      {/* Left: Image Collage */}
        <div className="hero-left">
  {/* New Center Front Image */}
  <div
    className="bg-img img0"
    style={{ backgroundImage: "url('./Avatar.jpg')" }}>
    </div>
  <div
    className="bg-img img1"
    style={{ backgroundImage: "url('./Avengers.jpg')" }}
  ></div>
  <div
    className="bg-img img2"
    style={{ backgroundImage: "url('./Deadpool.png')" }}
  ></div>
  <div
    className="bg-img img3"
    style={{ backgroundImage: "url('./John.jpg')" }}
  ></div>
  <div
    className="bg-img img4"
    style={{ backgroundImage: "url('./jack.jpg')" }}
  ></div>
  <div
    className="bg-img img5"
    style={{ backgroundImage: "url('Grider.jpg')" }}
  ></div>
</div>

      {/* Right: Text & CTA */}
      <div className="hero-right">
        <h1>Unlimited Movies</h1>
        <p>
          Discover a world of entertainment. Watch thousands of movies and shows with no limits. Dive in and explore now.
        </p>
        <button className="explore-btn">Explore</button>
      </div>

      {/* Bottom Wave SVGs */}
      <div className="wave-container">
        <svg className="wave1" viewBox="0 0 1440 320">
          <path
            fill="#1a1a1a"
            d="M0,256L40,240C80,224,160,192,240,165.3C320,139,400,117,480,128C560,139,640,181,720,197.3C800,213,880,203,960,186.7C1040,171,1120,149,1200,160C1280,171,1360,213,1400,234.7L1440,256V320H0Z"
          />
        </svg>
        <svg className="wave2" viewBox="0 0 1440 320">
          <path
            fill="#111"
            fillOpacity="0.7"
            d="M0,288L48,266.7C96,245,192,203,288,176C384,149,480,139,576,144C672,149,768,171,864,181.3C960,192,1056,192,1152,192C1248,192,1344,192,1392,192L1440,192V320H0Z"
          />
        </svg>
      </div>
    </section>
    </>
}