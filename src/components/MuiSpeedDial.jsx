import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
// import PrintIcon from '@mui/icons-material/Print';
// // import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// import ShareIcon from '@mui/icons-material/Share';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import EditIcon from '@mui/icons-material/Edit';

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navibation speed dial"
      sx={{
        position: 'absolute',
        bottom: '16px',
        right: '16px',
      }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      {/* <SpeedDialAction icon={<ContentCopyIcon />} tooltipTitle="Copy" /> */}
      {/* <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" /> */}
      <SpeedDialAction
        icon={<NotificationsActiveIcon />}
        tooltipTitle="alert()"
        onClick={() => alert('Hello!')}
      />
      <SpeedDialAction
        icon={<LogoDevIcon />}
        tooltipTitle="console.log()"
        onClick={() => console.log('Hello!')}
      />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
