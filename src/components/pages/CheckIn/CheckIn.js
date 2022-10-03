import { Box } from '../../Box';
import { CheckInCircleLink, CheckInText } from './CheckIn.style';

export default function CheckIn() {
  return (
    <Box>
      <CheckInCircleLink to="all">
        <Box>
          <CheckInText>Let's start shopping!</CheckInText>
        </Box>
      </CheckInCircleLink>
    </Box>
  );
}
