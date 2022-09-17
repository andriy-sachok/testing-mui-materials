import React, { memo } from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { MuiSelect } from './components/MuiSelect';
// import MuiRadioButton from './components/MuiRadioButton';
// import MuiCheckbox from './components/MuiCheckbox';
// import MuiSwitch from './components/MuiSwitch';
// import MuiRating from './components/MuiRating';
// import MuiAutocomplete from './components/MuiAutocomplete';
// import MuiLayout from './components/MuiLayout';
// import MuiCard from './components/MuiCard';
// import MuiAccodrion from './components/MuiAccordion';
// import MuiImageList from './components/MuiImageList';
// import MuiNavbar from './components/MuiNavbar';
// import MuiLink from './components/MuiLink';
// import MuiBreadcrumbs from './components/MuiBreadcrumbs';
// import MuiDrawer from './components/MuiDrawer';
// import MuiSpeedDial from './components/MuiSpeedDial';
// import MuiBottomNavigation from './components/MuiBottomNavigation';
// import MuiAvatar from './components/data display/MuiAvatar';
// import MuiBadge from './components/data display/MuiBadge';
// import MuiList from './components/data display/MuiList';
// import MuiChip from './components/data display/MuiChip';
// import MuiTooltip from './components/data display/MuiTooltip';
// import MuiTable from './components/data display/MuiTable';
// import MuiAlert from './components/feedback/MuiAlert';
// import MuiSnackbar from './components/feedback/MuiSnackbar';
// import MuiDialog from './components/feedback/MuiDialog';
// import MuiProgress from './components/feedback/MuiProgress';
// import MuiSkeleton from './components/feedback/MuiSkeleton';
// import MuiLoadingButton from './components/mui lab/MuiLoadingButton';
// import MuiPicker from './components/mui lab/MuiPicker';
// import MuiDateRangePicker from './components/mui lab/MuiDateRangePicker';
// import MuiTabs from './components/navigation/MuiTabs';
// import MuiTimeline from './components/mui lab/MuiTimeline';
// import MuiMasonry from './components/mui lab/MuiMasonry';
import MuiResponsivness from './components/MuiResponsivness';

import { createTheme, ThemeProvider, colors } from '@mui/material';

import './App.css';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    secondary: {
      main: colors.brown[600],
    },
    dark: {
      main: colors.grey[900],
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className='App'>
          {/* <MuiSelect /> */}
          {/* <MuiRadioButton /> */}
          {/* <MuiCheckbox /> */}
          {/* <MuiSwitch /> */}
          {/* <MuiRating /> */}
          {/* <MuiAutocomplete /> */}
          {/* <MuiLayout /> */}
          {/* <MuiCard /> */}
          {/* <MuiAccodrion /> */}
          {/* <MuiImageList /> */}
          {/* <MuiNavbar /> */}
          {/* <MuiLink /> */}
          {/* <MuiBreadcrumbs /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiSpeedDial /> */}
          {/* <MuiBottomNavigation /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          {/* <MuiList /> */}
          {/* <MuiChip /> */}
          {/* <MuiTooltip /> */}
          {/* <MuiTable /> */}
          {/* <MuiAlert /> */}
          {/* <MuiSnackbar /> */}
          {/* <MuiDialog /> */}
          {/* <MuiProgress /> */}
          {/* <MuiSkeleton /> */}
          {/* <MuiLoadingButton /> */}
          {/* <MuiPicker /> */}
          {/* <MuiDateRangePicker /> */}
          {/* <MuiTabs /> */}
          {/* <MuiTimeline /> */}
          {/* <MuiMasonry /> */}
          <MuiResponsivness />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default memo(App);
