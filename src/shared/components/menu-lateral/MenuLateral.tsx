import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import { Box } from "@mui/system";
import { ReactNode } from "react";
import { useDrawerContext } from "../../contexts/DrawerContext";

interface IMenuLateral {
    children: ReactNode;
}

export const MenuLateral = ({ children }: IMenuLateral) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
                    
                    <Box 
                        width='100%'
                        height={theme.spacing(20)}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Avatar 
                            sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                        />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component='nav'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary='Página inicial' />
                            </ListItemButton>
                        </List>
                    </Box>

                </Box>
            </Drawer>

            <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};