import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

interface Props{
    openForm: ()=>void;
}

export default function NavBar({openForm}: Props) {
    return (
        <Menu inverted fixed='top'>
        <Container>
            <Menu.Item header>
                <img src="/assets/logo.png" alt='logo' style={{marginRight:"5px"}}/>
                Reactivities
            </Menu.Item>
            <Menu.Item name="Activities" />
            <Menu.Header>
                <Button onClick={openForm} positive content="Create Activity" style={{margin:"10px"}} />
            </Menu.Header>
        </Container>          
        </Menu>
    )
}
