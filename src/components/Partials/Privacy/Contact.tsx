import Heading from "./Heading"

const Contact = () => {
  return (
      <section id="contact" className="py-8">
          <div>
              <Heading label="14. How can you contact us about this notice?" />
              <div className="grid grid-cols-1 gap-3">
                  <p>
                      If you have questions or comments about this notice, you
                      may email us at <a href="mailto:privacy@waanverse.com">privacy@waanverse.com</a>
                  </p>
              </div>
          </div>
      </section>
  );
}

export default Contact
