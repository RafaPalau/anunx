import Image from "next/image";
import { Formik } from "formik";
import axios from "axios";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/client";
import { makeStyles } from "@material-ui/core";

import {
  Box,
  Container,
  Typography,
  Input,
  FormControl,
  InputLabel,
  FormHelperText,
  Button,
  CircularProgress,
} from "@material-ui/core";

import TemplateDefault from '../../../templates/Default'
import {
  initialValues,
  validationSchema,
} from "../../../utils/formValuesSignin";
import useToasty from "../../../contexts/Toasty";

import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 30,
  },
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },
  formControl: {
    marginBottom: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  loading: {
    display: "block",
    margin: "10px auto",
  },
  errorMessage: {
    margin: "20px 0",
  },
  orSeparator: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e8e8e8",
    width: "100%",
    height: 1,
    margin: theme.spacing(7, 0, 4),

    "& span": {
      backgroundColor: "white",
      padding: "0 30px",
    },
  },
}));

const Signin = ({ APP_URL }) => {
  const classes = useStyles();
  const router = useRouter();
  const { setToasty } = useToasty();
  const [session] = useSession();

  const handleGoogleLogin = () => {
    signIn("google", {
      callbackUrl: `${APP_URL}/user/dashboard`,
    });
  };

  const handleFormSubmit = (values) => {
    signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: `${APP_URL}/user/dashboard`,
    });
  };

  return (
    <TemplateDefault>
      <Container maxWidth="sm" component="main" className={classes.container}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
        >
          Entre na sua conta
        </Typography>
      </Container>

      <Container>
        <Box className={classes.box}>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              startIcon={
                <Image
                  src="/images/logo_google.png"
                  width={20}
                  height={20}
                  alt="Login com Google"
                />
              }
              onClick={handleGoogleLogin}
            >
              Entrar com Google
            </Button>
          </Box>

          <Box className={classes.orSeparator}>
            <span>ou</span>
          </Box>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {({
              errors,
              touched,
              values,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => {
              return (
                <form onSubmit={handleSubmit}>
                  {router.query.i === "1" ? (
                    <Alert severity="error" className={classes.errorMessage}>
                      Usuário ou senha inválidos
                    </Alert>
                  ) : null}

                  <FormControl
                    fullWidth
                    error={errors.email && touched.email}
                    className={classes.formControl}
                  >
                    <InputLabel>Email</InputLabel>
                    <Input
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <FormHelperText>
                      {errors.email && touched.email ? errors.email : null}
                    </FormHelperText>
                  </FormControl>

                  <FormControl
                    fullWidth
                    error={errors.password && touched.password}
                    className={classes.formControl}
                  >
                    <InputLabel>Senha</InputLabel>
                    <Input
                      name="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    <FormHelperText>
                      {errors.password && touched.password
                        ? errors.password
                        : null}
                    </FormHelperText>
                  </FormControl>

                  {isSubmitting ? (
                    <CircularProgress className={classes.loading} />
                  ) : (
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Entrar
                    </Button>
                  )}
                </form>
              );
            }}
          </Formik>
        </Box>
      </Container>
    </TemplateDefault>
  );
};

Signin.getInitialProps = async function () {
  return {
    APP_URL: process.env.APP_URL,
  };
};

export default Signin;
