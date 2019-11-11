import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import {Link} from 'react-router-dom';
import './Products.css';
import EditFormModule from './EditFormModule'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    backgroundColor: 'rgba(245,245,245,0.9)'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(360deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(540deg)',
  },
  root: {
    color: theme.palette.text.primary,
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32,
  },
}));

export default function ShopCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }


  
  return (
    <Card className={classes.card}
       style={{width: '300px', minHeight: '420px', marginTop: '6vh'}}>

      <CardHeader
//add to cart button
        action={
            <IconButton aria-label="Info"  
                        onClick={() => props.addToCart(props.products)}
                        >

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>
            </IconButton>
        }

        title= {props.name} 
     />     


      <CardMedia
        className={classes.media}
        image= {props.image_url}
        title="sale image"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Brief Description: <br/>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
{/* bottom left corder      */}

{/* delete button */}
{/* // {this.props.user.is_admin === true ? */}
        <Link to='/products' onClick={() => props.delete_product(props.product_id)}>
            <IconButton  aria-label="Delete" >
                <DeleteOutlinedIcon />
            </IconButton>
        </Link>
  {/* : null} */}



{/* edit button */}
<EditFormModule getProducts={props.getProducts} products={props.products}/>

{/* Price */}
        <h2> ${props.price}</h2>


{/* Other card info */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>


      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
    
          <Typography paragraph>
            This is where you would put extra information about the product if that were a column in the database.   (It's currently not)
          </Typography>


        </CardContent>
      </Collapse>
    </Card>
  );
}
