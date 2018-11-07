import React from 'react';
import PropTypes from 'prop-types';
//Material Components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//Custom Components
import {FooterIcon,FullYear} from './utility';

const style = theme => ({
    root:{
        flexGrow: 1,
        padding:16,
        textAlign: "center",
        backgroundColor: "rgba(250, 235, 215, 0.4)",
        marginTop: 30
    },
    footHeading:{
        marginBottom:30
    },
    footSubHeading:{
        textDecoration: "underline"
    },
    sectionUl:{
        marginBottom: 20,
        [theme.breakpoints.down('sm')]: {
            marginRight: 0
        },
        [theme.breakpoints.up('md')]: {
            marginRight: 50,
            display: "inline-table",
        }
    },
    sectionList:{
        width: 36,
        height: 36,
        display: "inline-flex",
        boxSizing: "content-box",
        padding: "10px 16px"
    }
});
class Footer extends React.Component {
    render(){
        const {classes,metadata,settings} = this.props;        
        const footer = settings.wbsite_footer;
        const patronName = metadata.body_conatiner.profile_details.name;
        let index = 0;
        return(
            <footer className={classes.root}>
                <Typography variant="title" className={classes.footHeading}>{footer.title}</Typography>
                {
                    footer.sections.map((sec,key) => (
                        metadata.footer[sec.toLocaleLowerCase()].length ? 
                        <List key={key} className={classes.sectionUl}>
                            <Typography variant="body2" className={classes.footSubHeading}>{sec}</Typography>
                            {
                                metadata.footer[sec.toLocaleLowerCase()].map((sol) =>(
                                    sol.status ? <ListItem key={index++} className={classes.sectionList}>
                                        <FooterIcon type={sol.name.toLocaleLowerCase()} title={sol.name} url={sol.url}/>
                                    </ListItem> : null
                                ))
                            }
                        </List> : null
                    ))
                }
                <Typography component="div">{footer.copyright}<span>{" " + patronName + " "}</span><FullYear /></Typography>
            </footer>
        )
    }
}
Footer.propTypes = {
    classes: PropTypes.object.isRequired,
    metadata: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired
};
export default withStyles(style)(Footer);