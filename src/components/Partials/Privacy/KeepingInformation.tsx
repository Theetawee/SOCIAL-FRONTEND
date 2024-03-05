import Heading from "./Heading"

const KeepingInformation = () => {
  return (
      <section id="keeping_information" className="py-8">
          <div>
              <Heading label="7. How long do we keep your information?" />
              <div className="grid grid-cols-1 gap-3">
                  <p className="italic">
                      In Short: We keep your information for as long as
                      necessary to fulfil the purposes outlined in this privacy
                      notice unless otherwise required by law.
                  </p>
                  <p>
                      We will only keep your personal information for as long as
                      it is necessary for the purposes set out in this privacy
                      notice, unless a longer retention period is required or
                      permitted by law (such as tax, accounting, or other legal
                      requirements). No purpose in this notice will require us
                      keeping your personal information for longer than the
                      period of time in which users have an account with us.
                  </p>
                  <p>
                      When we have no ongoing legitimate business need to
                      process your personal information, we will either delete
                      or anonymise such information, or, if this is not possible
                      (for example, because your personal information has been
                      stored in backup archives), then we will securely store
                      your personal information and isolate it from any further
                      processing until deletion is possible.
                  </p>
              </div>
          </div>
      </section>
  );
}

export default KeepingInformation
