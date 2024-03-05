import Heading from "./Heading"

const Updates = () => {
  return (
      <section>
          <div>
              <Heading label="12. Do we update this notice?" />
              <div className="grid grid-cols-1 gap-3">
                  <p className="italic">
                      In Short: Yes, we will update this notice as necessary to
                      stay compliant with relevant laws.
                  </p>
                  <p>
                      We may update this privacy notice from time to time. The
                      updated version will be indicated by an updated 'Revised'
                      date and the updated version will be effective as soon as
                      it is accessible. If we make material changes to this
                      privacy notice, we may notify you either by prominently
                      posting a notice of such changes or by directly sending
                      you a notification. We encourage you to review this
                      privacy notice frequently to be informed of how we are
                      protecting your information.
                  </p>
              </div>
          </div>
      </section>
  );
}

export default Updates
