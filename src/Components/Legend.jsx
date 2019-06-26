import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Sidebar, Grid } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class Legend extends Component {

  
  render() {
    return (

      <>
        <Sidebar
        className='legend-content'
        id='legend'
        as={Segment}
        animation='overlay'
        direction='bottom'
        visible={this.props.visible}>
          <Grid>
            <Grid.Column>
              <p>Carla</p>
            </Grid.Column>
          </Grid>
        </Sidebar>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    visible: state.animation.legendVisible
  }
}

export default connect(mapStateToProps)(Legend);


   // const HorizontalSidebar = ({ animation, direction, visible }) => (
  //   <Sidebar as={Segment} animation={animation} direction={direction} visible={visible}>
  //     <Grid textAlign='center'>
  //       <Grid.Row columns={1}>
  //         <Grid.Column>
  //           <Header as='h3'>New Content Awaits</Header>
  //         </Grid.Column>
  //       </Grid.Row>
  //       <Grid columns={3} divided>
  //         <Grid.Column>
  //           <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
  //         </Grid.Column>
  //         <Grid.Column>
  //           <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
  //         </Grid.Column>
  //         <Grid.Column>
  //           <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
  //         </Grid.Column>
  //       </Grid>
  //     </Grid>
  //   </Sidebar>
  // )
  
      // HorizontalSidebar.propTypes = {
    // animation: PropTypes.string,
    // direction: PropTypes.string,
    // visible: PropTypes.bool,