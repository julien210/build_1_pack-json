import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import drawerImage from '../../nereus-assets/img/bg/pattern1.png';
import  CustomizedRating from './rating'


const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    backgroundImage: 'url(' + drawerImage + ')'
  },
  cardHeader: {
    paddingTop: theme.spacing(3),
  },
}));


export default function Pricing(props) {
  const classes = useStyles();

  const content = {
     'badge': 'LOREM IPSUM',
    ...props.content
  };
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState({
    checkbox: true,
  });



  return (
    <section className={classes.drawerPaper}>
      <Container maxWidth="lg">
        <Box py={6} textAlign="center">
          <Box m={12}>
            <Container maxWidth="sm">
              <Typography variant="overline" color="textSecondary">gatsby  wordpress woocommerce le Combo gagnant </Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true}>
              Une Histoire de Chats !
              </Typography>
            </Container>
          </Box>
          <Grid container spacing={6} >
            <Grid item xs={12} md={6}>  
              <Card variant="outlined">
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                       {props.title} 
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">contenu 1</Typography>
                    <img alt='poi'src= {props.image} />
                    <Typography color="textSecondary" variant="subtitle2" component="p">{props.description}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>contenu4</Typography>
                  </Box>
                  <Button variant="contained" color="primary" className={classes.primaryAction}>Buy Me</Button>
        
                  <Box mt={2}>
                    <Link href="#" color="primary">contenu  link</Link>
                  </Box>
                  <Box mt={1}>
                    <CustomizedRating />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid>
              poikkkkkkkkkkkkk
            </Grid>
        </Grid> 
        <Grid container  >
        </Grid>
        </Box>
      </Container>
    </section>
  );
}