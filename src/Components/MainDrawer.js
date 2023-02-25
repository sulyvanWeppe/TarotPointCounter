import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

class MainDrawer extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            open: false
        }
    }

    handleDrawerClose = () => {
        this.setState({
            open: false
        })
    }


    render() {
        const drawerWidth = 240;
    
        return (
            <div className="mainDrawer">
            <Drawer
                    sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={this.state.open}
                >
                    <DrawerHeader>
                    <IconButton onClick={this.handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                        </ListItem>
                    ))}
                    </List>
                    <Divider />
                    <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                        </ListItem>
                    ))}
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default MainDrawer;