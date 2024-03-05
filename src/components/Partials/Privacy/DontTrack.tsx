import Heading from "./Heading";

const DontTrack = () => {
    return (
        <section id="dont_track" className="py-8">
            <div>
                <Heading
                    label="10. Controls for do-not-track features
"
                />
                <div className="grid grid-cols-1 gap-3">
                    <p>
                        Most web browsers and some mobile operating systems and
                        mobile applications include a Do-Not-Track ('DNT')
                        feature or setting you can activate to signal your
                        privacy preference not to have data about your online
                        browsing activities monitored and collected. At this
                        stage no uniform technology standard for recognising and
                        implementing DNT signals has been finalised. As such, we
                        do not currently respond to DNT browser signals or any
                        other mechanism that automatically communicates your
                        choice not to be tracked online. If a standard for
                        online tracking is adopted that we must follow in the
                        future, we will inform you about that practice in a
                        revised version of this privacy notice.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DontTrack;
