function App() {
  return (
    <main className="wrapper">
      <section className="section1 custom_radius">
        <h1 className="first-heading">
          Social Media <br />
          <span className="h10x">10x</span>
          <span className="h-faster">
            {" "}
            Faster <br />
          </span>{" "}
          with AI
        </h1>

        <div id="star">
          <img src="/assets/images/img-1.png" alt="centered image" />
        </div>

        <div className="text_variant">Over 4,000 5-star reviews</div>
      </section>

      <section className="section2">
        <div id="followers">
          <img
            src="/assets/images/img-2.png"
            alt="social-media-handles-and-followers-count-image"
          />
        </div>
        <div className="text_variant2">
          Manage multiple accounts and platforms.
        </div>
      </section>

      <section className="section3">
        <div className="text_variant3">
          Maintain a consistent posting schedule.
        </div>
        <div className="img3">
          <img src="/assets/images/img-3.png" alt="calendar illustration" />
        </div>
      </section>

      <section className="section4">
        <div className="text_variant4a">Schedule to social media.</div>
        <div className="img4">
          <img src="/assets/images/img-4.png" alt="schedule card" />
        </div>
        <div className="text_variant4b">
          Optimize post timings to publish content at the perfect time for your
          audience.
        </div>
      </section>

      <section className="section5">
        <div className="img5">
          <img src="/assets/images/img-5.png" alt="growing follower chart" />
        </div>
        <div className="text_variant5">
          Grow followers <br /> with non-stop <br /> content.
        </div>
      </section>

      <section className="section6">
        <div className="text_variant6a" style={{ fontSize: "50px" }}>
          &gt;56%
        </div>
        <div className="text_variant6b">faster audience growth</div>
        <div className="img6">
          <img
            src="/assets/images/img-6.png"
            alt="audience growth illustration"
          />
        </div>
      </section>

      <section className="section7">
        <div className="text_variant7">
          Create and schedule content{" "}
          <span className="purple_variant">quicker</span>
        </div>
        <div className="img7">
          <img
            src="/assets/images/img-7.png"
            alt="content creation illustration"
          />
        </div>
      </section>

      <section className="section8">
        <div className="text_variant8">Write your content using AI.</div>
        <div className="img8">
          <img src="/assets/images/img-8.png" alt="ai writing illustration" />
        </div>
      </section>
    </main>
  );
}

export default App;
