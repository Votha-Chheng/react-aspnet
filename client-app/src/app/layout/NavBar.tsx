import { NavLink } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'

export default function NavBar() {

    return (
        <Menu inverted fixed='top'>
        <Container>
            <Menu.Item as={NavLink} to='/' exact header>
                <img src="/assets/logo.png" alt='logo' style={{marginRight:"5px"}}/>
                Reactivities
            </Menu.Item>
            <Menu.Item name="Activities" as={NavLink} to='/activities'/>
            <Menu.Header>
                <Button as={NavLink} to='/createActivity' positive content="Create Activity" style={{margin:"10px"}} />
            </Menu.Header>
        </Container>          
        </Menu>
    )
}
