import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material';

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140px"
          image="https://media.tproger.ru/uploads/2016/10/reactmini.png"
          alt="React image"
        />
        <CardContent>
          <Typography gutterBottom variant="5" component="div">
            React
          </Typography>
          <Typography varian="body2" color="text.secondary">
            Some text that can describe something in your own project or
            describe some important part of code of the code.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
