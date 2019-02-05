import React from 'react';
import PropTypes from 'prop-types';
//import components
import PersonalDtl from "./PersonalDtl";
import CreditCardDtls from "./creditCardDtls";
//Material Components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const style = theme => ({
    root:{
        flexGrow: 1,
        padding: "0",
        textAlign: "center",
        marginTop:64,
        transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
        backgroundImage:"url('/asset/images/slide1.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition:"center"
    },
    brief:{
        display: "table",
        width: "100%",
        height:"calc(100vh - 100px)",
        paddingTop: "20px"

    },
    briefchild:{
        display: "table-cell",
        verticalAlign:"middle",
        paddingBottom: "14vh"
    },
    personaldtlsconatiner:{        
        [theme.breakpoints.down('sm')]: {
            width: "85%",
        },
        [theme.breakpoints.up('md')]: {
            width: "60%",
        },
        margin: "0px auto",
        background: "#f5f5f5cc",
        padding: "7px",
        borderRadius: "3px",
        backgroundImage: "url(/asset/images/bg.png)",
        boxShadow: "0px 1px 3px 0px #000"
    }
});
class BodyContainer extends React.Component {
    render(){
        const currentLanguage = "eng";
        const {classes, settings, metalangdata} = this.props;
        const languageData = metalangdata[currentLanguage];
        return(
            typeof(languageData) != "undefined" ? 
            <main className={classes.root}>
                <Typography id="welcome_container" component="div" className={classes.brief + " page-container"}>
                    <div className={classes.briefchild}>
                        <div className={classes.personaldtlsconatiner}>
                            <h2>{metalangdata[currentLanguage].welcome_message}</h2>
                        </div>
                    </div>
                </Typography>
                <Typography id="personal_container" component="div" className={classes.brief + " page-container"} style={{display:"none"}}>
                    <div className={classes.briefchild}>
                        <div className={classes.personaldtlsconatiner}>
                            <PersonalDtl settings={settings}></PersonalDtl>
                        </div>
                    </div>
                </Typography>
                <Typography id="creditcard_container" component="div" className={classes.brief + " page-container"} style={{display:"none"}}>
                    <div className={classes.briefchild}>
                        <div className={classes.personaldtlsconatiner}>
                            <CreditCardDtls settings={settings}></CreditCardDtls>
                        </div>
                    </div>
                </Typography>
            </main> : null
        )
    }
};
BodyContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired,
    metalangdata:PropTypes.object.isRequired
};
export default withStyles(style)(BodyContainer);