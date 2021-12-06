import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from "@material-ui/core";
import Link from "next/link";

import { makeStyles } from "@material-ui/core";
import { AccountCircle, MenuIcon } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userName: {
    marginLeft: 6,
  },
  divider: {
    margin: "8px 0",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorUserMenu, setAnchorUserMenu] = useState(false);

  const openUserMenu = Boolean(anchorUserMenu);
  return (
    <>
      <AppBar position='static' elevation={3}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography variant='h6' component='div' className={classes.title}>
              Anunx
            </Typography>
            <Link href='/user/publish' passHref>
              <Button color='inherit' variant='outlined'>
                Anunciar e Vender
              </Button>
            </Link>
            <IconButton
              color='secondary'
              onClick={(e) => setAnchorUserMenu(e.currentTarget)}
            >
              {true === false ? <Avatar src='' /> : <AccountCircle />}
              <Typography
                variant='subtitle2'
                color='secondary'
                className={classes.userName}
              >
                Rafael Palau
              </Typography>
            </IconButton>

            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              onClose={() => setAnchorUserMenu(null)}
            >
              <Link href='/user/dashboard' passHref>
                <MenuItem>Meus anúncios</MenuItem>
              </Link>
              <Link href='/user/publish' passHref>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>
              <Divider className={classes.divider} />
              <MenuItem>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
