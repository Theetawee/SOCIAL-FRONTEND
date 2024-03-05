import { Link } from "react-router-dom";
import Heading from "./Heading"

const UpdateInformation = () => {
  return (
      <section className="py-8" id="update_information">
          <div>
              <Heading
                  label="13. How can you review, update, or delete your personal information?
"
              />
              <div className="grid grid-cols-1 gap-3">
                  <p>
                      You have the right to request access to the personal
                      information we collect from you, change that information,
                      or delete it. To request to review, update, or delete your
                      personal information, please visit: <Link to="/account/info" className="text-primary-600">Profile</Link>
                  </p>
              </div>
          </div>
      </section>
  );
}

export default UpdateInformation
