import {
  Paper,
  Container,
  IconButton,
  InputBase,
  Typography,
  Grid,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Templatedefault from "../src/templates/Default";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../src/components/Card";

const useStyles = makeStyles((theme) => ({
  searchBox: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(0, 2),
    marginTop: 20,
  },
  cardgrid: {
    marginTop: 50,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Templatedefault>
      <Container maxWidth='md'>
        <Typography
          component='h1'
          variant='h3'
          align='center'
          color='textPrimary'
        >
          O que deseja encontrar?
        </Typography>
        <Paper className={classes.searchBox}>
          <InputBase placeholder='Ex.: iPhone 12 com garatia' fullWidth />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Paper>
      </Container>

      <Container maxWidth='lg' className={classes.cardgrid}>
        <Typography
          component='h2'
          variant='h4'
          align='center'
          color='textPrimary'
        >
          Destaques
        </Typography>
        <br />
        <Container maxWidth='lg' className={classes.cardgrid}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image='https://source.unsplash.com/random'
                title='iPhone 12 com garatia'
                subtitle='R$ 1.000,00'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image='https://source.unsplash.com/random'
                title='iPhone 12 com garatia'
                subtitle='R$ 1.000,00'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image='https://source.unsplash.com/random'
                title='iPhone 12 com garatia'
                subtitle='R$ 1.000,00'
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Templatedefault>
  );
};

export default Home;
