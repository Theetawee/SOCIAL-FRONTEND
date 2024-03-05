import Heading from "./Heading"

const LegalBases = () => {
  return (
      <section className="py-8" id="legal_bases_to_process_data">
          <div>
              <Heading label="3. What legal bases do we rely on to process your information?" />
              <div className="grid grid-cols-1 gap-3">
                  <p className="italic">
                      In Short: We only process your personal information when
                      we believe it is necessary and we have a valid legal
                      reason (i.e. legal basis) to do so under applicable law,
                      like with your consent, to comply with laws, to provide
                      you with services to enter into or fulfil our contractual
                      obligations, to protect your rights, or to fulfil our
                      legitimate business interests. I
                  </p>
                  <h3 className="text-lg">
                      If you are located in the EU or UK, this section applies
                      to you.
                  </h3>
                  <p>
                      The General Data Protection Regulation (GDPR) and UK GDPR
                      require us to explain the valid legal bases we rely on in
                      order to process your personal information. As such, we
                      may rely on the following legal bases to process your
                      personal information:
                  </p>
                  <ul className="pl-8 list-disc">
                      <li>
                          Consent. We may process your information if you have
                          given us permission (i.e. consent) to use your
                          personal information for a specific purpose. You can
                          withdraw your consent at any time.
                      </li>
                      <li>
                          Performance of a Contract. We may process your
                          personal information when we believe it is necessary
                          to fulfil our contractual obligations to you,
                          including providing our Services or at your request
                          prior to entering into a contract with you.
                      </li>
                      <li>
                          Legitimate Interests. We may process your information
                          when we believe it is reasonably necessary to achieve
                          our legitimate business interests and those interests
                          do not outweigh your interests and fundamental rights
                          and freedoms. For example, we may process your
                          personal information for some of the purposes
                          described in order to:
                          <ul className="list-disc pl-8">
                              <li>
                                  Send users information about special offers
                                  and discounts on our products and services
                              </li>
                              <li>
                                  Develop and display personalised and relevant
                                  advertising content for our users
                              </li>
                              <li>
                                  Analyse how our Services are used so we can
                                  improve them to engage and retain users
                              </li>
                              <li>Support our marketing activities</li>
                              <li>
                                  Diagnose problems and/or prevent fraudulent
                                  activities
                              </li>
                              <li>
                                  Understand how our users use our products and
                                  services so we can improve user experience
                              </li>
                          </ul>
                      </li>
                      <li>
                          Legal Obligations. We may process your information
                          where we believe it is necessary for compliance with
                          our legal obligations, such as to cooperate with a law
                          enforcement body or regulatory agency, exercise or
                          defend our legal rights, or disclose your information
                          as evidence in litigation in which we are involved.
                      </li>
                      <li>
                          Vital Interests. We may process your information where
                          we believe it is necessary to protect your vital
                          interests or the vital interests of a third party,
                          such as situations involving potential threats to the
                          safety of any person.
                      </li>
                  </ul>
                  <h3 className="text-lg">
                      If you are located in Canada, this section applies to you.
                  </h3>
                  <p>
                      We may process your information if you have given us
                      specific permission (i.e. express consent) to use your
                      personal information for a specific purpose, or in
                      situations where your permission can be inferred (i.e.
                      implied consent). You can withdraw your consent at any
                      time
                  </p>
                  <p>
                      In some exceptional cases, we may be legally permitted
                      under applicable law to process your information without
                      your consent, including, for example:
                  </p>
                  <ul className="list-disc pl-8">
                      <li>
                          If collection is clearly in the interests of an
                          individual and consent cannot be obtained in a timely
                          way
                      </li>
                      <li>
                          For investigations and fraud detection and prevention
                      </li>
                      <li>
                          For business transactions provided certain conditions
                          are met
                      </li>
                      <li>
                          If it is contained in a witness statement and the
                          collection is necessary to assess, process, or settle
                          an insurance claim
                      </li>
                      <li>
                          For identifying injured, ill, or deceased persons and
                          communicating with next of kin
                      </li>
                      <li>
                          If we have reasonable grounds to believe an individual
                          has been, is, or may be victim of financial abuse
                      </li>
                      <li>
                          If it is reasonable to expect collection and use with
                          consent would compromise the availability or the
                          accuracy of the information and the collection is
                          reasonable for purposes related to investigating a
                          breach of an agreement or a contravention of the laws
                          of Canada or a province
                      </li>
                      <li>
                          If disclosure is required to comply with a subpoena,
                          warrant, court order, or rules of the court relating
                          to the production of records
                      </li>
                      <li>
                          If it was produced by an individual in the course of
                          their employment, business, or profession and the
                          collection is consistent with the purposes for which
                          the information was produced
                      </li>
                      <li>
                          If the collection is solely for journalistic,
                          artistic, or literary purposes
                      </li>
                      <li>
                          If the information is publicly available and is
                          specified by the regulations
                      </li>
                  </ul>
              </div>
          </div>
      </section>
  );
}

export default LegalBases
