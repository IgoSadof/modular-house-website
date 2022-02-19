import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import SvgIcon from '@material-ui/core/SvgIcon';


function MarkIcon(props) {
  return (
    <SvgIcon viewBox="-3 -4 18 18" {...props}>
      <path d="M5.20715 7.70707L4.85355 8.06066C4.65829 8.25592 4.34171 8.25592 4.14645 8.06066L0.646447 4.56066C0.451184 4.3654 0.451184 4.04882 0.646447 3.85355L1.35355 3.14645C1.54882 2.95118 1.8654 2.95118 2.06066 3.14645L4.14645 5.23223C4.34171 5.4275 4.65829 5.42749 4.85355 5.23223L9.43934 0.646447C9.6346 0.451184 9.95119 0.451184 10.1464 0.646447L10.8536 1.35355C11.0488 1.54882 11.0488 1.8654 10.8536 2.06066L5.20715 7.70707Z" />
    </SvgIcon>
  );
}


const BpIcon = styled('div')(({ theme }) => ({
  borderRadius: '7px',
  width: 18,
  height: 18,
  border:"1px solid",
  backgroundColor: theme.palette.mode === 'tansparent',
  '.Mui-focusVisible &': {
    outline: '2px solid black',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'tansparent',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  '& svg':{
    display:"block",
    width:"18px",
    height:"18px",
  },
  'input:hover ~ &': {
    backgroundColor: '',
  },
});

// Inspired by blueprintjs
const BpRadio = (props) => {
  return (
    <Radio
      sx={{
        '&:hover': {
          bgcolor: 'transparent',
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon><MarkIcon fontSize="20px"/></BpCheckedIcon>}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default BpRadio;