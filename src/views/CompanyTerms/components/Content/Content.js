import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: '1. What personal information do we collect?',
    sublist: ['First name, Last name, Email, Usage Data'],
    description:
    'While using our website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your First name, Last name, Email, and Usage Data. Usage Data is collected automatically when using our website.  Usage Data may include information such as, Your Device\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our website that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.  When you access the website by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device you use, Your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.  We may also collect information that your browser sends whenever you visit our website or when you access the website by or through a mobile device. ',
  },
  {
    title: '2. How do we use your information?',
    sublist: [],
    description: 'We may use personal data for the following purposes: To provide and maintain our website, including to monitor the usage of our website. To manage your account: to manage your registration as a user of the website. The personal data you provide can give you access to different functionalities of the website that are available to you as a registered user. To contact you: To contact you by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application\'s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation. To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information. For other purposes. We may use your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our website, products, services, marketing and your experience.',
  },
  {
    title: '3. Will your information be shared with anyone?',
    sublist: [],
    description:
    'We may share your personal information in the following situations: With Service Providers: We may share your personal information with service providers to monitor and analyze the use of our website, to contact you. With Affiliates: We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with us.  With other users: When you share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. With your consent: We may disclose your personal information for any other purpose with your consent.',
  },
  {
    title: '4. Do we use cookies or other tracking technologies?',
    sublist: [],
    description:
      'We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include: Cookies or Browser Cookies.A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.  Web Beacons. Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity). ',

  },
  {
    title: '5. Is your information transferred internationally?',
    sublist: [],
    description:
      'The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies. Your information, including Personal Data, is processed at the Company\'s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.  Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.  The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.',
  },
  {
    title: '6. How long do we keep your information?',
    sublist: [],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: '7. What are your privacy rights?',
    sublist: [],
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  },
  {
    title: '8. How can you review, update or delete the data we collect from you?',
    sublist: [],
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
  },
];

const PrivacySection = ({ sublist, title, description }) => {
  return (
    <Box>
      <Typography
        variant={'h6'}
        gutterBottom
        sx={{
          fontWeight: 'medium',
        }}
      >
        {title}
      </Typography>

      {
        sublist.length > 0 && sublist.map((item, idx) =>{
          return <Typography key={idx} component={'p'} sx={{fontStyle: 'italic'}}color={'text.secondary'} gutterBottom>{item}</Typography>
          })
        
      }

      <Typography component={'p'} color={'text.secondary'}>
        {description}
      </Typography>
    </Box>
  );
};

PrivacySection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Content = () => {
  return (
    <Box>
      {mock.map((item, i) => (
        <Box key={i} marginBottom={i < mock.length - 1 ? 4 : 0}>
          <PrivacySection {...item} />
        </Box>
      ))}
    </Box>
  );
};

export default Content;
