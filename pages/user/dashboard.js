import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import TemplateDefault from "../../src/templates/Default";

const useStyles = makeStyles((theme) => ({
  
  buttonAdd: {
    margin: "30px auto",
    display: "block",
  },
  cardMedia: {
    paddingTop: "56%",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <TemplateDefault>
      <Container maxWidth='sm' >
        <Typography variant='h2' component='h1' align='center'>
          Meus Anúncios
        </Typography>
        <Button
          variant='contained'
          color='primary'
          className={classes.buttonAdd}
        >
          Publicar Novo Anúncio
        </Button>
      </Container>
      <Container maxWidth='md'>
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
              <CardActions>
                <Button size='small' color='primary'>
                  Editar
                </Button>
                <Button size='small' color='primary'>
                  Editar
                </Button>
              </CardActions>
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
              <CardActions>
                <Button size='small' color='primary'>
                  Editar
                </Button>
                <Button size='small' color='primary'>
                  Editar
                </Button>
              </CardActions>
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
              <CardActions>
                <Button size='small' color='primary'>
                  Editar
                </Button>
                <Button size='small' color='primary'>
                  Editar
                </Button>
              </CardActions>
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
              <CardActions>
                <Button size='small' color='primary'>
                  Editar
                </Button>
                <Button size='small' color='primary'>
                  Editar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  );
}
