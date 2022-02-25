import { Avatar, Box, Card, CardHeader, CardMedia, Chip, Container, Grid, Typography } from '@material-ui/core'
import TemplateDefault from '../src/templates/Default'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),

    },
    productName: {
        margin: '15px 0'
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 15,
        display: 'block'
    }
}))

const Product = () => {
    const classes = useStyles()
    return (
        <TemplateDefault>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box className={classes.box}>
                            Carrossel
                        </Box>

                        <Box className={classes.box} textAlign="left">
                            <Typography component="span" variant="caption" >Publicado 16 junho de 2021</Typography>
                            <Typography component="h4" variant="h4" className={classes.productName}>Jaguar XE 2.0 D R-Sport Aut</Typography>
                            <Typography component="span" variant="h4" className={classes.price}>R$ 50.000,00</Typography>
                            <Chip label="Categoria" />
                        </Box>

                        <Box className={classes.box} textAlign="left">

                            <Typography component="h6" variant="h6" >Descrição</Typography>
                            <Typography component="p" variant="body2" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate natus deleniti libero dolorem omnis reprehenderit repudiandae aperiam repellendus nihil voluptatem?</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Card elevation={0} className={classes.box}>
                            <CardHeader
                                avatar={
                                    <Avatar>R</Avatar>
                                }
                                title="Rafael Palau"
                                subheader="rafaeldonizetip@gmail.com"
                            />
                            <CardMedia
                                image='https://source.unsplash.com/random/400x300'
                                title="Rafael Palau"
                            />
                        </Card>
                        <Box className={classes.box}>
                            <Typography component="h6" variant="h6" >Localização</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )

}

export default Product