import {
  Button,
  CardActions,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import { useSession, getSession } from "next-auth/client";
// import Link from "next/link";
import dbConnect from "../../src/utils/dbConnect";

import ProductsModel from "../../src/models/products";
import TemplateDefault from "../../src/templates/Default";
import Card from "../../src/components/Card";

const useStyles = makeStyles((theme) => ({
  buttonAdd: {
    margin: "30px auto",
    display: "block",
  },
}));

const Home = ({ products }) => {
  const [session] = useSession();

  const classes = useStyles();
  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography variant="h2" component="h1" align="center">
          Meus Anúncios
        </Typography>

        {/* <Link href={session ? "/user/publish" : "/auth/signin"} passHref> */}
        <Button
          variant="contained"
          color="primary"
          className={classes.buttonAdd}
        >
          Publicar Novo Anúncio
        </Button>
        {/* </Link> */}
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {products.map((product) => (
            <>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  image={`/uploads/${product.files[0].name}`}
                  title={product.title}
                  subtitle={product.price}
                  actions={
                    <>
                      <CardActions>
                        <Button size="small" color="primary">
                          Editar
                        </Button>
                        <Button size="small" color="primary">
                          Editar
                        </Button>
                      </CardActions>
                    </>
                  }
                />
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </TemplateDefault>
  );
};
Home.requireAuth = true;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  await dbConnect();

  const products = await ProductsModel.find({ "user.id": session.userId });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
export default Home;
