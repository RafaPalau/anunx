import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Templatedefault from "../src/templates/Default";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    padding: theme.spacing(8, 10, 6),
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(0, 2),
    marginTop: 20,
  },
  cardMedia: {
    paddingTop: "56%",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Templatedefault>
      <Container maxWidth='md' className={classes.searchContainer}>
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
      <Typography
        component='h2'
        variant='h4'
        align='center'
        color='textPrimary'
      >
        Destaques
      </Typography>
      <br />
      <Container maxWidth='md' className={classes.cardgrid}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image='https://source.unsplash.com/random'
                title='Título da imagem'
              />
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Produto X
                </Typography>
                <Typography>R$ 60,00</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image='https://source.unsplash.com/random'
                title='Título da imagem'
              />
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Produto X
                </Typography>
                <Typography>R$ 60,00</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image='https://source.unsplash.com/random'
                title='Título da imagem'
              />
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Produto X
                </Typography>
                <Typography>R$ 60,00</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image='https://source.unsplash.com/random'
                title='Título da imagem'
              />
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Produto X
                </Typography>
                <Typography>R$ 60,00</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Templatedefault>
  );
};

export default Home;
