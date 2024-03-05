import Heading from "./Heading"

const Cookies = () => {
  return (
      <section id="cookies" className="py-8">
          <div>
              <Heading label="5. Do we use cookies and other tracking technologies?" />
              <div className="grid grid-cols-1 gap-3">
                  <p className="italic">
                      In Short: We may use cookies and other tracking
                      technologies to collect and store your information.
                  </p>
                  <p>
                      We may use cookies and similar tracking technologies (like
                      web beacons and pixels) to access or store information.
                      Specific information about how we use such technologies
                      and how you can refuse certain cookies is set out in our
                      Cookie Notice.
                  </p>
              </div>
          </div>
      </section>
  );
}

export default Cookies
