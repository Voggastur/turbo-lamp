import { Grid, makeStyles, Typography } from "@material-ui/core";
import privacyWave from "../img/privacyWave.svg";

function PrivacyPolicy() {
  const classes = useStyles();

  return (
    <div className={classes.privacyDiv}>
      {/* <img src={privacyWave} className={classes.privacyWave} /> */}
      <Grid className={classes.mainPrivacyGrid}>
        <Typography className={classes.heading}> Privacy Policy</Typography>

        <Grid className={classes.grid1}>
          <Typography>
            JOYNR Gaming AB, 559305-5881, processes your Personal Data for the
            following purposes:
            <br />
            <br />
            • To ensure that you can use the service;
            <br />
            • To ensure that JOYNR can provide the service;
            <br />
            • To send you important information regarding the service;
            <br />
            • To contact you;
            <br />
            • To prevent cheating, crime or fraud;
            <br />
            • To create reports, analysis or similar services for use by us for
            the purposes of service improvements,
            <br />
            research or business intelligence, for example to track potential
            problems or trends with our Services; <br />
            • To send news and updates regarding the Service; <br />
            • To prevent the use of the service in areas where it is prohibited,
            and; As otherwise expressly set out in <br />
            this Privacy Policy or as required by law.
            <br />
            • To understand site usage and to improve or customize the content
            on our sites
            <br />
            • To be able to advertise on other sites based on user activity
            <br />
          </Typography>
        </Grid>

        <Grid className={classes.grid2}>
          <Typography className={classes.heading2}>
            {" "}
            General Information
          </Typography>
          <Typography className={classes.generalText}>
            Dear player! Welcome to JOYNR, the online gaming platform where
            gamers find players to play with, based
            <br />
            on your own criterias. The service as further described on
            www.joynr.co is as of today offered on desktop
            <br />
            devices.This policy regarding privacy (“Privacy Policy“) describes
            how JOYNR Gaming AB, reg. no.
            <br />
            559305-5881, Smedvägen 29, 146 36, Tullinge, Sweden, contact:
            support@joynr.co, (“JOYNR“, “we”, “us”,
            <br />
            “our”), collects, uses, shares and stores personal data regarding
            anyone who uses the Service (“you”, “your”).
            <br />
            <br />
            This Privacy Policy applies when you use the service, contact us,
            when we receive your personal data from
            <br />
            one of our business partners or when you post messages at our public
            forums. This Privacy Policy does not
            <br />
            cover any interaction you may have with JOYNR by telephone, postal
            mail, or other offline communications.
            <br />
            <br />
            You should always be able to feel safe when weprocess your personal
            data.With this Privacy Policy, <br />
            we want to explain how we ensure that your Personal Data is handled
            in accordance with Applicable Data
            <br />
            Protection Regulations. Furthermore, this Privacy Policy is intended
            to provide you with information about
            <br />
            how we collect your Personal Data, what Personal Data we Process and
            why, for how long we <br />
            Process Personal Data, who can access your Personal Data, how we
            protect your Personal Data and your rights in
            <br />
            relation to your Personal Data.
            <br />
            <br />
          </Typography>
        </Grid>

        <Grid className={classes.grid3}>
          <Typography className={classes.heading2}> Definations</Typography>
          <Typography>
            As we want to make sure that you fully understand our Privacy
            Policy, we will define some important terms.
            <br />
            “Applicable Data Protection Regulation” refers to the General Data
            Protection Regulation (GDPR), which
            <br />
            implements the EU Regulation 2016/679, including all relevant case
            law, guidelines and regulations from <br />
            governmental authorities and such.
            <br />
            <br />
            “Personal Data” refers to any data whether by itself or when linked
            to other information in the possession of,
            <br />
            or likely to come into the possession of JOYNR, that can be used to
            directly or indirectly identify a living
            <br />
            person.
            <br />
            <br />
            “Processing” refers to any operation or set of operations which is
            performed on Personal Data, whether or
            <br />
            not by automated means, such as the collection, organisation,
            storage, use, erasure, disclosure by <br />
            transmission or otherwise making available.
            <br />
            <br />
            All other definitions in this Privacy Policy shall be interpreted in
            accordance with Applicable Data Protection
            <br />
            Regulation and the General Terms and Conditions [link].
            <br />
            <br />
          </Typography>
        </Grid>
        <Grid className={classes.grid3}>
          <Typography className={classes.heading2}>
            {" "}
            Who is the data controller?
          </Typography>
          <Typography>
            JOYNR is the data controller and is responsible for the Processing
            of your Personal Data. We shall ensure
            <br />
            that the Processing conducted by us complies with applicable Data
            Protection Regulation. We shall ensure <br />
            that the Personal Data Processed about you is accurate, necessary
            and legitimate.
            <br />
            <br />
          </Typography>

          <Typography className={classes.heading2}>
            {" "}
            Collection of personal data
          </Typography>
          <Typography>
            When you register a user account (“User Account”) with JOYNR, we
            will collect your IP address, email and
            <br />
            date of birth. <br />
            <br />
            JOYNR may from time to time ask for your opinion to know what you
            like and dislike about our service.
            <br />
            JOYNR may request and/or collect information from you on a voluntary
            basis when you create a User <br />
            Account with the Service; participate in contests; send questions or
            comments to our support team; <br />
            or fill out online surveys.
            <br />
            <br />
          </Typography>
        </Grid>
        <Grid className={classes.grid4}>
          <Typography className={classes.heading2}>
            {" "}
            Why do we Process your Personal Data?
          </Typography>
          <Typography>
            JOYNR processes your Personal Data for the following purposes:
            <br />
            • To ensure that you can use the Service;
            <br />
            • To ensure that JOYNR can provide the Service;
            <br />
            • To send you important information regarding the Service;
            <br />
            • To contact you;
            <br />
            • To prevent cheating, crime or fraud;
            <br />
            • To create reports, analysis or similar services for use by us for
            the purposes of service improvements,
            <br />
            research or business intelligence, for example to track potential
            problems or trends with our Services; <br />
            • To send news and updates regarding the Service; <br />
            • To prevent the use of the Service in areas where it is prohibited,
            and; <br />
            As otherwise expressly set out in this Privacy Policy or as required
            by law.
            <br />
            <br />
            The Personal Data can also be used as a basis for customer analysis,
            market research, statistics and method
            <br />
            development for platforms provided by JOYNR. <br />
            <br />
          </Typography>
        </Grid>

        <Grid className={classes.grid5}>
          <Typography className={classes.heading2}>
            Legal basis for the Processing of your Personal Data
          </Typography>
          <Typography>
            We process your Personal Data to fulfil our agreement with you, by
            e.g. using your username and IP address
            <br />
            for you to be able to participate in tournaments and the matchmaking
            process.
            <br />
            <br />
            Part of our Processing of Personal Data is based on a so-called
            balancing of interests. This applies to, for
            <br />
            instance, any invites to our communities and to any information sent
            to you regarding the Service.
            <br />
            <br />
          </Typography>
          <Typography className={classes.heading2}>
            For how long do we keep your Personal Data?
          </Typography>
          <Typography>
            Your Personal Data is only kept as long as needed to fulfil the
            purposes for which it was collected according
            <br />
            to this Privacy Policy. We may keep the information for a longer
            period of time if necessary to comply with <br />
            legal requirements or to protect JOYNR’s legal interests, for
            instance if there is an ongoing legal process.
            <br />
            <br />
          </Typography>
        </Grid>
        <Grid className={classes.grid6}>
          <Typography className={classes.heading2}>
            Who can access your Personal Data?
          </Typography>
          <Typography>
            Some of the Personal Data, such as user name, chosen profile
            picture, contest results and relevant stats will
            <br />
            be made public and is therefore available to other JOYNR users while
            you participate in the Service.
            <br />
            <br />
            All postings in JOYNR’s public forums will be available for other
            users as well as the Internet general public.
            <br />
            Information posted on the public forum will therefore not be private
            or confidential.
            <br />
            <br />
            To be able to deliver the service, JOYNR may share your Personal
            Data with third parties, such as relevant
            <br />
            payment service provider(s) and partnered third party game
            developers.
            <br />
            To Process payments we will transmit your user account information
            and other Personal Data to a <br />
            third-party service provider. As of now, we don’t have any payment
            method. When a payment method is <br />
            implemented, the policy will be updated and you will be notified.
            <br />
            <br />
            JOYNR may also transfer or disclose your Personal Data to third
            parties if it is necessary to comply with legal <br />
            requirements or requirements from authorities that JOYNR is subject
            to, to protect JOYNR’s legal interests or
            <br />
            to detect, prevent or draw attention to fraud and other security or
            technical issues.
            <br />
            <br />
            In the event that there is a sale of the assets of JOYNR or
            corporate restructuring, or as a result of a change of
            <br />
            control of JOYNR, or in preparation of any of these events, any
            third party to which JOYNR transfers or <br />
            sells JOYNR’s assets will have the right to continue to use the
            Personal Data and other information that you <br />
            provide to us in the manner set out in this Privacy Policy. We will
            not sell or rent your Personal Data to any
            <br />
            third party outside of these circumstances.
            <br />
            <br />
            In cooperation with the games in which our service is available,
            JOYNR may transfer or disclose your
            <br />
            Personal Data to countries outside the EU/EEA as necessary to
            provide you the Service. If Personal Data is <br />
            transferred to a country outside the EU/EEA, JOYNR will take action
            to ensure that it continues to be
            <br />
            protected. JOYNR will take appropriate and necessary measures to
            lawfully transfer Personal Data to <br />
            countries outside the EU/EEA.
            <br />
            <br />
          </Typography>
        </Grid>
        <Grid className={classes.grid7}>
          <Typography className={classes.heading2}>
            Protection of your Personal Data
          </Typography>
          <Typography>
            You should always be able to feel safe when we are Processing your
            Personal Data. JOYNR has taken <br />
            appropriate security measures required to protect your Personal Data
            against unauthorised, unlawful or
            <br />
            accidental access, modification, loss, destruction and damage.
            <br />
            You are solely responsible for your login information to the
            Service. JOYNR will never request your password <br />
            or ask you to provide sensitive account information.
            <br />
            <br />
          </Typography>
        </Grid>
        <Grid className={classes.grid8}>
          <Typography className={classes.heading2}>Your rights</Typography>
          <Typography>
            {" "}
            You have the right to request that JOYNR corrects, rectifies, erases
            or restricts the Processing of your <br />
            Personal Data, in accordance with Applicable Data Protection
            Regulations. To exercise these rights,
            <br />
            please contact support@joynr.co. <br />
            <br />
            You have the right to request information regarding all Processing
            of your Personal Data conducted by
            <br />
            JOYNR once (1) every calendar year. The information provided by
            JOYNR i.a. include; what categories of
            <br />
            Personal Data is Processed, the purpose of the Processing, the
            anticipated period during which the Personal
            <br />
            Data will be stored, if the Personal Data is disclosed to third
            parties and if the Personal Data is transferred to
            <br />
            third countries. This information shall be provided to you free of
            charge.
            <br />
            <br />
            You can at any point in time prohibit JOYNR from using your Personal
            Data to send you information and news
            <br />
            regarding the Service. When JOYNR receives your notification, we
            will stop Processing your Personal Data for
            <br />
            these purposes. To unsubscribe, please contact us at
            support@joynr.co. You are also given the opportunity
            <br />
            to refuse to receive further information and news regarding the
            Service in every such email from us.
            <br />
            <br />
          </Typography>
        </Grid>
        <Grid className={classes.grid9}>
          <Typography className={classes.heading2}>
            Website Cookies, Advertising and Analytics
          </Typography>
          <Typography>
            When you visit our website (www.joynr.co), third parties may place
            cookies on your browser for targeted <br />
            advertising purposes. The types of data collected include cookie
            values, pages visited, and other types of <br />
            website activity. IP addresses are always, due to the nature of
            internet technology, included with all requests.
            <br />
            We do, however, whenever possible make sure that IP addresses are
            not stored.
            <br />
            <br />
            For us to be able to advertise on other sites based on user
            activity, such data may be used by third parties
            <br />
            such as Facebook, Google, Twitter, Snapchat, Adroll, Bing & Reddit
            to advertise based on user activity.
            <br />
            <br />
            In your browser, you can also change your privacy preferences
            regarding the use of cookies and similar
            <br />
            technologies. You may set your browser to accept all cookies, block
            certain cookies, require your consent
            <br />
            before a cookie is placed in your browser, or block all cookies.
            Blocking all cookies will affect your online
            <br />
            experience. Consult the Help section of your browser for more
            information.
            <br />
            <br />
            We also use cookies to understand site usage and to improve or
            customize the content on our site.
            <br />
            <br />
          </Typography>
        </Grid>

        <Grid className={classes.grid10}>
          <Typography className={classes.heading2}>Google Analytics</Typography>
          <Typography>
            We use Google Analytics to improve the user experience. If you do
            not wish to be tracked by Google
            <br />
            Analytics on this and other website(s), then you can download and
            install a browser add-on. Please note <br />
            that we do not, however, store any personally identifiable
            information in Google Analytics.
            <br />
            <br />
          </Typography>
        </Grid>
        <Grid className={classes.grid11}>
          <Typography className={classes.heading2}>Children</Typography>
          <Typography>
            The service is not directed towards or intended for people under the
            age of 18 (“Children”). Therefore, JOYNR
            <br />
            will not knowingly acquire any personal data from Children.
            <br />
            <br />
            If you are a parent or guardian who has discovered that your Child
            has submitted personal data, please
            <br />
            contact us and we will make reasonable efforts to delete the
            information from the Service. If possible, please
            <br />
            include in your message the email address and password that your
            Child submitted.
            <br />
            <br />
          </Typography>
        </Grid>
        <Grid className={classes.grid12}>
          <Typography className={classes.heading2}>
            Changes to the Privacy Policy
          </Typography>
          <Typography>
            JOYNR has the right to change this Privacy Policy at any time. We
            will give you reasonable notice of any
            <br />
            changes to the Privacy Policy. We will notify you by a message, by
            email or by a notification in the Service, if <br />
            the Processing requires a new consent.
            <br />
            <br />
            If you do not accept the changes, you may not be able to participate
            in the Service or receive information <br />
            that you have requested.
            <br />
            <br />
          </Typography>
        </Grid>
        <Grid className={classes.grid12}>
          <Typography className={classes.heading2}>
            Contact information
          </Typography>
          <Typography>
            Let us know if you have any questions about this Privacy Policy or
            the Processing of your Personal Data or if
            <br />
            you wish to request information regarding the Processing of your
            Personal Data. Our contact information is <br />
            found at the beginning of this Privacy Policy.
            <br />
            <br />
          </Typography>
        </Grid>
      </Grid>
      <img src={privacyWave} className={classes.privacyWave} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  privacydiv: {
    backgroundColor: "#0A101A",
    color: "white",
  },
  privacyWave: {
    backgroundColor: "#0A101A",
  },
  mainPrivacyGrid: {
    paddingLeft: "10em",

    backgroundColor: "#0A101A",
    color: "white",
  },
  heading: {
    fontFamily: "DM Sans",
    fontSize: "48px",
    fontWeight: "bold",
    color: "white",
  },

  grid1: {
    fontFamily: "DM Sans",
    fontSize: "18px",
    fontWeight: "regular",
    color: "white",
    letterSpacing: "3%",
  },

  heading2: {
    fontFamily: "DM Sans",
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    letterSpacing: "3%",
  },
}));

export default PrivacyPolicy;
