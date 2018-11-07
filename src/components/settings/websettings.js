const defaultWebSettings = {
    website_header:{
        heading:"Logo",
        menuicon:"asset/images/icons/menuicon.svg",
        Appbar:{
            position:"fixed",
            color:"default"
        },
        Drawer:{
            open:true,
            variant:"persistent", 
            anchor:"left"
        }
    },
    website_body:{
        action_btns:[
            {name:"Save",status:true,type:"primary", variant:"contained"},
            {name:"Cancle",status:true,type:"primary", variant:"outlined"}
        ]
    },
    wbsite_footer:{
        title:"Folllow on",
        sections:["Social","Community","Email","Blog","Professional"],
        copyright:["©"]
    }
};

export default defaultWebSettings;